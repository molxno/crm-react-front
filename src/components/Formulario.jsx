const Formulario = ({cliente}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Nombre:</label>
                <input 
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre completo"
                    name="name"
                    defaultValue={cliente?.name}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="phone_number"
                >Teléfono:</label>
                <input 
                    id="phone_number"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Max(10)"
                    name="phone_number"
                    defaultValue={cliente?.phone_number}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Correo electrónico"
                    name="email"
                    defaultValue={cliente?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="company"
                >Empresa:</label>
                <input 
                    id="company"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Empresa a la que pertenece"
                    name="company"
                    defaultValue={cliente?.company}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notes"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notes"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-28 align-self"
                    placeholder="Máx(300)"
                    name="notes"
                    defaultValue={cliente?.notes}
                />
            </div>
        </>
    )
}

export default Formulario