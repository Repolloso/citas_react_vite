const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas} = paciente;

    const handleEliminar = () => {
        const respuesta = window.confirm('¿Estás seguro que deseas eliminar este paciente?')
        if (respuesta) {
            eliminarPaciente(paciente.id)
        }
    }

    return (
        <div className="mt-5 bg-white shadow-md mx-3 px-5 my-3 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="normal-case font-normal">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="normal-case font-normal">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="normal-case font-normal">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de alta: {''}
                <span className="normal-case font-normal">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {''}
                <span className="normal-case font-normal">{sintomas}</span>
            </p>

            <div className="flex justify-between">
                <button
                    type="button"
                    className="uppercase text-xs font-bold py-1 px-2 rounded-md bg-green-800 text-white shadow-md"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="uppercase text-xs font-bold py-1 px-2 rounded-md bg-red-800 text-white shadow-md"
                    onClick={handleEliminar}
                >
                    Eliminar &times;
                </button>
            </div>
        </div>
    )
}

export default Paciente