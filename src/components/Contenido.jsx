import React from 'react'
import TablaRegistros from './TablaRegistros247'

function contenido() {
  return (
    <>
    <div className='container  m-3 px-3 border border-gray-300 rounded-sm '>
        <h1 className='text-2xl font-bold text-center my-4'>Registro de Cáncer - Inicial</h1>
        <TablaRegistros />

    </div>
    <div className='container  m-3 px-3 border border-gray-300 rounded-sm '>
        <h1 className='text-2xl font-bold text-center my-4'>Registro de Cáncer - Final</h1>
        <TablaRegistros validador={"X"} />

    </div>
    </>
  )
}

export default contenido