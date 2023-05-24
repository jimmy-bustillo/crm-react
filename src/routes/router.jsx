import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Layout"
import NuevoCliente, {
  action as nuevoClienteAction,
} from "../pages/NuevoCliente"
import Index, { loader as clienteLoader } from "../pages/Index"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clienteLoader,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
      },
    ],
  },
])

export default router
