import React from 'react';
import './table.css';

export const Table = ({dato}) => {
  return (
    <div className='contenedor'>        
        <table>
            <thead>
                <tr>
                    <th>DNI</th>
                    <th>Nombre</th>
                    <th>Lider</th>
                    <th>Jefe</th>
                    <th>Site</th>
                    <th>Entrada 1</th>
                    <th>Entrada 2</th>
                    <th>Premio</th>
                    <th>Vencimiento</th>
                </tr>
            </thead>
            <tbody>
                {
                    dato.map((d)=>(
                        <tr key={d.dni}>
                            <td>{d.dni}</td>
                            <td>{d.nombre}</td>
                            <td>{d.lider}</td>
                            <td>{d.jefe}</td>
                            <td>{d.sitio}</td>
                            <td>{d.entrada1}</td>
                            <td>{d.entrada2}</td>
                            <td>{d.premio}</td>
                            <td>{d.vencimiento}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
