import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getRegistros } from "../services/apiConect";
import { nomEncabezadosTabla } from "../services/nomEncabezadosTabla";
import { Link, useNavigate } from "react-router-dom";


function TablaRegistros247({validador, tipoBtn,txtBtn}) {


    const navigate = useNavigate()  
    const[registros, setRegistros] = useState([]);
    
 
    const fetchRegistros = async ()=>{
        const data = await getRegistros()
        let dataInicial

        !validador ?  dataInicial = data.filter((registro) => registro.modificacion != "X"): dataInicial = data.filter((registro) => registro.modificacion === "X");
        setRegistros(dataInicial);
    
    } 

    useEffect(() => {
    fetchRegistros();
    }, []);

    const pacienteCancer = (registroCa) =>{
      
      navigate("/formulario", {
      state: { datoCa: registroCa }
    });
      
    }


  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-3 ">
          <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {nomEncabezadosTabla.map((variable, index) => (
                <th key={index} scope="col" className="items-center px-2 py-1">
                  {variable}
                </th>
              ))}
              <th scope="col" className="px-2 py-1">
                🛠 Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro, index) => (
              <tr
                key={index}
                className="bg-white border  dark:border-gray-300 border-gray-300"
              >
                <td className="px-2 py-1">{registro.primerNombreUsuario}</td>
                <td className="px-2 py-1">{registro.segundoNombreUsuario}</td>
                <td className="px-2 py-1">{registro.primerApellidoUsuario}</td>
                <td className="px-2 py-1">{registro.segundoApellidoUsuario}</td>
                <td className="px-2 py-1">
                  {registro.tipoIdentificacionUsuario}
                </td>
                <td className="px-2 py-1">
                  {registro.numeroIdentificacionUsuario}
                </td>
                <td className="px-2 py-1">{registro.nombreNeoplasiaMaligna}</td>
                <td className="flex justify-center px-1 py-1">
              
                  <button 
                    type="button"
                    className={`focus:outline-none text-gray-200 bg-${tipoBtn}-800 hover:bg-${tipoBtn}-900 focus:ring-4 focus:ring-${tipoBtn}-400 font-medium rounded-lg text-sm px-4 py-1  dark:bg-${tipoBtn}-700 dark:hover:bg-${tipoBtn}-800 dark:focus:ring-${tipoBtn}-900 cursor-pointer`}
                    onClick={() => pacienteCancer(registro)}                    
                  >
                    {txtBtn}
                  </button>
                  {/* <button 
                    type="button"
                    className="focus:outline-none text-gray-200 bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-green-400 font-medium rounded-lg text-sm px-4 py-1  dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900 cursor-pointer"
                                      
                  >
                    pruebas
                  </button>               */}
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  );
}

export default TablaRegistros247;
