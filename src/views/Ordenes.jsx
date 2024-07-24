import useSWR from "swr"
import clienteAxios from "../config/axios"
import {formatearDinero} from '../helpers'
import useMenu from '../hooks/useMenu'

export default function Ordenes() {

  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/pedidos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const {data, isLoading} = useSWR('/api/pedidos', fetcher)

  const {handleClickCompletarPedido} = useMenu()
 
  if(isLoading) return(
    <div className="text-center">
      <div role="status">
        <svg aria-hidden="true" className="inline w-10 h-10 text-cyan-200 animate-spin dark:text-cyan-600 fill-cyan-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
  return (
    <div>
      <h1 className='text-5xl font-black'>Órdenes</h1>
      <p className='text-3xl my-10'>Administra las órdenes desde aquí</p>

      <div className="grid grid-cols-2 gap-5">
        {data.data.data.map(pedido => (
          <div key={pedido.id} className="p-5 bg-white shadow space-y-2 border-b">
              <p className="text-4xl font-bold text-slate-600">
              Comanda {pedido.id}
              </p>

              <p className="text-4xl font-bold text-slate-600">
                Cliente: {''}
                <span className="font-normal">{pedido.user.name}</span>
              </p>

              {pedido.productos.map(producto => (
                <div 
                  key={producto.id}
                  className="border-b border-b-slate-200 last-of-type:border-none py-4">
                    {/* <p className="text-lg">ID: {producto.id}</p> */}
                    <p className="text-2xl">{producto.nombre}</p>
                    <p className="text-2xl ">
                      Cantidad: {''}
                      <span className="font-bold">{producto.pivot.cantidad}</span>
                    </p>

                </div>
              ))}

              <p className="text-2xl font-bold text-amber-600">
                Total a pagar: {''}
                <span className="font-normal text-slate-700">{formatearDinero(pedido.total)}</span>
              </p>

              <button 
                type="button" 
                className='bg-cyan-800 hover:bg-cyan-950 px-5 py-2 rounded uppercase 
                font-bold text-white text-center w-full cursor-pointer'
                onClick={() => handleClickCompletarPedido(pedido.id)}
              >
                Completar
              </button>
          </div>
        ))}
      </div>
    </div>
  )
}
