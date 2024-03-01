import { createContext, useState, useEffect} from "react"
import { toast } from "react-toastify";
import { categorias as categoriasDB} from "../data/categorias"

const MenuContext = createContext();

const MenuProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
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
                total
            }}
        >{children}</MenuContext.Provider>

    )
}

export {
    MenuProvider
}
export default MenuContext