import { createContext, useState, useEffect} from "react"
import { toast } from "react-toastify";
import clienteAxios from "../config/axios";

const MenuContext = createContext();

const MenuProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);

    /* Calcular el total a pagar */
    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])
    /* ********************************************** */

    /* AXIOS */
    const obtenerCategorias = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const {data} = await clienteAxios('/api/categorias', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCategorias(data.data)
            setCategoriaActual(data.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])
    /* ********************************************** */
    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }
    /* Funsión para el modal */
    const handleClickModal = () => {
        setModal(!modal)
    }
    const handleSetProducto = producto => {
        setProducto(producto)
    }

    /* Funciones para agregar pedidos al resumen */
    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        setPedido([...pedido, producto])
        if(pedido.some( pedidoState => pedidoState.id === producto.id)) {
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === 
                producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado correctamente')
          }else {
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
          }
    }

    /* Editar pedido */
    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }

     /* Eliminar producto */
     const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.success('Eliminado del pedido')
     }

     /* Enviar Orden a cocina */
     const handleSubmitNuevaOrden = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const {data} = await clienteAxios.post('/api/pedidos',
            {
                total,
                productos: pedido.map(producto => {
                    return {
                        id: producto.id,
                        cantidad: producto.cantidad
                    }
                })
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })


            toast.success(data.message);
            setTimeout(() => {
                setPedido([])
            }, 1000);
        } catch (error) {
            console.log(error)
        }
     }

     /* Marcar pedido como Completado */
     const handleClickCompletarPedido = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/pedidos/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            setTimeout(() => {
                setPedido([])
            }, 1000);
        } catch (error) {
            console.log(error)
        }
        toast.success('Pedido Completado');
     }

     /* Marcar Pedido Atendido */
     const handleClickPedidoAtendido = async (id) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/pedidos/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
     }


     /* Marcar un producto como AGOTADO */
     const handleClickProductoAgotado = async (id) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/productos/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
     }

     /* Volver a hacer un producto disponible */
     const handleClickAgotado = async (id) => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/productos/${id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }

     }

     /* Eliminar usuario */
     const handleDeleteUser = async (id) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
          await clienteAxios.delete(`/api/usuarios/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (error) {
          console.error(error);
          toast.error('Error al eliminar usuario');
        }
      };
      
    
    return(
        <MenuContext.Provider 
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                setPedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
                handleSubmitNuevaOrden,
                handleClickCompletarPedido,
                handleClickProductoAgotado,
                handleClickAgotado,
                handleDeleteUser,
                handleClickPedidoAtendido
            }}
        >{children}</MenuContext.Provider>

    )
}

export {
    MenuProvider
}
export default MenuContext