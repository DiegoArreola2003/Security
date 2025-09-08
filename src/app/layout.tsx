import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seguridad",
  description: "Página de inicio creada con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <header className="w-full bg-blue-100 shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl text-black font-bold">PugPedia</h1>
        </header>

        <main className="flex-grow p-6">{children}</main>

        <footer className="w-full bg-white border-t text-center text-sm text-gray-500 py-4">
         {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
