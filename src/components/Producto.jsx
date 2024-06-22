import { formatearDinero } from "../helpers"
import useMenu from "../hooks/useMenu"

export default function Producto({producto, botonAgregar = false, botonDisponible = false, botonAgotado = false}) {

    const { handleClickModal, handleSetProducto, handleClickProductoAgotado, handleClickAgotado} = useMenu();
    const { nombre, imagen, precio} = producto

  return (
    <div className="border p-3 shadow bg-whie">
        <img 
        className="w-full h-80"
        src={`/img/${imagen}.jpg`}
        alt={`imagen ${nombre}`} 
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatearDinero(precio)}
            </p>

            {botonAgregar && (
            <button
                type="button"
                className="bg-cyan-800  hover:bg-cyan-950 text-white w-full mt-5 p-3 uppercase font-bold"
                onClick={() => {
                    handleClickModal();
                    handleSetProducto(producto);
                }}
                >Agregar

            </button>
            )}
            {botonDisponible && (
                <button
                type="button"
                className="bg-cyan-800  hover:bg-cyan-950 text-white w-full mt-5 p-3 uppercase font-bold"
                onClick={() => handleClickProductoAgotado(producto.id)}
                >Producto Agotado

            </button>
            )}

            {botonAgotado && (
                <button
                type="button"
                className="bg-cyan-800  hover:bg-cyan-950 text-white w-full mt-5 p-3 uppercase font-bold"
                onClick={() => {
                    handleClickAgotado(producto.id,)}}
                >Producto Disponible

            </button>
            )}
        </div>
    </div>
  )
}
