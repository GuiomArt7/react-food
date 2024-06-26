import useMenu from "../hooks/useMenu"
import Categoria from "./Categoria"
import { useAuth } from "../hooks/useAuth"


export default function Sidebar() {

    const { categorias } = useMenu()
    const {logout, user} = useAuth({middleware: 'auth'})
  return (
    <aside className="md:w-72">
        <div className="flex justify-center p-2 items-center">
            <img  className="w-40"
            src="img/s.svg" 
            alt="imagen logo" />
        </div>

        <p className="my-1 text-xl font-bold text-center text-indigo-900">Hola {user?.name}</p>

        <div className="mt-1">
            {categorias.map( categoria => (
                <Categoria 
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </div>

        <div className="py-5" >
            <button
            type="button"
            className="text-center bg-pink-900  w-full p-3 font-bold text-white truncate"
            onClick={logout}>
                Cerrar Sesión 
            </button>
        </div>
    </aside>
  )
}
