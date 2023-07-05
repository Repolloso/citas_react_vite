// children es una palabra reservada de react y hace referencia a todo lo que pases a un componente

const Error = ({children}) => {
    return (
        <div className='bg-red-800 p-2 mb-5 rounded-lg'>
            <p className='text-1xl text-white uppercase text-center font-bold'>{children}</p>
        </div>
    )
}

export default Error