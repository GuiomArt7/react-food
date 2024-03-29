import { formatearDinero } from "../helpers";
import useMenu from "../hooks/useMenu"
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {
    const {pedido, total, handleSubmitNuevaOrden} = useMenu();

    const comprobarPedido = ()=> pedido.length === 0;

    const handleSubmit = e => {
      e.preventDefault();
      handleSubmitNuevaOrden();
    }

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">
        Mi pedido
      </h1>
      <p className="text-lg my-5">
        Resumen y total del pedido
      </p>

      <div className="py-10">
        {pedido.length === 0 ? (
          <p className="text-center text-2xl">
            No hay elementos en tu pedido aún
          </p>
        ) : (
          pedido.map(producto => (
            <ResumenProducto
            key={producto.id}
            producto={producto}/>
          ))
        )}
      </div>

      <p className="text-xl mt-10">
            Total: {''}
            {formatearDinero(total)}
      </p>

      <form 
      className="w-full"
      onSubmit={handleSubmit}
      >
        <div className="mt-5">
          <input 
            type="submit" 
            className={`${comprobarPedido() ? 
              'bg-indigo-100' : 
              'bg-cyan-800 hover:bg-cyan-950'} px-5 py-2 rounded uppercase 
            font-bold text-white text-center w-full cursor-pointer`}
            value="Confirmar pedido"
            disabled={comprobarPedido()}
          />
        </div>

      </form>
    </aside>
  )
}
