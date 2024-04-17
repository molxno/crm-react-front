import { useLoaderData } from "react-router-dom";
import { isFilledArray } from "../utils/functions";
import Cliente from "../components/Cliente";
import {ApiGetAll} from "../utils/functions";
import BackButton from "../components/BackButton";

export const loader = () => {
  return ApiGetAll("/clientes");
};

function Clientes() {
  const clientes = useLoaderData(loader);
  return (
    <>
      <h1 className="font-black text-4xl text-slate-800">Clientes</h1>
      <p className="mt-3 ">
        Administra y gestiona la información de clientes.
      </p>
      {isFilledArray(clientes) ? (
        <>
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-2 w-1/4">Cliente</th>
                <th className="p-2">Contacto</th>
                <th className="p-2">Notas</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <Cliente children={cliente} key={cliente.id} />
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <p className="text-center mt-10 font-bold p-40 text-slate-800 text-xl">
            Aún no hay clientes en la base de datos
          </p>
        </>
      )}
    </>
  );
}

export default Clientes;
