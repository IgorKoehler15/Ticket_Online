// src/components/atoms/IconThemeToggle.jsx
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react"; // Biblioteca de ícones lucide-react (ou heroicons, feather, etc.)

const IconThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-800" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
};

export default IconThemeToggle;
