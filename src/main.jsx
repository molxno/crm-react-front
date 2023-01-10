import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Clientes, {loader as ClientesLoader} from './pages/Clientes'
import ClienteNuevo, {action as ClienteNuevoAction} from './pages/ClienteNuevo'
import Index from './pages/Index'
import ErrorPage from './components/ErrorPage'
import ClienteEditar, {loader as ClienteEditarLoader, action as ClienteEditarAction} from './pages/ClienteEditar'
import {action as ClienteEliminarAction} from "./components/Cliente"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "/clientes",
        element: <Clientes />,
        loader: ClientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/nuevo",
        element: <ClienteNuevo />,
        action: ClienteNuevoAction,
        errorElement: <ErrorPage />
      },
      {
        path: "clientes/editar/:id",
        element: <ClienteEditar />,
        loader: ClienteEditarLoader,
        action: ClienteEditarAction,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/eliminar/:id",
        action: ClienteEliminarAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
