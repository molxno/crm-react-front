import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()
  return (
    <div className="space-y-8">
        <div className="bg-white rounded-md shadow md:w-3/4 mx-auto px-5 py-10 mt-5">
        <p className="text-center text-5xl font-extrabold text-gray-900">¡Ups! Ha ocurrido un error.</p>
        <div className="grid grid-rows-4 grid-flow-col gap-2 mt-10">
            <div className="font-bold p-2 bg-gray-800 rounded-md text-white mr-3 text-center grid place-items-center">
                Detalle:
            </div>
            <div className="col-span-2 row-span-3 text-gray-800 font-bold">
                {Object.values(error).includes("AxiosError") ? error.response.data.message : error.message}
            </div>
        </div>
        </div>
    </div>
  )
}