import { Form, useNavigate, useLoaderData } from "react-router-dom"
import { obtenerCliente } from "../data/Clientes"
import Formulario from "../components/Formulario"

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId)
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "No hay resultado",
    })
  }
  return cliente
}

function EditarCliente() {
  const navigate = useNavigate()
  const cliente = useLoaderData()

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>
        A continuación podras modificar los datos de un cliente
      </p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-md'
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        {/* {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)} */}

        <Form method='post' noValidate>
          <Formulario cliente={cliente}/>

          <input
            type='submit'
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg rounded-md'
            value='Registrar Cliente'
          />
        </Form>
      </div>
    </>
  )
}

export default EditarCliente
