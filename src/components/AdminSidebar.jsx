import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminSidebar() {

    const {logout} = useAuth({middleware: 'auth'});

  return (
    <aside className="md:w-72 h-screen">
        <div className="p-4">
            <img 
            src="/img/s.svg" 
            alt="imagen logotipo"
            className="w-50" 
            />
        </div>

        <nav className="flex flex-col p-4">
            <Link to="/admin" className="font-bold text-lg flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">Órdenes</Link>
            <Link to="/admin/productos" className="font-bold text-lg flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">Productos</Link>
            <Link to="/" className="font-bold text-lg flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer" target="_blank">Ver Menú</Link>
        </nav>

        <div className="my-5 px-5">
            <button
            type="button"
            className="text-center bg-pink-900  w-full p-3 font-bold text-white truncate"
            onClick={logout}>
                Cerrar sesión
            </button>
        </div>

    </aside>
  )
}
