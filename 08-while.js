/*
Ciclo While
Nos permite repetir el codigo mientras una condición sea verdadera.

let num1=parseInt(prompt('Ingresa un numero'));
while(isNaN(num1)){
    num1=parseInt(prompt('Ingresa un numero'));
}

let num1=parseInt(prompt('Ingresa un numero'));

while(num1 != 23){
    console.log('No adivinaste el numero secreto, intenta de nuevo');
    num1=parseInt(prompt('Ingresa un numero'));
}
console.log('Felicidades')*/
let num1=parseInt(prompt('Ingresa un numero'));

do{
    document.write(`<p>El numero introducido es: ${num1}</p>`);
    num1=parseInt(prompt('Ingresa un numero'));
}while(num1>5);