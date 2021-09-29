/*try nos permite ejecutar código propenso a fallar de una manera segura */

const gravedad=9.8;
console.log(gravedad);
/*Intenta ejecutar el código, si hay un error ejecuta el catch */
try{
    gravedad=10;
}catch(err){
    /*El catch se ejecuta si hay un error, recibe como primer parametro el error */
    console.log(err);
}finally{
    /*El finally siempre se ejecuta*/
    console.log('soy el finally');
}
console.log(gravedad);