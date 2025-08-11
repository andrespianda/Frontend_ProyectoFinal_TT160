import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="mt-16 md:mt-14 bg-gray-50 min-h-screen flex flex-col items-center justify-start px-6 py-12">
      
      {/* Encabezado */}
      <header className="max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Resolución 247 de 2016 - Cuenta de Alto Costo
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Información clave sobre la norma y el futuro servicio de registro y validación de datos.
        </p>
      </header>

      {/* Información sobre la norma */}
      <section className="max-w-4xl bg-white shadow-lg rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          ¿Qué es la Resolución 247 de 2016?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La Resolución 247 de 2016 de la Cuenta de Alto Costo establece los lineamientos para el 
          reporte, consolidación y validación de la información relacionada con pacientes diagnosticados 
          con cáncer en Colombia. Este marco normativo busca garantizar la calidad y trazabilidad de 
          los datos, permitiendo un análisis más efectivo para la gestión y control de esta enfermedad.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Los prestadores de servicios de salud y las entidades responsables de pago tienen la obligación 
          de enviar información veraz y actualizada, siguiendo los estándares técnicos definidos por la 
          norma, con el fin de fortalecer la vigilancia epidemiológica y la planeación en salud pública.
        </p>
      </section>

  
      <section className="max-w-4xl bg-blue-100 border border-blue-300 rounded-xl p-8 text-center">
         <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10">Utilidades</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <Link to={"/home"}>
      <div className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
        <div className="text-blue-600 text-4xl mb-4">📂</div>
        <h3 className="text-xl font-semibold mb-2">Cargue de Data inicial</h3>
        <p className="text-gray-600 text-sm">
          Suba su información inicial de acuerdo a los lineamientos de la Resolución 247.
        </p>
      </div>
      </Link>

      {/* Card 2 */}
      <Link to={"/home"}>
      <div className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
        <div className="text-green-600 text-4xl mb-4">✅</div>
        <h3 className="text-xl font-semibold mb-2">Validación de registros</h3>
        <p className="text-gray-600 text-sm">
          Verifique la integridad y consistencia de los datos antes de su envío.
        </p>
      </div>
      </Link>

      {/* Card 3 */}
      <Link to={"/"}>
      <div className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
        <div className="text-yellow-600 text-4xl mb-4">📄</div>
        <h3 className="text-xl font-semibold mb-2">Generación de archivos planos</h3>
        <p className="text-gray-600 text-sm">
          Cree los archivos planos en el formato exigido para la entrega oficial.
        </p>
      </div>
      </Link>

    </div>
  </div>
      </section>

    </div>
  );
}
