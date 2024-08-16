import { useState } from 'react';
import useSWR from "swr"
import clienteAxios from "../config/axios"
import useMenu from "../hooks/useMenu"

export default function Usuarios() {
    
  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/usuarios', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(datos => datos.data)

  const {data, error, isLoading } = useSWR('/api/usuarios', fetcher, {refreshInterval:10000})
  const {handleDeleteUser} = useMenu()
  const [searchTerm, setSearchTerm] = useState('');

  const filterUsers = (data, searchTerm) => {
    if (!searchTerm) return data;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return data.filter((user) => {
      const userFields = [user.name.toLowerCase(), user.email.toLowerCase()];
      return userFields.some((field) => field.includes(lowerSearchTerm));
    });
  };
  

  if(isLoading)return(
    <div className="text-center">
      <div role="status">
        <svg aria-hidden="true" className="inline w-10 h-10 text-cyan-200 animate-spin dark:text-cyan-600 fill-cyan-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
)
  console.log(data)
  console.log(error)

    
      
      return (
        <div>
          <h1 className="text-4xl font-black">Usuarios registrados</h1>
          <p className="text-2xl my-10">Lista de usuarios</p>

         {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar usuario..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 mr-2"
        />
      </div>
      
          {/* Check if data is available before rendering the table */}
          {data.length > 0 ? (
            <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-cyan-900">
              <thead className="text-xs text-cyan-900 uppercase bg-cyan-50 dark:bg-cyan-700 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">Nombre</th>
                  <th scope="col" className="px-6 py-3">Correo</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Acción</th>
                </tr>
              </thead>
              <tbody>
              {filterUsers(data, searchTerm).map((usuario) => (
                  <tr key={usuario.id} className="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-20 dark:hover:bg-gray-100">
                    <td className="px-6 py-4">{usuario.name}</td>
                    <td className="px-6 py-4">{usuario.email}</td>
                    <td className="px-6 py-4">{usuario.admin === 0 ? 'No Admin' : 'Admin'} </td>
                    <td className="px-6 py-4">
                      {usuario.admin === 0 && (
                        
                          <button className="bg-rose-800 text-white px-3 py-2 rounded hover:underline" onClick={() => handleDeleteUser(usuario.id)}>Eliminar</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          ) : (
            <p>Cargando usuarios...</p>
          )}
        </div>
      );
      
}