import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    // React reacciona en base al estado (state)
    // Los hooks deben estar dentro de un condicional (if, else, etc) ni dentro de un bucle (for, while, etc)
    // Los hooks deben estar en el nivel más alto del componente y no pueden estar debajo de un return.
    // Los eventos usan camelCase (onChange, onSubmit, etc)
    // Es importante declarar los estados en el orden en que se van a usar en el formulario

    const [nombre, setNombre] = useState(''); //desestructuración de array (useState)
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    const generarId = () => {
        // Generar un id aleatorio
        return Math.random().toString(36).substring(2, 9);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validar formulario
        // Una forma de validar es usando un if y comprobando que los campos no estén vacios con el método includes
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            // return para que corte la ejecución del código y no usar else
            return;
        } 

        // Si no hay errores, se ejecuta el estado de abajo
        setError(false);

        // Crear objeto con los datos del formulario
        const ObjectoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if (paciente.id) {
            // Editar el paciente
            console.log('Editando paciente')
            ObjectoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? ObjectoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            // Limpiar el state del paciente
            setPaciente({})
        } else {
            // Agregar el paciente y le agregamos un id
            ObjectoPaciente.id = generarId();
            setPacientes([...pacientes, ObjectoPaciente])
        }

        // Agregar el objeto al state de pacientes y usamos el operador spread para que no se sobreescriba el estado anterior y se agregue el nuevo y no se pierda el anterior

        // El método setPacientes es el que modifica el estado de pacientes, concatenando el nuevo paciente con el estado anterior
        // setPacientes([
        //     ...pacientes, 
        //     ObjectoPaciente
        // ])

        // Reiniciar el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

    // useEffect es un hook que se ejecuta cuando el componente se carga por primera vez y cuando hay cambios en el componente    

    useEffect(() => {
        // si existe paciente
        // una forma de comprobar la existencia de datos en el array es haciendolo con Object.keys, que devuelve un array con las propiedades de un objeto
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])



    return (
        <div>
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg text-center mt-5 mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5"
                onSubmit={handleSubmit}
            >
                {/* Usamos el metodo children */}
                {error && <Error>todos los campos son obligatorios</Error>}

                <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre de Mascotas</label>
                <input 
                    type="text"
                    placeholder="Nombre de Mascota"
                    id="mascota"
                    className="block w-full my-2 p-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                    value={nombre}
                    // Cuando usamos input y queremos que el usuario escriba algo, debemos usar el evento onChange para que el usuario pueda escribir algo en el input y el evento onChange se encarga de capturar lo que el usuario escribe y lo guarda en el estado (state) usando la función setNombre
                    // Los metodos onChange y onSubmit son eventos de React y usan callbacks
                    onChange={ e => setNombre(e.target.value) }
                    autoComplete='given-name'
                />

                <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase mt-5">Nombre del Propietario</label>
                <input 
                    type="text"
                    placeholder="Nombre del Propietario"
                    id="propietario"
                    className="block w-full my-2 p-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400" 
                    value={propietario}
                    onChange={ e => setPropietario(e.target.value) }
                    autoComplete='family-name'
                />

                <label htmlFor="email" className="block text-gray-700 font-bold uppercase mt-5">Email</label>
                <input 
                    type="email"
                    placeholder="Email del propietario"
                    id="email"
                    className="block w-full my-2 p-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400" 
                    value={email}
                    onChange={ e => setEmail(e.target.value) }
                    autoComplete='email'
                />

                <label htmlFor="alta" className="block text-gray-700 font-bold uppercase mt-5">Alta</label>
                <input 
                    type="date"
                    id="alta"
                    className="block w-full my-2 p-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400" 
                    value={fecha}
                    onChange={ e => setFecha(e.target.value) }
                    autoComplete='off'
                />

                <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase mt-5">Sintomas</label>
                <textarea
                    id="sintomas"
                    className="block w-full my-2 p-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                    value={sintomas}
                    onChange={ e => setSintomas(e.target.value) }
                ></textarea>

                <button
                    type="submit"
                    className="bg-indigo-500 w-full p-2 mt-5 text-white uppercase font-bold hover:bg-indigo-600 cursor-pointer transition-all rounded-md">
                    { paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
                </button>  


            </form>
        </div>
    )
}

export default Formulario