import { pdfGenerateChaco, pdfGenerateCorRos } from "./crearPDF"


export const descargarTodo = (item) => {
    
    item.map(elem => (
        (elem.sitio === 'CHACO')
                ? pdfGenerateChaco(elem.entrada1,elem.entrada2,elem.premio,elem.vencimiento,elem.nombre,elem.sitio)
                : pdfGenerateCorRos(elem.premio,elem.vencimiento,elem.nombre,elem.sitio)
    ))
}
