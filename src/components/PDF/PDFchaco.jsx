import React from 'react';
import { pdfGenerate } from "../../helpers/crearPDF";
import './PDFchaco.css';

export const PDFchaco = ({data}) => {

  return (
    <div className='burble'>
        <h3>{data.nombre} - {data.sitio}</h3>
        <section className='container'>
            <div className='container-text'>
                <p className='enter1'>{data.entrada1}</p>
                <p className='enter2'>{data.entrada2}</p>
                <p className='combo'>{data.premio}</p>
                <p className='fecha'>Vencimiento: {data.vencimiento}</p>
            </div>
        </section>
        <button 
        className='btn-descarga'
        onClick={e=>{
          pdfGenerate(
            data.entrada1,
            data.entrada2,
            data.premio,
            data.vencimiento,
            data.nombre,
            data.sitio            
          )
        }}
        >
          Descargar Voucher de {data.nombre}</button>
    </div>
  )
}

