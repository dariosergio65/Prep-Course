// No cambies los nombres de las funciones.

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
  
  var nuevo=[];
  for (var i in objeto){
    nuevo.push([i,objeto[i]]);
  }
  return nuevo;
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var ordenado=[];
  largo=string.length;
  for(let i=0; i<largo; i++){
    ordenado.push(string[i]);
  }
  ordenado.sort(); //hasta aquí tengo el string ordenado y convertido en array
  var copia=ordenado;
  var nuevo={};
  var cant=0;
  var compara=copia[0];
  var cla="";
  ordenado.map(function(elem,ii,arr){
    if(elem===compara){
      ++cant;
      cla=elem;
    }else{
      if(cant===1){cla=arr[ii-1];}
      compara=copia[ii];
      nuevo[cla]=cant;
      cant=1
    }
    if(ii===copia.length-1){nuevo[cla]=cant;}
  });
return nuevo;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var nuevo="";
  largo=s.length;
  var palabra="";
  var palabra1="";
  for(let i=0; i<largo; i++){
    if(s[i]===s[i].toUpperCase()){
      palabra=palabra+s[i];
    }else{
      palabra1=palabra1+s[i];
    }
  }
  nuevo=palabra+palabra1;
  return nuevo;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  nuevo=str.split(" ");
  largo=nuevo.length;
  final="";
  for(let i=0; i<largo; i++){
    lar=nuevo[i].length-1;
    for(let e=lar; e>(-1); e--){
      final=final+nuevo[i][e];
    }
    if(i !== (largo-1)){final=final+" ";}
  }
  return final;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  str=numero.toString();
  if(str.length===1){return "Es capicua";}
  largo=str.length;
  for(let i=0; i<(largo/2); i++){
    if(str[i]===str[largo-i-1]){
      continue;
    }else{
      return "No es capicua";
    }
  }
  return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  nueva="";
  largo=cadena.length;
  for(let i=0; i<largo; i++){
    if(cadena[i]==="a"){continue;}
    if(cadena[i]==="b"){continue;}
    if(cadena[i]==="c"){continue;}
    nueva=nueva+cadena[i];
  }
  return nueva;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
    const largo = arr.length;
    for (let i = 0; i < largo; i++ ) {
      for (let j = 0; j < largo - 1 - i; j++ ) {
        if ( arr[j].length > arr[j + 1].length ) {
          [ arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevo=[];
  largo1=arreglo1.length;
  largo2=arreglo2.length;
  for(let i=0; i<largo1; i++){
    for(let j=0; j<largo2; j++){
      if(arreglo1[i]===arreglo2[j]){
        nuevo.push(arreglo1[i]);
      }
    }
  }
  return nuevo;
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

