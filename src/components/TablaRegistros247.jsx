import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getRegistros } from "../services/apiConect";
import { nomEncabezadosTabla } from "../services/nomEncabezadosTabla";
import { Link, useNavigate } from "react-router-dom";


function TablaRegistros247({validador}) {


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
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-3 ">
          <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-1  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => pacienteCancer(registro)}                    
                  >
                    Validar
                  </button>
                  
                </td>

                {/* {variables2.map((variable, idx) => (
                        <td key={idx} className="px-2 py-1">
                            {registro[variable]}
                        </td>
                    ))} */}
              </tr>
            ))}
            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TablaRegistros247;
