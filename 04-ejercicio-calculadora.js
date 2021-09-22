/*
Escribir una calculadora para calcular la edad, el usuario ingresa su año de nacimiento y el programa le da la edad
*/

const nombre=prompt('¿Cuál es tu nombre?');
alert("Esta es una calculadora de edad. Por favor ingresa los siguientes datos.");
const mes=parseInt(prompt('Ingresa el mes en que naciste (número)'));
const dia=parseInt(prompt('Ingresa el día en que naciste (número)'));
const año=parseInt(prompt('Ingresa el año en que naciste (número completo)'));
const mesActual=9,diaActual=21,añoActual=2021;


function acercamientoEdad(año){
    edad=añoActual-año;
    document.write(`Hola ${nombre} tu edad aproximada es: ${edad} <br/>`);
}