export const dynamic = "force-dynamic";
import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "3.22.185.247",
    database: "Estacion",
    user: "Erick",
    password: "ERICKPI",
  },
  library: require("mysql2"),
});

export async function GET(request, context) {
  const { pathname } = new URL(request.url);

  if (pathname === `/api/bydate`) {
    try {
      const results = await db.query(
        `SELECT s.id, s.FechaRegistro, s.Temperatura, s.Humedad, s.velocidad_viento, s.TemperaturaSuelo
        FROM sensores s
        JOIN (
            SELECT MAX(id) as max_id, DATE(FechaRegistro) as FechaRegistro
            FROM sensores
            GROUP BY DATE(FechaRegistro)
        ) AS max_ids ON s.id = max_ids.max_id AND DATE(s.FechaRegistro) = max_ids.FechaRegistro
        ORDER BY s.id ASC;`);

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