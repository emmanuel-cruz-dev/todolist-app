import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-100 font-semibold text-lg sm:text-xl flex justify-between py-4 px-2 md:py-5 md:px-6">
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
