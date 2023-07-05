import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return (
        <div className="mt-10 md:mt-0 md:h-screen overflow-y-scroll">
            {   
                pacientes && pacientes.length ? 
                    (
                        <>
                            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                            <p className="text-xl text-center mb-10 mt-5"> 
                                Administra tus {''}
                                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                            </p>
                        </>
                    )
                : 
                    (
                        <>
                            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                            <p className="text-xl text-center mb-10 mt-5">
                                Comienza creando uno {''}
                                <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                            </p>
                        </>
                    )
            }


            { 
                // Este metodo de index es muy usado en React, pero no es recomendable usarlo porque si se modifica el array, se rompe el código, es una mala practica
                // pacientes.map((paciente, index) => (
                //     <Paciente 
                //         key={index}
                //         paciente={paciente}
                //     />
                // ))
                //para usar una buena practica debemos crear un id random
                pacientes.map((paciente) => (
                    <Paciente 
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                ))
            }

        </div>
    )
}

export default ListadoPacientes;