window.cipher = {
    encode:(offset, string)=> {
        let resultado = "";     
      for (let i = 0; i < string.length; i++) {
        if(string[i] === " "){
        resultado += " ";
        }else{
        let resulta = string[i];
        let codigo = string.charCodeAt(i);
        resulta = String.fromCharCode((codigo - 65 + offset) % 26 + 65);
     
        resultado += resulta;
        }
      }
     
      return resultado;
    }, 
    
    decode:(offset, string)=> {
        let resultado = "";
     
      for (let i = 0; i < string.length; i++) {
        if(string[i] === " "){
        resultado += " ";
        }else{
        let resulta = string[i];
        let codigo = string.charCodeAt(i);
        resulta = String.fromCharCode((codigo + 65 - offset) % 26 + 65);
     
        resultado += resulta;
        }
        
      }
     
      return resultado;
    }
  };



