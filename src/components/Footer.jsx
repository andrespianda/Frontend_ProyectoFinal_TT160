import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025
            <Link to={"https://talentotechvalle.co/"} target="_blank" className="hover:underline">
              Talento Tech 2025
            </Link>
            
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to={"https://cuentadealtocosto.org"} target="_blank" className="hover:underline me-4 md:me-6">
                Acerca de la Resoluciones CAC
              </Link>
            </li>
            <li>
              <Link to={"/"} target="_blank" className="hover:underline me-4 md:me-6">
                Politicas
              </Link>
            </li>
            <li>
              <Link to={"/contacto"} className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
