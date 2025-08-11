import React from 'react'
import TablaRegistros from './TablaRegistros247'

function contenido() {
  return (
    <>
    <main className='mt-16 md:mt-20'>

    <div className='max-w-full m-3 px-3 border border-gray-300 rounded-sm '>
        <h1 className='text-2xl text-gray-700 font-bold text-center my-4'>Registro de Cáncer - Inicial</h1>
        <TablaRegistros txtBtn={"Validar"} tipoBtn={'green'}/>
    </div>

    <div className='max-w-full  m-3 px-3 border border-gray-300 rounded-sm '>
        <h1 className='text-2xl text-gray-700 font-bold text-center my-4'>Registro de Cáncer - Final</h1>
        <TablaRegistros validador={"X"} txtBtn={"Ver"} tipoBtn={'cyan'}/>
    </div>
    </main>
    </>
  )
}

export default contenido