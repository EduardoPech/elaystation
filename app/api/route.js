import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "3.144.137.115",
    database: "sensor",
    user: "Erick",
    password: "ERICKPI",
  },
});

export async function GET(request) {
  const { pathname } = new URL(request.url);
  if (pathname === "/api") {
    try {
      const results = await db.query("SELECT * FROM `datos`");
      await db.end();
      return new Response(JSON.stringify(results), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      return { error };
    }
  }
  return new Response("Not found", { status: 404 });
}
