import React, { useState } from 'react';
import { PDFchaco } from './PDF/PDFchaco';
import { Table } from './Table';
import { descargarTodo } from '../helpers/descargarTodo';
import { readExcel } from '../helpers/leerExcel';
import { BiCloudDownload } from "react-icons/bi";
import './tablaExcel.css';
import { FileUploader } from '../helpers/FileUploader';
import { PDFcorRos } from './PDF/PDFcorRos';

export const TablaExcel = () => {

    const [items, setItems] = useState([]);
    const [verPDF, setVerPDF] = useState(false);
    const [nombreArchivo, setNombreArchivo] = useState('');
    
    
    const handlerFileChange = ({target}) =>{
                
        const file = target.files[0];  
        readExcel(file,setItems)
        setNombreArchivo(file.name);
    }

  return (
    <div>
        <div className='contenedorEstatico'>

            <button onClick={e=>{setVerPDF(!verPDF)}} className='btn'>
                {
                    !verPDF
                        ? 'Ver Voucher'
                        : 'Ver Tabla'
                }
            </button>

            <FileUploader
                nombre={nombreArchivo}
                change={handlerFileChange}
            />
            <button onClick={e=>descargarTodo(items)} className='btn'><span className='down'>Descargar PDF</span><BiCloudDownload className='icon-btn'/></button>

        </div>

        {
            !verPDF
                ? <Table dato={items}/>
                : (items.map((d)=>(
                    (d.sitio == 'CHACO')
                        ? <PDFchaco key={d.dni} data={d}/>
                        : <PDFcorRos key={d.dni} data={d}/>                    
                )))
        }

        <div className='space'></div>


    </div>
  )
}
