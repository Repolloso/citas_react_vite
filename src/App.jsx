import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  // Las props son los datos que se pasan de un componente a otro, siempre se pasan de padre a hijo y nunca al revés. 
  // Las props son inmutables, es decir, no se pueden modificar desde el componente hijo. Y pueden pasar cualquier tipo de dato o función.
  // Puedo crear una funcion a nivel padre que reciba un parametro y luego pasarlo como prop al componente hijo para que lo ejecute y modifique el estado del padre.
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  useEffect(() => {
    // localStorage solo almacena strings, por lo que hay que convertir el array de pacientes a string con JSON.stringify 
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header 
        //nombre del prop = {valor del prop}

      />
      <div className="mt-12 grid grid-rows-1 grid-cols-1 md:grid-cols-2 ">
        <Formulario 
          pacientes={pacientes}
          paciente={paciente}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
