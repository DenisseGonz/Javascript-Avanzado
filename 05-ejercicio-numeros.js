/*const numero=parseInt(prompt('Ingresa un número'));
var residuo;
residuo=numero%2;
if(residuo==0){
    document.write(`El número ${numero} es par`);    
}else{
    document.write(`El número ${numero} es impar`);    
}*/

//Mostrar los números impares en medio de 2 números
const num1=parseInt(prompt('Ingresa el primer número'));
const num2=parseInt(prompt('Ingresa el segundo número'));
var resta, numeroMenor, numeroMayor;
const lista = [];

if(num1==num2){
    document.write('No se puede hacer la operación porque estas introduciendo el mismo numero');
}else{
    resta=num1-num2;
    if(resta==1 || resta==-1){
        document.write('No hay números impares en medio');
    }else{
        if(num1>num2){
            numeroMenor=num2;
            numeroMayor=num1;
        }else{
            numeroMenor=num1;
            numeroMayor=num2;
        }
        for(var i=(numeroMenor+1); i<numeroMayor; i++){
            if((i%2)==1){
                lista.push(i);
            }else{
                console.log(`${i} no es impar`)
            }
        }
        if(lista.length == 0){
            document.write('Tus 2 números diferian por 2 y eran impares, así que no los escribi')
        }
    }
}
document.write(lista);