<script>
    import Navbar from '$lib/Navbar.svelte';
    import { Chat } from '@ai-sdk/svelte';
    import markdownIt from 'markdown-it';

    let md = new markdownIt();
    const chat = new Chat();
  </script>
  <Navbar />
  <main class="flex flex-col h-210 bg-[#343541]">
    <div class="flex h-full flex-1 flex-col">
      <div class="flex-1 overflow-hidden">
        <!-- Chat messages container -->
        <div class="h-full overflow-y-auto p-4 container mx-auto max-w-5xl">
          <!-- Welcome message -->
          {#if chat.messages.length === 0}
            <div class="flex justify-center items-center h-full">
              <div class="text-center text-gray-300 max-w-xl px-4">
                <h1 class="text-2xl font-bold mb-4">FTC Scouting Chatbot</h1>
                <p class="text-gray-400">Start a conversation by sending a message below.</p>
              </div>
            </div>
          {/if}

          {#each chat.messages as message}
            <div class="flex w-full mb-4 px-4 md:px-8 {message.role === 'user' ? 'justify-end' : 'justify-start'}">
              <div class="flex gap-3 {message.role === 'user' ? 'flex-row-reverse' : 'flex-row'} max-w-[85%] md:max-w-[75%]">
                <div class="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center 
                  {message.role === 'user' ? 'bg-transparent' : 'bg-transparent'}">
                  {#if message.role === 'user'}
                    <img src="/user.png" alt="User" class="h-20 w-20 object-contain mt-5"/>
                  {:else}
                    <img src="/favicon.png" alt="AI" class="h-8 w-8 object-contain" />
                  {/if}
                </div>
                <div class="flex flex-col">
                  <div class="rounded-2xl px-6
                    {message.role === 'user' 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-none' 
                      : 'bg-[#40414F] text-gray-100 rounded-bl-none'}">
                    <p class="text-[15px] leading-6">{@html md.render(message.content)}</p>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Input container - fixed at bottom -->
      <div class="w-full border-t border-gray-700/50 bg-[#343541] p-4">
        <div class="mx-auto flex max-w-3xl flex-row gap-3 px-4">
          <form 
            on:submit={chat.handleSubmit} 
            class="relative flex h-full flex-1 flex-col"
          >
            <div class="relative flex flex-grow flex-col rounded-xl border border-gray-700/50 bg-[#40414F] shadow-[0_0_15px_rgba(0,0,0,0.1)]">
              <input 
                type="text" 
                bind:value={chat.input} 
                class="m-0 w-full resize-none border-0 bg-transparent p-4 text-white focus:ring-0 focus-visible:ring-0 pl-4 pr-12 md:py-4 md:pl-4" 
                placeholder="Send a message..." 
                style="max-height: 200px; height: 54px; overflow-y: hidden;"
              />
              <button 
                type="submit" 
                class="absolute bottom-2.5 right-2.5 p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-colors duration-200"
              >
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div class="text-center text-xs text-gray-500 mt-2">
          AI Assistant may produce inaccurate information.
        </div>
      </div>
    </div>
  </main>
  
  <style>
    /* Remove the previous animation styles if you want to match ChatGPT's simpler approach */
    input::placeholder {
      color: #8E8EA0;
    }
  </style>