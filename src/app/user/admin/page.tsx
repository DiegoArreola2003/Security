import Link from "next/link";
import Image from "next/image";
import LogoutButton from "../../components/LogoutButton";

export default function AdminPage() {
  return (
    <div className="m-6 flex flex-col items-center gap-5">
      <div className="w-full flex justify-end">
        <LogoutButton />
      </div>
      <div className="bg-white rounded-lg shadow-lg w-100 h-190 p-6 flex flex-col justify-between">
        <div className="m-6 flex flex-col items-center">
          <Image
            src="/img/p_9.jpg"
            alt="Pug feliz"
            width={300}
            height={350}
            className="rounded-xl shadow-lg"
            priority
          />
          <h4 className="text-2xl m-6 text-black font-bold mb-4">
            Administrar clientes
          </h4>
        </div>
        <Link
          href=""
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
        >
          Ver
        </Link>
      </div>
    </div>
  );
}
