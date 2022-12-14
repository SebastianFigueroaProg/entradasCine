import React from "react";
import '../components/tablaExcel.css';

export const FileUploader = ({nombre, change}) => {    

    // Crear una referencia al elemento de entrada del archivo oculto
    const hiddenFileInput = React.useRef(null);
    
    // Haga clic program├íticamente en el elemento de entrada del archivo oculto 
    // cuando se haga clic en el componente Button
    const handleClick = (event) => {
        event.preventDefault();
        hiddenFileInput.current.click();
    };    
    
    return (
        <>
            <button onClick={handleClick} className='btnFile'>
                {
                    (nombre === '')
                        ? 'Seleccionar archivo excel'
                        : nombre
                }
            </button>
            <input
            type="file"
            ref={hiddenFileInput}
            onChange={change}
            style={{display: 'none'}}
        />
        </>
    )}