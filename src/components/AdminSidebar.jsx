import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useLocation } from "react-router-dom";

export default function AdminSidebar() {

    const {logout, user} = useAuth({middleware: 'auth'});
    const location = useLocation(); // Obtener la ruta actual

  return (
    <aside className="md:w-72 h-screen">
        <div className="p-4">
            <img 
            src="/img/s.svg" 
            alt="imagen logotipo"
            className="w-50" 
            />
        </div>
        <p className="my-1 text-xl font-bold text-center text-indigo-900">Hola {user?.name}</p>

        <nav className="flex flex-col p-4">
            <Link to="/admin" className={`font-bold text-lg flex items-center gap-4 border w-full p-3  hover:bg-amber-400 cursor-pointer ${location.pathname === "/admin" ? "bg-amber-400" : ""}`}>Órdenes</Link>
            <Link to="/admin/productos" className={`font-bold text-lg flex items-center gap-4 border w-full p-3  hover:bg-amber-400 cursor-pointer ${location.pathname === "/admin/productos" ? "bg-amber-400" : ""}`}>Productos</Link>
            <Link to="/admin/agotados" className={`font-bold text-lg flex items-center gap-4 border w-full p-3  hover:bg-amber-400 cursor-pointer ${location.pathname === "/admin/agotados" ? "bg-amber-400" : ""}`}>Agotados</Link>
            <Link to="/admin/usuarios" className={`font-bold text-lg flex items-center gap-4 border w-full p-3  hover:bg-amber-400 cursor-pointer ${location.pathname === "/admin/usuarios" ? "bg-amber-400" : ""}`}>Usuarios</Link>
            <Link to="/" className="font-bold text-lg flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer" target="_blank">Ver Menú</Link>
            <Link to="/auth/registro" className={`font-bold text-lg flex items-center gap-4 border w-full p-3  hover:bg-amber-400 cursor-pointer ${location.pathname === "/auth/registro" ? "bg-amber-400" : ""}`}>Registro</Link>
            
            
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
