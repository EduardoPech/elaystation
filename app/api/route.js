import { dbUsers as db } from "./dbClient.js";

export async function GET(request) {
  const { pathname } = new URL(request.url);

  if (pathname === "/api") {
    try {
      const results = await db.query("SELECT * FROM `users`");
      await db.end();
      return new Response(JSON.stringify(results), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      return new Response("Error", { status: 404 });
    }
  }
  return new Response("Not found", { status: 404 });
}
