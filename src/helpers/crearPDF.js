import jspdf from 'jspdf'
import ticketChaco from '../assets/entradaChaco.jpeg';
import ticketCorRos from '../assets/entradaCorRos.jpeg';

export const pdfGenerateChaco = (cod1,cod2,cod3,venc,name,site) =>{
    const doc = new jspdf('portrait', 'px', 'a4','true')
        doc.addImage(ticketChaco,'jpeg',5,40,435,130)
        doc.setFont('Helvetica','bold')
        doc.setFontSize(12)
        doc.text(130,122,cod1)
        doc.text(130,140,cod2)
        doc.text(130,158,cod3)
        doc.setFont('Helvetica','normal')
        doc.setFontSize(8)
        doc.text(130,167,`Vencimiento: ${venc}`)
        doc.save(`${name} - ${site}.pdf`)  
}

export const pdfGenerateCorRos = (cod3,venc,name,site) =>{
    const doc = new jspdf('portrait', 'px', 'a4','true')
        doc.addImage(ticketCorRos,'jpeg',5,40,435,130)
        doc.setFont('Helvetica','bold')
        doc.setFontSize(12)
        doc.text(125,140,cod3)
        doc.setFont('Helvetica','normal')
        doc.setFontSize(8)
        doc.text(130,165,`Vencimiento: ${venc}`)
        doc.save(`${name} - ${site}.pdf`)
}


  