import { Form, useNavigate, redirect } from "react-router-dom";
import { ApiDelete } from "../utils/functions";

export const action = async ({params}) => {
  ApiDelete("/clientes/eliminar", params.id)
  setTimeout(() => {
    window.location.reload(false);
  }, 800)
  return redirect("/clientes")
}

function Cliente({ children }) {
  const navigate = useNavigate();
  const { id, name, phone_number, email, company, notes } = children;
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{name}</p>
        <p>{company}</p>
      </td>
      <td className="p-6 space-y-2">
        <p className="text-xl text-gray-800">
          <span className="text-slate-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p className="text-xl text-gray-800">
          <span className="text-slate-800 uppercase font-bold">Tel: </span>
          {phone_number}
        </p>
      </td>
      <td className="p-6 space-y-2">
        <p className="text-gray-800">{notes}</p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          type="button"
          className="text-slate-600 hover:text-slate-800 uppercase font-bold text-xl"
          onClick={() => navigate(`/clientes/editar/${id}`)}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <Form method="POST" action={`/clientes/eliminar/${id}`} onSubmit={(e) => {
          if(!confirm("¿Desea eliminar el cliente?")) {
            e.preventDefault()
          }
        }}>
          <button
            type="submit"
            className="text-gray-600 hover:text-gray-800 uppercase font-bold text-xl"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </Form>
      </td>
    </tr>
  );
}

export default Cliente;
