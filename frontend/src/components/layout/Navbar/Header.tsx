import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-6 py-4">
      <nav className="font-semibold text-lg">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Lista de tareas</Link>
          </li>
          <li>
            <Link to="/task-item">Tarea individual</Link>
          </li>
          <li>
            <Link to="/task-form">Crear/editar tarea</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
