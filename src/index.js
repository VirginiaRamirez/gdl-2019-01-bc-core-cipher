// window.cipher = {
 
  // ... 
//};


function encode(){
    var resultado ="";
    var offset = parseInt(document.getElementById("numero").value);
    var string = document.getElementById("contenido").value;
    string = String(string).toUpperCase();
    for (var i = 0; i < string.length; i++) {
        var codigo = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
        resultado = resultado+String.fromCharCode(codigo);
    }
    document.getElementById("resultado").value=resultado;
}


function decode(){
    var resultado ="";
    var offset = parseInt(document.getElementById("numero").value);
    var string = document.getElementById("contenido").value;
    string = String(string).toUpperCase();
    for (var i = 0; i < string.length; i++) {
        var codigo = (string.charCodeAt(i) + 65 - offset) % 26 + 65;
        resultado = resultado+String.fromCharCode(codigo);
    }
    document.getElementById("resultado").value=resultado;
}