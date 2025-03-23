import { json } from '@sveltejs/kit';
import mysql from 'mysql2/promise';

const dbConfig = {
    port: 16851,
    host: 'mysql-ad51b2f-ftcscout.f.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_HT0sFv9Q5KamEIgDxZM',
    database: 'defaultdb'
};

export async function runSQL(sqlQuery: string) {
    try {
        if (!sqlQuery) {
            return json({ error: "No SQL query provided." }, { status: 400 });
        }

        if (typeof sqlQuery === "string") {
            try {
                const parsedQuery = JSON.parse(sqlQuery);
                sqlQuery = parsedQuery.query || sqlQuery;
            } catch (err) {
                // It's already a string, no need to parse
            }
        }

        console.log("🚀 Executing SQL:", sqlQuery);

        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute(sqlQuery);
        await connection.end();
        
        console.log("ran SQL returned output: ", json({ results: rows }));
        return json({ results: rows });

    } catch (error) {
        console.error("❌ Database Error:", error);
        return json({ error: "Database query failed: " + (error as Error).message }, { status: 500 });
    }
}
