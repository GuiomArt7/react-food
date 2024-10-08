import { createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayouth from './layouts/AuthLayouth'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import AdminLayout from './layouts/AdminLayout'
import Ordenes from './views/Ordenes'
import Productos from './views/Productos'
import Agotado from './views/Agotado'
import Usuarios from './views/Usuarios'
import Ready from './views/Ready'
import Nosotros from './components/Nosotros'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            },
            {
                path: '/ready',
                element: <Ready />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayouth />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/nosotros',
                element: <Nosotros />
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <Ordenes/>
            },
            {
                path: '/admin/productos',
                element: <Productos/>
            },
            {
                path: '/admin/agotados',
                element: <Agotado/>
            },
            {
                path: '/admin/registro',
                element: <Registro />
            },
            {
                path: '/admin/usuarios',
                element: <Usuarios />
            }
        ]

    }

])

export default router