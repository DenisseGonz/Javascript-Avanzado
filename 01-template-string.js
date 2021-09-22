/*
Lo que vimos con anterioridad:
*/
var nombre=prompt("¿Cuál es tu nombre?");
var edad=prompt("¿Cuál es tu edad?");

/*console.log("Hola "+ nombre + " saludos. Tu edad es "+edad+" años");*/

/* 
Ahora vamos con los template strings 
*/
const saludo =`<h3>Hola ${nombre} saludos. Tu edad es ${edad} años</h3>`;

document.write(saludo);