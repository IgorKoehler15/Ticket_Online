// src/components/organisms/Navbar.jsx
import { NavLink } from "react-router-dom";
import IconThemeToggle from "../atoms/IconThemeToggle";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 dark:text-blue-400 font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-500";

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <div className="flex gap-6">
        <NavLink to="/" className={linkClass}>
          Início
        </NavLink>
        <NavLink to="/filmes" className={linkClass}>
          Filmes
        </NavLink>
        <NavLink to="/contato" className={linkClass}>
          Contato
        </NavLink>
      </div>
      <div>
        <IconThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
