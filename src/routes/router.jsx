import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Layout"
import ErrorPage from "../components/ErrorPage"
import NuevoCliente, {
  action as nuevoClienteAction,
} from "../pages/NuevoCliente"
import Index, { loader as clienteLoader } from "../pages/Index"
import EditarCliente, {
  loader as editarClienteLoader,
  action as editarClienteAction,
} from "../pages/EditarCliente"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clienteLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

export default router
