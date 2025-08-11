import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Inicio247.svg"

function Navbar() {
  return (
    <>
      <nav className="fixed bg-white border-gray-200 dark:bg-gray-900 top-0 left-0 w-full z-50 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-8"
              alt="Res 247"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Resolución 247
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-cyan-900 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Login
            </button>

          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/home"}
                  className="block py-2 px-3 md:p-0 text-gray-300 bg-cyan-700 rounded-sm md:bg-transparent md:text-cyan-700 md:dark:text-cyan-500"
                  aria-current="page"
                >
                  Tablero
                </Link>
              </li>
              <li>
                <Link
                  to={"https://cuentadealtocosto.org/"}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  "
                  aria-current=""
                  target="_blank"
                >
                  Acerca CAC
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to={"/contacto"}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
