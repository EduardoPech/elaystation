import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "db-web.c6bpgmk1qwyq.us-east-2.rds.amazonaws.com",
    database: "proyecto",
    user: "admin",
    password: "lT62Ksq9HVXs5NIDQ5fM",
  },
});

export async function GET(request) {
  const { pathname } = new URL(request.url);
  // if (pathname === "/api") {
  //   try {
  //     const results = await db.query("SELECT * FROM `datos`");
  //     await db.end();
  //     return new Response(JSON.stringify(results), {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   } catch (error) {
  //     return { error };
  //   }
  // }

  if (pathname === "/api/users") {
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
