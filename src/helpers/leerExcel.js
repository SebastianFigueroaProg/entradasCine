
import * as XLSX from 'xlsx';

export const readExcel = (file, setItems) =>{

    const promise = new Promise((resolve, reject)=>{

        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = (e) =>{
            const bufferArray = e.target.result;

            const wb = XLSX.read(bufferArray, {type:'buffer'});

            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];

            const data = XLSX.utils.sheet_to_json(ws);

            resolve(data);
        };

        fileReader.onerror = ((error)=>{
            reject(error);
        });
    });

    promise.then((d)=>{
        
        const jdato = [];
        for (let i = 0; i < d.length; i++) {
            const dato = d[i];
            jdato.push({
                ...dato,
                vencimiento: new Date((dato.vencimiento - (25567 + 1)) * 86400 *1000).toLocaleDateString()
            })                
        }
        setItems(jdato);
    })

}