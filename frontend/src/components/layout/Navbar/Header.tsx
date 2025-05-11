import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-100 font-semibold text-lg flex justify-between p-6 py-5">
      <Link
        className="hover:text-blue-600 transition-colors duration-300"
        to="/"
        title="Home"
      >
        ForIT | TODO App
      </Link>
      <nav>
        <ul className="flex gap-6 [&>li>a]:hover:text-blue-600 [&>li>a]:transition-colors [&>li>a]:duration-300">
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
