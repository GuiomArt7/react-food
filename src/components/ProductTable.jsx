import useSWR from "swr"
import clienteAxios from "../config/axios"
import { formatearDinero } from "../helpers"
import useMenu from "../hooks/useMenu"

export default function ProductTable() {

    const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/productos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(datos => datos.data)

  const {data, error, isLoading } = useSWR('/api/productos', fetcher, {refreshInterval:10000})
  const {handleClickEditarProducto} = useMenu()

  if(isLoading)return 'Cargando...'
  console.log(data)
  console.log(error)


    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-20">
            <div className="mt-8 flow-root ">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
                        <table className="min-w-full divide-y divide-gray-300 ">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Producto
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Precio
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Categoría
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Acciones</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {data.data.map(producto => (
                                
                                <tr key={producto.id}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                        {producto.nombre}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {formatearDinero(producto.precio)}
                                    </td> 
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {producto.categoria_id}
                                    </td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <button 
                                        type="button" 
                                        className='bg-cyan-800 hover:bg-cyan-950 px-5 py-2 rounded uppercase 
                                        font-bold text-white text-center w-full cursor-pointer'
                                        onClick={() => handleClickEditarProducto(producto.id)}
                                    >
                                        Editar
                                    </button>
                                    </td>
                                </tr>

                            ))}
                        
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}