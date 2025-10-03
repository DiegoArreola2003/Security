import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const users = [
  { email: "admin@gmail.com", password: "admin123", rol: "1" }, 
  { email: "cliente@gmail.com", password: "cliente123", rol: "2" },
];

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: "Correo o contraseña incorrectos" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { email: user.email, rol: user.rol },
      process.env.JWT_SECRET || "secretito", 
      { expiresIn: "1h" }
    );

    const response = NextResponse.json({
      message: "Login exitoso",
      user: {
        email: user.email,
        rol: user.rol,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60, 
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
