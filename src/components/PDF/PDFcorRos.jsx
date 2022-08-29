import React from 'react';
import { pdfGenerateCorRos } from "../../helpers/crearPDF";
import './PDFcorRos.css';

export const PDFcorRos = ({data}) => {

  return (
    <div className='burble'>
        <h3>{data.nombre} - {data.sitio}</h3>
        <section className='contenedor'>
            <div className='container-text'>
                <p className='premio'>{data.premio}</p>
                <p className='fecha'>Vencimiento: {data.vencimiento}</p>
            </div>
        </section>
        <button 
        className='btn-descarga'
        onClick={e=>{
          pdfGenerateCorRos(
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

