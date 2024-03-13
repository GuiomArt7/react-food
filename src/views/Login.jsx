import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";

export default function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();
  
    const [errores, setErrores] = useState([])
  
    const handleSubmit = async e => {
      e.preventDefault();
  
      const datos = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      try {
        const {data} = await clienteAxios.post('/api/login', datos)
        console.log(data.token)
      } catch(error) {
        setErrores(Object.values(error.response.data.errors))
      }
    }
  return (
    <>
    <h1 className='text-4xl font-black'>Iniciar sesión</h1>
    <p>Para crear un pedido debes iniciar sesión</p>

    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
      <form 
      onSubmit={handleSubmit}
      noValidate
      
      >
        {/* Email */}
        <div className="mb-4">
          <label 
          className='text-slate-800'
          htmlFor="email"
          >E-mail:</label>
          <input 
            type="email" 
            id='email'
            className='mt-2 w-full p-3 bg-gray-50'
            name='email'
            placeholder='Tu e-mail'
            ref={emailRef}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label 
          className='text-slate-800'
          htmlFor="password"
          >Contraseña:</label>
          <input 
            type="password" 
            id='password'
            className='mt-2 w-full p-3 bg-gray-50'
            name='password'
            placeholder='Tu contraseña'
            ref={passwordRef}
          />
        </div>

        <input 
          type="submit"
          value="Iniciar sesión"
          className='bg-cyan-800  hover:bg-cyan-950 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
        />
      </form>
    </div>
    <nav className='mt-5'>
      <Link to="/auth/registro">
        ¿No tienes cuenta? Crea una aquí
      </Link>
    </nav>
    <div>
    </div>
  </>
  )
}
