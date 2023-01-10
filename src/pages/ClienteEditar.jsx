import { useLoaderData, useActionData, Form, redirect } from "react-router-dom"
import { ApiGetOne, ApiPut, isFilledArray } from "../utils/functions"
import Error from "../components/Error";
import BackButton from "../components/BackButton";
import Formulario from "../components/Formulario";

export async function loader({params}) {
    const cliente = await ApiGetOne("/clientes/editar", params.id)
    return cliente
}

export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const email = formData.get("email");
  
    // Validación
    const errores = [];
    if (Object.values(data).includes("")) {
      errores.push("Todos los campos son requeridos.");
    }
  
    let regex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
  
    if (!regex.test(email)) {
      errores.push("El email no es válido.");
    }
  
    if (isFilledArray(errores)) {
      return errores;
    }
  
    await ApiPut( "/clientes/editar",data, params.id)
  
    return redirect("/clientes")
  
  };

function ClienteEditar() {
    const cliente = useLoaderData()
    const errores = useActionData();
  return (
    <>
      <h1 className="font-black text-4xl text-slate-800">Editar Cliente</h1>
      <p className="mt-3 ">
        Rellena la información que quieras editar del cliente.
      </p>
      <BackButton route={"/clientes"} text={"Volver"} />
      <div className="bg-white rounded-md shadow md:w-3/4 mx-auto px-5 py-10 mt-5">
        {errores && (
          <>
            {errores.map((error, index) => (
              <Error key={index}>{error}</Error>
            ))}
          </>
        )}
        <Form method="POST" noValidate>
          <Formulario cliente={cliente}/>
          <div className="flex justify-end">
            <input
              type="submit"
              className="px-3 py-1 bg-slate-800 hover:bg-slate-600 transition-colors p-3 uppercase font-bold text-white text-lg rounded-md"
              value="Guardar"
            />
          </div>
        </Form>
      </div>
    </>
  )
}

export default ClienteEditar