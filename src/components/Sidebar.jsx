import useMenu from "../hooks/useMenu"
import Categoria from "./Categoria"


export default function Sidebar() {

    const { categorias } = useMenu()
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
            className="text-center bg-red-500 w-full p-3 font-bold text-white truncate">
                Cancelar Orden
            </button>
        </div>
    </aside>
  )
}
