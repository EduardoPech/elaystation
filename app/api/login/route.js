export const dynamic = "force-dynamic";
import mysql from "serverless-mysql";
import bcrypt from "bcrypt";

const db = mysql({
  config: {
    host: "db-web.c6bpgmk1qwyq.us-east-2.rds.amazonaws.com",
    database: "proyecto",
    user: "admin",
    password: "lT62Ksq9HVXs5NIDQ5fM",
  },
});

// Login
export async function POST(request) {
  const { pathname } = new URL(request.url);

  if (pathname === "/api/login") {
    try {
      const formData = await request.formData();
      const user = formData.get("user");
      const password = formData.get("password");

      const results = await db.query("SELECT * FROM `users` WHERE user = ?", [
        user,
      ]);
      await db.end();

      if (results.length > 0) {
        const user = results[0];
        const validPassword = bcrypt.compareSync(password, user.password);

        const { id, name, user: username } = user;

        if (validPassword) {
          return new Response(JSON.stringify({ id, name, user: username }), {
            headers: {
              "Content-Type": "application/json",
            },
          });
        } else {
          return new Response("Not valid user", { status: 404 });
        }
      }

      return new Response("Not data", { status: 404 });
    } catch (error) {
      return new Response("Error", { status: 404 });
    }
  }
  return new Response("Not found api", { status: 404 });
}
