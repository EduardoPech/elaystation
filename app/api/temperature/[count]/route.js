export const dynamic = "force-dynamic";
import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "db-web.c6bpgmk1qwyq.us-east-2.rds.amazonaws.com",
    database: "proyecto",
    user: "admin",
    password: "lT62Ksq9HVXs5NIDQ5fM",
  },
});

export async function GET(request, context) {
  const { pathname } = new URL(request.url);
  const count = context.params.count;

  console.log("request.params ->", request);
  console.log("count ->", count);
  console.log("pathname ->", pathname);

  if (pathname === `/api/temperature/${count}`) {
    try {
      const results = await db.query(
        "SELECT id, fecha_registro, temperatura, humedad FROM `DHT11` ORDER BY id DESC LIMIT " +
          count
      );

      await db.end();
      return new Response(JSON.stringify(results), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log("error ->", error);
      return new Response("Error", { status: 404 });
    }
  }

  return new Response("Not found", { status: 404 });
}
