// No cambies los nombres de las funciones.
// npm test JSX.test.js
function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  let elemento = [];
  elemento = Object.keys(objeto);
  
 return elemento
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let contador = {
  };
  for(let i = 0; i < string.length; i ++){
   if(string[i] in contador){
    contador[string[i]] = contador[string[i]] + 1;
   }else{
     contador[string[i]] = 1;
   }
    
  }
  return contador
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let newarray = "";
  for(i = 0; i < s.length; i++){
    let varmax = s[i].toUpperCase();
    if(s[i] === varmax){
      newarray = newarray + s[i]; 
    }
  }
    for(e = 0; e < s.length; e ++){
      let varmin = s[e].toLowerCase();
      if(s[e] === varmin){
        newarray = newarray + s[e];
      }
    }
  return newarray
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
let palabrainver = "";
let nuevafrase = "";
let palabra = "";

  for(i = 0; i <= str.length; i ++){
    
    if(str.charAt(i) === " " || i === str.length){
      for(e = palabra.length - 1; e >=0; e--){ 
         palabrainver = palabrainver + palabra[e];
      }
      palabrainver = palabrainver + " ";
      nuevafrase = nuevafrase +  palabrainver; 
      palabra = "";
      palabrainver = "";
    }
    
    else{
      palabra = palabra + str.charAt(i);
    }
    
    
    
  }
 let  nuevafrasebien = nuevafrase.substring(0, nuevafrase.length - 1);
  
return nuevafrasebien
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
let numeroinverso = "";
let numeronuevo = "";
numeronuevo = numeronuevo + numero;
  for(let i = numeronuevo.length; i >=0; i--){
     numeroinverso = numeroinverso + numeronuevo.charAt(i);
  }
  
  if(numeronuevo === numeroinverso){
    return "Es capicua"
  }
  else if(numeronuevo != numeroinverso){
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenanueva = "";
  let letra = "";
  for(i = 0; i < cadena.length; i ++){
    letra = cadena.charAt(i);
    if(letra === "a" || letra === "b" || letra === "c"){

    }else{
      cadenanueva = cadenanueva + cadena.charAt(i);
    }
    
  }
  return cadenanueva
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let palabra = "";
  let num = 0;
  let numcomp = 0;
  for(i = 0; i < arr.length; i++){
    palabra = arr[i];
    num = arr.length;
    
  }
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

