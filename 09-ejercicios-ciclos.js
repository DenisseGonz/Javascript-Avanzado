/*
Solcitar número al usuario, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahi mostrar el resultado
*/

/*let num1=parseInt(prompt('Ingresa un numero'));
let suma=0, numeros =[], sumaProm=0, prom;

while(num1>0){
    suma+=num1;
    numeros.push(num1);
    document.write(`El número introducido es: ${num1}<br/>La suma es: ${suma} <br/>`);
    num1=parseInt(prompt('Ingresa otro numero'));
}

for(var i=0; i<numeros.length;i++){
    var elemento=numeros[i];
    sumaProm+=elemento;
}
prom = sumaProm/numeros.length;

document.write(`El promedio de todos los números ingresados (menos el negativo) es: ${prom}`);*/

/*
Mostrar todos los numero divisores de un número introducido.
*/

let numero=parseInt(prompt('Introduce un número mayor a cero'));
let divisores=[];

    for(var i=1;i<=numero;i++){
        if(numero%i===0){
            divisores.push(i);
        }
    }
document.write(`El numero introducido fue ${numero} y sus divisores son: ${divisores} `)