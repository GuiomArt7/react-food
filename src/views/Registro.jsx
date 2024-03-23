import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";


export default function Registro() {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const [errores, setErrores] = useState([]);
  const {registro} = useAuth({middleware: 'guest', url: '/'})

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
      <p>Llena este formulario</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
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

      <nav className="mt-5">
        <Link to="/auth/login">¿Ya tienes una cuenta? Inicia sesión</Link>
      </nav>
    </>
  );
}
