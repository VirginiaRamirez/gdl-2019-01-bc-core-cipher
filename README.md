#1-SECRETO SEGURO

El programa "SECRETO SEGURO" esta diseñado para cualquier usuario con necesidad de cifrar/descifrar mensajes privados a base del cifrado Cesar:
![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

#2-COMO DESCARGAR E INSTALAR EL PROGRAMA
*Para comenzar a utilizar el programa tendrás que hacer un _fork_ y _clonar_ este
repositorio en .
*Abrir carpeta "Laboratoria"
*Abrir carpera "gdl-2019-01-bc-core-cipher
*Abrir carpeta "src"
*Seleccionar index.html

#3- COMO UTILIZAR EL PROGRAMA
*Ingresa dentro de la caja de texto el codigo a cifrar/descifrar.
*Selecciona la cantidad de posiciones que quieres que tu mensaje se desplace.
*Selecciona el boton de tu preferencia, (si quieres cifrar pulsa boton codificar, si quieres descifrar pulsa el boton decodificar).
*Obten el codigo ya cifrado/descifrado en el cuadro de texto bajo la leyenda de "Tu resultado es".
*Pulsa el boton "Limpiar" para limpiar cuadros de texto y comenzar de nuevo.

#4-Consideraciones Técnicas

*El proyecto se encuentra implementado completamente en JavaScript
(ES6).
* El programa se encuentra implementado sin utilizar librerias, solo se utilizo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

*No se utilizo la _pseudo-variable_ `this`.

*Los tests unitarios cubren un el 91.3% de _statements_, 100% de_functions_ 
,90.48% de _lines_, y un  50% de _branches_.
