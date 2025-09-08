export default function SigninPage() {
  return (
    <section className="flex min-h-screen bg-black items-center justify-center px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Crea una cuenta</h1>
        
        <form className="space-y-4 text-black">
          <div>
            <label className="block text-sm font-medium text-gray-700">Ingresa un correo electrónico</label>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Crea una contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Crear
          </button>
        </form>
      </div>
    </section>
  );

}
