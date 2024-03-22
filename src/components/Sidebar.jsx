import useMenu from "../hooks/useMenu"
import Categoria from "./Categoria"
import { useAuth } from "../hooks/useAuth"


export default function Sidebar() {

    const { categorias } = useMenu()
    const {logout} = useAuth({middleware: 'auth'})
  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img  className="w-50"
            src="img/s.svg" 
            alt="imagen logo" />
        </div>

        <div className="mt-1">
            {categorias.map( categoria => (
                <Categoria 
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </div>

        <div className="my-5 py-5" >
            <button
            type="button"
            className="text-center bg-pink-900  w-full p-3 font-bold text-white truncate"
            onClick={logout}>
                Cancelar Orden
            </button>
        </div>
    </aside>
  )
}
