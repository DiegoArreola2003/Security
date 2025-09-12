import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = "SeguridadDB"; 

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    await client.connect();
    const db = client.db(dbName);
    const users = db.collection("SeguridadClass");

    const user = await users.findOne({ email, password });

    if (!user) {
      return NextResponse.json(
        { error: "Correo o contraseña incorrectos" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "Login exitoso",
      user: {
        email: user.email,
        rol: user.rol,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
