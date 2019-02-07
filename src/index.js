
const cadenaTexto = () =>{    
    const offset = parseInt(document.getElementById("numero").value);
    const string = document.getElementById("contenido").value;
    window.cipher.encode(string, offset);
    document.getElementById("resultadoFinal").value= window.cipher.encode(offset, string);
};
        const textEncode = document.getElementById("ncode");
        textEncode.addEventListener("click", cadenaTexto);

const cadenaTexto2 = () =>{
    const offset = parseInt(document.getElementById("numero").value);
    const string = document.getElementById("contenido").value;
    let mensajeFinal = window.cipher.decode(offset, string);
    document.getElementById("resultadoFinal").value = mensajeFinal;
};
         const textDecode = document.getElementById("dcode");
         textDecode.addEventListener("click", cadenaTexto2);

         const cadenaTexto3 = () =>{
            const offset = document.getElementById("numero").value="";
            const string = document.getElementById("contenido").value="";
            let mensajeFinal2 = "";
            document.getElementById("resultadoFinal").value = mensajeFinal2;
        };
                 const textLimpia = document.getElementById("limpiar");
                 textLimpia.addEventListener("click", cadenaTexto3);