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

export async function GET(request) {
  const { pathname } = new URL(request.url);

  if (pathname === "/api/users") {
    try {
      const results = await db.query("SELECT id, name, user FROM `users`");

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

export async function POST(request) {
  const { pathname } = new URL(request.url);

  if (pathname === "/api/users") {
    try {
      const formData = await request.formData();
      const name = formData.get("name");
      const user = formData.get("user");
      const password = formData.get("password");
      const passwordEncrypt = bcrypt.hashSync(password, 10);

      const results = await db.query("INSERT INTO `users` SET ?", {
        name,
        user,
        password: passwordEncrypt,
      });
      await db.end();

      return Response.json({ name, user });
    } catch (error) {
      console.log("error ->", error);
      return new Response("Not found", { status: 404 });
    }
  }
  return new Response("Not found", { status: 404 });
}
