import Categoria from "./Categoria"
import { categorias } from "../data/categorias"

export default function Sidebar() {
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
                    categoria={categoria}
                />
            ))}
        </div>

        <div className="my-5 py-5" >
            <button
            type="button"
            className="text-center bg-red-500 w-full p-3 font-bold text-white truncate">
                Cancelar Orden
            </button>
        </div>
    </aside>
  )
}
