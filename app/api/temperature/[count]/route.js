export const dynamic = "force-dynamic";
import { dbSensors as db } from "../../dbClient.js";

export async function GET(request, context) {
  const { pathname } = new URL(request.url);
  const count = context.params.count;

  if (pathname === `/api/temperature/${count}`) {
    try {
      const results = await db.query(
        "SELECT id, FechaRegistro, Temperatura, Humedad, velocidad_viento, TemperaturaSuelo, uv, humedad_suelo FROM `sensores` ORDER BY id DESC LIMIT " +
          count
      );

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
