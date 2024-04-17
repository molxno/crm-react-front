import BackButton from "../components/BackButton";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { Form, redirect, useActionData } from "react-router-dom";
import { ApiPost, isFilledArray } from "../utils/functions";

export const action = async ({ request }) => {
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

  await ApiPost( "/clientes/nuevo",data)

  return redirect("/clientes")

};

function ClienteNuevo() {
  const errores = useActionData();
  return (
    <>
      <h1 className="font-black text-4xl text-slate-800">Nuevo Cliente</h1>
      <p className="mt-3 ">
        Completa el formulario para registrar un nuevo cliente.
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
          <Formulario />
          <div className="flex justify-end">
            <input
              type="submit"
              className="px-3 py-1 bg-slate-800 hover:bg-slate-600 transition-colors p-3 uppercase font-bold text-white text-lg rounded-md"
              value="Registrar"
            />
          </div>
        </Form>
      </div>
    </>
  );
}

export default ClienteNuevo;
