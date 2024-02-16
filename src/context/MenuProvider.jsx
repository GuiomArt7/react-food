import { createContext, useState} from "react"
import { categorias as categoriasDB} from "../data/categorias"

const MenuContext = createContext();

const MenuProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    return(
        <MenuContext.Provider 
            value={{
                categorias
            }}
        >{children}</MenuContext.Provider>

    )
}

export {
    MenuProvider
}
export default MenuContext