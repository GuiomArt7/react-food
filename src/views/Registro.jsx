import { createRef, useState } from "react";
//import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";


export default function Registro() {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const [errores, setErrores] = useState([]);
  const {registro} = useAuth({middleware: 'AUTH_TOKEN', url: '/admin/usuarios'})

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    registro(datos, setErrores)
   
  }

  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p className='text-2xl'>Llena este formulario</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-15 max-w-screen-md mx-auto w-full  p-4 border border-gray-200 sm:p-6 md:p-8 ">
        <form 
          onSubmit={handleSubmit}
          noValidate
        >

          {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null }

          {/* Nombre */}
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-3 bg-gray-50"
              name="name"
              placeholder="Tu nombre"
              ref={nameRef}
              autoComplete="off"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full p-3 bg-gray-50"
              name="email"
              placeholder="Tu e-mail"
              ref={emailRef}
              autoComplete="off"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password"
              placeholder="Tu contraseña"
              ref={passwordRef}
            />
          </div>

          {/* Repetir Password */}
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password_confirmation">
              Repetir Contraseña:
            </label>
            <input
              type="password"
              id="password_confirmation"
              className="mt-2 w-full p-3 bg-gray-50"
              name="password_confirmation"
              placeholder="Repetir contraseña"
              ref={passwordConfirmationRef}
            />
          </div>

          <input
            type="submit"
            value="Crear cuenta"
            className="bg-cyan-800  hover:bg-cyan-950 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>

      {/* <nav className="mt-5 inline-flex items-center text-white bg-teal-950 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800">
        <Link to="/admin">Menú principal</Link>
      </nav> */}
    </>
  );
}
