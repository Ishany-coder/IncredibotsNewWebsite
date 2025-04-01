import { createOpenAI } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import type { RequestHandler } from './$types';
import { z } from 'zod';
import { generateSQL } from './getSQLData';
import { runSQL } from './runSQL';
import { env } from '$env/dynamic/private';

const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY ?? '',
});

function errorHandler(error: unknown) {
  if (error == null) {
    return 'unknown error';
  }

  if (typeof error === 'string') {
    return error;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return JSON.stringify(error);
}

async function getTeamData(messages: { content: string; role: string }[]) {
  console.log('CALLING generateSQL with messages:', JSON.stringify(messages, null, 2));
  const queryResponse = await generateSQL(messages);
  console.log('generateSQL response:', queryResponse);
  const queryData = await queryResponse.json();
  console.log('Parsed query data:', queryData);
  const sqlQuery = queryData.newSqlQuery;
  console.log('Generated SQL query:', sqlQuery);
  
  console.log('CALLING runSQL with query:', sqlQuery);
  const dbResponse = await runSQL(sqlQuery);
  console.log('runSQL response:', dbResponse);
  const dbData = await dbResponse.json();
  console.log('Parsed DB data:', dbData);
  
  return { sqlQuery, dbData };
}

export const POST = (async ({ request }) => {
  try {
    const { messages } = await request.json();
    console.log("Starting ChatGPT request with messages:", JSON.stringify(messages, null, 2));

    // Test if API key is present
    if (!env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    // Clean up messages to ensure they're in the correct format
    const cleanedMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    }));

    // Add system message to guide the model
    const messagesWithSystem = [
      {
        role: 'system',
        content: 'You are a helpful assistant. For questions about team performance, scores, or rankings, use the teamScout tool to get accurate data. For general questions or greetings, respond directly without using the tool.'
      },
      ...cleanedMessages
    ];

    console.log("Messages with system prompt:", JSON.stringify(messagesWithSystem, null, 2));

    // Create the stream with tools
    const stream = streamText({
      model: openai('gpt-4'),
      messages: messagesWithSystem,
      tools: {
        teamScout: tool({
          description: 'Use this tool to get accurate information about team performance, scores, and rankings. This tool will query the database to find teams based on their performance metrics. Only use this tool when specifically asked about team scores, rankings, or performance.',
          parameters: z.object({}),
          execute: async () => {
            console.log('------ Calling the teamScout tool -------');
            console.log('Current messages:', JSON.stringify(messagesWithSystem, null, 2));
            const { sqlQuery, dbData } = await getTeamData(messagesWithSystem);
            console.log('Tool execution completed');
            console.log('SQL Query:', sqlQuery);
            console.log('DB Data:', dbData);
            return {
              sqlQuery,
              dbData
            };
          },
        }),
      },
    });

    console.log("Stream created successfully");
    
    // Create the response
    const response = stream.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });

    console.log("Response created successfully");
    console.log("Response status:", response.status);
    console.log("Response headers:", Object.fromEntries(response.headers.entries()));

    // Add CORS headers
    const headers = new Headers(response.headers);
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');

    // Create the final response
    const finalResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });

    console.log("Final response created");
    console.log("Final response status:", finalResponse.status);
    console.log("Final response headers:", Object.fromEntries(finalResponse.headers.entries()));
    
    // Clone the response to read the body
    const clonedResponse = finalResponse.clone();
    const reader = clonedResponse.body?.getReader();
    if (reader) {
      console.log("Response has a body stream");
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            console.log("Stream complete");
            break;
          }
          console.log("Stream chunk:", new TextDecoder().decode(value));
        }
      } catch (e) {
        console.error("Error reading stream:", e);
      }
    } else {
      console.log("Response has no body stream");
    }

    return finalResponse;

  } catch (err) {
    console.error('Error in chat endpoint:', err);
    
    // Handle connection reset specifically
    if (err instanceof Error && 'code' in err && err.code === 'ECONNRESET') {
      console.log('Connection was reset by client');
      return new Response(
        JSON.stringify({ 
          error: 'Connection was reset',
          details: 'The connection was closed before the response could be completed'
        }), 
        {
          status: 499,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        error: 'An error occurred',
        details: errorHandler(err)
      }), 
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}) satisfies RequestHandler;

// Handle OPTIONS request for CORS
export const OPTIONS = (async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}) satisfies RequestHandler;