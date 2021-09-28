/* Fetch nos permite hacer peticiones HTTP desde Javascript */
const url='https://jsonplaceholder.typicode.com/todos/1';
/*JSON = Javascript Object Notation. La petición por defecto es GET*/
const peticion=fetch(url)
.then(response =>response.json())
.then(datos=>console.log(datos)).catch(err => console.log(err));

/* Las promesas nos ayudan a esperar respuestas */