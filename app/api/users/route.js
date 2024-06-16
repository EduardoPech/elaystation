export const dynamic = "force-dynamic";
import { dbUsers as db } from "../dbClient.js";
import bcrypt from "bcrypt";

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
      return new Response("Error", { status: 404 });
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
      return new Response("Not found", { status: 404 });
    }
  }
  return new Response("Not found", { status: 404 });
}
