import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <nav className="flex shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-2 sm:flex sm:items-center sm:justify-between">
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}

        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Shalom <span><img src="/fav.svg" className="h-10 inline" alt="Logo" /></span>
        </span>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {currentPage === '/auth/nosotros' ? (
              <li>
                <a href="/auth/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Login
                </a>
              </li>
            ) : (
              <li>
                <a href="/auth/nosotros" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Nosotros
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}