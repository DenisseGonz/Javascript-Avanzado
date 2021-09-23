/* Arreglos
Estructura de datos
*/
//Declaración de arreglos
const arreglo=[];
const arreglo2=new Array();

let lenguajes=['Javascript','Java','PHP', 'Python', 'C#','C++','Scala','Rust', 'Ruby', 'Cobol'];

//forEach. Sirve para recorrer los elementos del arreglo. La función que esta ahí es una función anónima
lenguajes.forEach(function(lenguaje,posicion){
    document.write(`<p>${posicion} - ${lenguaje}</p>`);
});

//Map crea un nuevo arreglo con los resultados
let numeros= Array(2,3,4,27,19,12);
let multiplos=numeros.map(function(numero){
    return numero * 2;
});

console.log(numeros);
console.log(multiplos);

/*Includes determina si un arreglo contiene un valor */
console.log(lenguajes.includes('PHP'));

/*Filter. crear un nuevo arreglo con todos los elementos que cumplan con la condicion */

let filtrados =numeros.filter(function(numero){
    if(numero>10){
        return numero;
    }
});

console.log(filtrados);