import { createContext, useState} from "react"
import { categorias as categoriasDB} from "../data/categorias"

const MenuContext = createContext();

const MenuProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    const handleClickCategoria = () => {
        console.log('click en categoria')
    }
    
    return(
        <MenuContext.Provider 
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}
        >{children}</MenuContext.Provider>

    )
}

export {
    MenuProvider
}
export default MenuContext