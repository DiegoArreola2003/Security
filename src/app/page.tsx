import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full min-h-[50vh] flex flex-col md:flex-row items-center justify-center bg-blue-900 text-white px-8">
        <div className="flex-1 text-center space-y-6">
          <h2 className="text-5xl font-extrabold">PugPedia</h2>
          <p className="text-3xl max-w">
            Bienvenido a la tienda oficial orientada a la venta de productos
            especiales para perros pug. ¡Todo lo que tu pug necesita en un solo lugar!
          </p>
        </div>

        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <Image
            src="/pug.png"
            alt="Pug feliz"
            width={900}
            height={900}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      </section>

      <section className="w-full min-h-[50vh] flex items-center justify-center bg-blue-700 text-white px-8 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-center order-1 md:order-1">
            <Image
              src="/pug_1.png"
              alt="Pug feliz"
              width={300}
              height={300}
              className="rounded-xl shadow-lg max-w-full h-auto"
              priority
            />
          </div>

          <div className="flex-1 flex flex-col items-center text-center order-3 md:order-2 px-4">
            <h2 className="text-4xl font-bold mb-6">Nuestros productos</h2>
            <p className="text-xl md:text-2xl mb-4">
              Contamos con una gran variedad de accesorios, alimentos y juguetes
              diseñados especialmente para la raza pug. Calidad y comodidad
              garantizadas.
            </p>
            <p className="text-lg md:text-xl mb-6">Inicia sesión para ver nuestros productos</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                href="/login" 
                className="px-12 py-7 md:text-2xl me-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-800 transition duration-300"
              >
                Login
              </a>
              <a 
                href="/signin" 
                className="px-12 py-7 md:text-2xl ms-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-800 transition duration-300"
              >
                Signin
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center order-2 md:order-3">
            <Image
              src="/pug_2.png"
              alt="Pug feliz"
              width={300}
              height={300}
              className="rounded-xl shadow-lg max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
      
      <section className="w-full min-h-[50vh] flex flex-col md:flex-row items-center justify-center bg-blue-500 text-white px-8">
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <Image
            src="/pug_3.png"
            alt="Pug con correa"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold mb-6">Sobre nosotros</h2>
          <p className="text-3xl max-w">
            Somos una página dedicada a consentir la los pug y para eso 
            ponemos a la venta estos productos.
          </p>
        </div>
      </section>
    </main>
  );
}
