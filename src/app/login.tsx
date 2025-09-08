export default function Home() {
    return (
      <section className="flex flex-col items-center justify-center text-center px-6 py-12">
        <h2 className="text-4xl font-extrabold">
          PugPedia
        </h2>
  
        <p className="mt-6 text-lg text-white ">
          Esta es la página inicial orientada a la venta de productos
          para perros pug
        </p>
  
        <div className="mt-8 flex gap-4 flex-col sm:flex-row">
          <a
            href="#"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Empezar
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Documentación
          </a>
        </div>
      </section>
    );
  }
  