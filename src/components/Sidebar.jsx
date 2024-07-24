import useMenu from "../hooks/useMenu";
import Categoria from "./Categoria";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { categorias } = useMenu();
  const { logout, user } = useAuth({ middleware: "auth" });
  const navigate = useNavigate();

  const handleViewCompletedOrders = () => {
    navigate("/ready"); // Navigate to completed orders route (redundant here)
  };

  const handleViewMenu = () => {
    navigate("/"); // Navigate to the main menu route
  };

  const isCompletedOrdersRoute = window.location.pathname === "/ready"; // Check for /ready route

  return (
    <aside className="md:w-72">
      <div className="flex justify-center p-2 items-center">
        <img className="w-40" src="img/s.svg" alt="imagen logo" />
      </div>

      <p className="my-1 text-xl font-bold text-center text-indigo-900">
        Hola {user?.name}
      </p>

      {!isCompletedOrdersRoute && ( // Conditionally render categories
        <div className="mt-1">
          {categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      )}

      <div className="py-1.5">
        <button
          type="button"
          className={`text-center bg-teal-800 hover:bg-teal-900 w-full p-3 font-bold text-white truncate ${
            isCompletedOrdersRoute ? "bg-teal-800 hover:bg-teal-900" : ""
          }`}
          onClick={isCompletedOrdersRoute ? handleViewMenu : handleViewCompletedOrders}
        >
          {isCompletedOrdersRoute ? "Ver Menú" : "Ver Órdenes Completadas"}
        </button>
      </div>

      <div className="py-1">
        <button
          type="button"
          className="text-center bg-pink-900 hover:bg-pink-950 w-full p-3 font-bold text-white truncate"
          onClick={logout}
        >
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
