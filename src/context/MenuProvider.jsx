import { createContext, useState} from "react"
import { categorias as categoriasDB} from "../data/categorias"

const MenuContext = createContext();

const MenuProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);

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
    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
        setPedido([...pedido, producto])
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
                handleAgregarPedido
            }}
        >{children}</MenuContext.Provider>

    )
}

export {
    MenuProvider
}
export default MenuContext