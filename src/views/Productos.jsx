import useSWR from "swr"
import clienteAxios from "../config/axios"
import { Link } from "react-router-dom";
//import Producto from '../components/Producto'
import ProductTable from "../components/ProductTable"

export default function Productos() {

  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/productos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(datos => datos.data)

  const {data, error, isLoading } = useSWR('/api/productos', fetcher, {refreshInterval:10000})

  if(isLoading)return 'Cargando...'
  console.log(data)
  console.log(error)
  return (
    <div>
      <h1 className='text-4xl font-black'>Productos</h1>
      <p className='text-2xl my-10'>Maneja la disponibilidad desde aquí</p>
      
      <div className="flex flex-col gap-5 lg:flex-row">
        <Link
        href="{'/admin/nuevoProducto}"
        className="bg-amber-500 w-full lg:w-auto text-xl px-10 py-3 texy-center font-bold cursor-pointer"
        >Crear Producto
        </Link>
      </div>
      <div 
      /* className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3" */>
      <ProductTable/>

        {/* Forma Anterior */}
        {/* {data.data.map(producto => (
          <Producto 
          key={producto.imagen}
          producto={producto}
          botonDisponible={true}
          />
        ))} */}
      </div>
    </div>
  )
}
