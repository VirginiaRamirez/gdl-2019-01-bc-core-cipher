window.cipher = {
 

};
function encode(){
    var resultado ="";
    var desplaza = parseInt(document.getElementById("numero").value);
    var texto = document.getElementById("contenido").value;
    texto = String(texto).toUpperCase();
    for (var i = 0; i < texto.length; i++) {
        var codigo = (texto.charCodeAt(i) - 65 + desplaza) % 26 + 65;
        resultado = resultado+String.fromCharCode(codigo);
    }
    document.getElementById("resultado").value=resultado;
}

function decode(){
    var resultado ="";
    var desplaza = parseInt(document.getElementById("numero").value);
    var texto = document.getElementById("contenido").value;
    texto = String(texto).toUpperCase();
    for (var i = 0; i < texto.length; i++) {
        var codigo = (texto.charCodeAt(i) + 65 - desplaza) % 26 + 65;
        resultado = resultado+String.fromCharCode(codigo);
    }
    document.getElementById("resultado").value=resultado;
}