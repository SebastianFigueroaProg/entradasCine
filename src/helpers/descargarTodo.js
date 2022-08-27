import { pdfGenerate } from "./crearPDF"


export const descargarTodo = (item) => {
    
    item.map(elem => (
        pdfGenerate(elem.entrada1,elem.entrada2,elem.premio,elem.vencimiento,elem.nombre,elem.sitio)
    ))


}
