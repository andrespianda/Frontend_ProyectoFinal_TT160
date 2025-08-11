// src/components/MiPerfil.jsx
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contacto() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center">
        
        {/* Imagen de GitHub */}
        <img
          // src="https://avatars.githubusercontent.com/andrespianda"
          src="https://media.licdn.com/dms/image/v2/D4E35AQEr8d3xgSQY4g/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1738422236723?e=1755464400&v=beta&t=MB_bTAUghbqJcjC1pgSggufPMGkn-30rUcEfhYRowsU"
          alt="Foto de perfil"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-md"
        />

        {/* Nombre */}
        <h2 className="text-2xl font-bold mt-4 text-gray-800">
          Andres Pianda Labrada
        </h2>

        {/* Links */}
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://www.linkedin.com/in/andrespiandalabrada/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="esteban.labrada@gmail.com"
            className="text-red-500 hover:text-red-700 transition"
          >
            <MdEmail size={28} />
          </a>

          <a
            href="https://github.com/andrespianda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black transition"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
