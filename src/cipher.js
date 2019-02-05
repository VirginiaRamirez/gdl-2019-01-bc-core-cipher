window.cipher = {

    encode : (offset, string)=>{
        let resultado ="";
        offset = parseInt(document.getElementById("numero").value);
        string = parseInt(document.getElementById("contenido").value);
        string = String(string).toUpperCase();
        for (let i = 0; i < string.length; i++) {
            let codigo = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
            resultado = resultado+String.fromCharCode(codigo);
        }
        document.getElementById("resultado").value=resultado;
    },       
     decode : (offset, string)=>{
        let resultado ="";
        offset = parseInt(document.getElementById("numero").value);
        string = parseInt(document.getElementById("contenido").value);
        string = String(string).toUpperCase();
        for (let i = 0; i < string.length; i++) {
            let codigo = (string.charCodeAt(i) + 65 - offset) % 26 + 65;
            resultado =String.fromCharCode(codigo)+resultado;
        }
        document.getElementById("resultado").value=resultado;
        }   
};
