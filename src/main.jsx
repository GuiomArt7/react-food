import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider }from 'react-router-dom'
import { MenuProvider } from './context/MenuProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  </React.StrictMode>,
)
