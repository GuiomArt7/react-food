import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";

export default function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();
  
    const [errores, setErrores] = useState([])
    const {login} = useAuth({
      middleware: 'guest',
      url: '/'
    })
  
    const handleSubmit = async e => {
      e.preventDefault();
  
      const datos = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }

      login(datos, setErrores)

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
        {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null }
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
