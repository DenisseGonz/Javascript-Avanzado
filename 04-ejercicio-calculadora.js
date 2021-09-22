/*
Escribir una calculadora para calcular la edad, el usuario ingresa su año de nacimiento y el programa le da la edad
*/

const nombre=prompt('¿Cuál es tu nombre?');
alert("Esta es una calculadora de edad. Por favor ingresa los siguientes datos.");
const mes=parseInt(prompt('Ingresa el mes en que naciste (número)'));
const dia=parseInt(prompt('Ingresa el día en que naciste (número)'));
const año=parseInt(prompt('Ingresa el año en que naciste (número completo)'));
var edad,diasRestantes,mesesRestantes,edadRes;
const mesActual=9,diaActual=21,añoActual=2021;
var bisiesto;
if(mes==mesActual && dia==diaActual && año==añoActual){
    document.write("Felicidades, acabas de nacer.");
}else if(año>=añoActual){
    if(mes>mesActual && dia>diaActual && año>añoActual){
        document.write('Fecha incorrecta, aún no naces');
    }else{
        aniobisiesto(añoActual);
        acercamientoEdad(año);
        edadExacta(mes,dia,año);
    }
}

function aniobisiesto(dataentrada){
    //Verifica si este año es bisiesto
    if((dataentrada%4)==0){
        bisiesto==true;
    }else{
        bisiesto==false;
    }
}

function acercamientoEdad(año){
    edad=añoActual-año;
    document.write(`Hola ${nombre} tu edad aproximada es: ${edad} <br/>`);
}

function edadExacta(mes,dia,año){

    if(1<= mes<=12){
        var diaRedondeado=Math.floor(dia);
        mesesRestantes=mesActual-mes;
            
        if(mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
            
            //Este if es una validación
            if(1<=diaRedondeado<=31){
                
                diasRestantes=diaActual-dia;
                
                if(diasRestantes<0){
                    document.write(`Tienes ${Math.abs(diasRestantes)} días`);    

                    if(mesesRestantes<0){
                        //Aún no cumple años, le faltan meses
                        edadRes=añoActual-año-1;
                        document.write(`, ${Math.abs(mesesRestantes)} meses y ${edadRes} años`);
                    }else if(mesesRestantes==0){
                        //Esta a unos dias de su cumpleaños
                        edadRes=añoActual-año-1;
                        document.write(` y ya casi es tu cumpleaños, entonces tienes ${edadRes} años.`)
                    }else{
                        //Ya cumplió años
                        edadRes=añoActual-año
                        document.write(`, ${12-mesesRestantes} meses y tienes ${edadRes} años`);
                    }

                }else if(diasRestantes==0){
                    
                    if(mesesRestantes<0){
                        //Le faltan meses para cumplir años
                        edadRes=añoActual-año-1;
                        document.write(`Tienes ${Math.abs(mesesRestantes)} meses y ${edadRes} años`);
                    }else if(mesesRestantes==0){
                        //¡Cumpleaños!
                        edadRes=añoActual-año;
                        document.write(`¡Felicidades! Hoy es tu cumpleaños, entonces tienes ${edadRes} años.`)
                    }else{
                        //Cumplió años hace meses
                        edadRes=añoActual-año
                        document.write(`Tienes ${12-mesesRestantes} meses y ${edadRes} años`);
                    }
                }else{
                    
                    document.write(`Tienes ${31-diasRestantes} días`);
                    
                    if(mesesRestantes<0){
                        //Faltan meses para tu cumpleaños
                        edadRes=añoActual-año-1;
                        document.write(`, ${Math.abs(mesesRestantes)} meses y ${edadRes} años`);
                    }else if(mesesRestantes==0){
                        //Hace días cumplió años
                        edadRes=añoActual-año;
                        document.write(`, entonces tienes ${edadRes} años. Feliz cumpleaños atrasado`)
                    }else{
                        //Cumplió años hace meses
                        edadRes=añoActual-año
                        document.write(`, ${12-mesesRestantes} meses y ${edadRes} años`);
                    }
                }
            }else{
                alert(`No existe el día ${dia} para el mes ${mes}, recarga la pagina y vuelve a intentarlo`);        
            }
        }else if(mes==4 || mes==6 || mes==9 || mes==11){

            //Este if es una validación
            if(1<=diaRedondeado<=30){
                
                diasRestantes=diaActual-dia;
                
                if(diasRestantes<0){
                    
                    document.write(`Tienes ${Math.abs(diasRestantes)} días`);    

                    if(mesesRestantes<0){
                        //Aún no cumple años, le faltan meses
                        edadRes=añoActual-año-1;
                        document.write(`, ${Math.abs(mesesRestantes)} meses y ${edadRes} años`);
                    }else if(mesesRestantes==0){
                        //Esta a unos dias de su cumpleaños
                        edadRes=añoActual-año-1;
                        document.write(` y ya casi es tu cumpleaños, entonces tienes ${edadRes} años.`)
                    }else{
                        //Ya cumplió años
                        edadRes=añoActual-año
                        document.write(`, ${12-mesesRestantes} meses y tienes ${edadRes} años`);
                    }

                }else if(diasRestantes==0){
                    
                    if(mesesRestantes<0){
                        //Le faltan meses para cumplir años
                        edadRes=añoActual-año-1;
                        document.write(`Tienes ${Math.abs(mesesRestantes)} meses y ${edadRes} años`);
                    }else if(mesesRestantes==0){
                        //¡Cumpleaños!
                        edadRes=añoActual-año;
                        document.write(`¡Felicidades! Hoy es tu cumpleaños, entonces tienes ${edadRes} años.`)
                    }else{
                        //Cumplió años hace meses
                        edadRes=añoActual-año
                        document.write(`Tienes ${12-mesesRestantes} meses y ${edadRes} años`);
                    }
                }else{
                    
                    document.write(`Tienes ${30-diasRestantes} días`);
                    
                    if(mesesRestantes<0){
                        //Faltan meses para tu cumpleaños
                        edadRes=añoActual-año-1;
                        document.write(`, ${Math.abs(mesesRestantes)} meses y ${edadRes} años`);
                    }else if(mesesRestantes==0){
                        //Hace días cumplió años
                        edadRes=añoActual-año;
                        document.write(`, entonces tienes ${edadRes} años. Feliz cumpleaños atrasado`)
                    }else{
                        //Cumplió años hace meses
                        edadRes=añoActual-año
                        document.write(`, ${12-mesesRestantes} meses y ${edadRes} años`);
                    }
                }
            }else{
                alert(`No existe el día ${dia} para el mes ${mes}, recarga la pagina y vuelve a intentarlo`);        
            }    
        }else if(mes==2){
            

            //Este if es una validación
            if(1<=diaRedondeado<=29){
                
                diasRestantes=diaActual-dia;
                
                if(diasRestantes<0){
                    
                    document.write(`Tienes ${Math.abs(diasRestantes)} días`);    

                    if(mesesRestantes<0){
                        //Aún no cumple años, le faltan meses
                        edadRes=añoActual-año-1;
                        document.write(`, ${Math.abs(mesesRestantes)} meses y ${edadRes} años`);
                    }else if(mesesRestantes==0){
                        //Esta a unos dias de su cumpleaños
                        edadRes=añoActual-año-1;
                        document.write(` y ya casi es tu cumpleaños, entonces tienes ${edadRes} años.`)
                    }else{
                        //Ya cumplió años
                        edadRes=añoActual-año
                        document.write(`, ${12-mesesRestantes} meses y tienes ${edadRes} años`);
                    }

                }else if(diasRestantes==0){
                    
                    if(mesesRestantes<0){
                        //Le faltan meses para cumplir años
                        edadRes=añoActual-año-1;
                        document.write(`Tienes ${Math.abs(mesesRestantes)} meses y ${edadRes} años`);
                    }else if(mesesRestantes==0){
                        //¡Cumpleaños!
                        edadRes=añoActual-año;
                        document.write(`¡Felicidades! Hoy es tu cumpleaños, entonces tienes ${edadRes} años.`)
                    }else{
                        //Cumplió años hace meses
                        edadRes=añoActual-año
                        document.write(`Tienes ${12-mesesRestantes} meses y ${edadRes} años`);
                    }
                }else{

                    if(aniobisiesto==true){
                        document.write(`Tienes ${29-diasRestantes} días`);
                    }else{
                        document.write(`Tienes ${28-diasRestantes} días`);    
                    }
                    
                    if(mesesRestantes<0){
                        //Faltan meses para tu cumpleaños
                        edadRes=añoActual-año-1;
                        document.write(`, ${Math.abs(mesesRestantes)} meses y ${edadRes} años`);
                    }else if(mesesRestantes==0){
                        //Hace días cumplió años
                        edadRes=añoActual-año;
                        document.write(`, entonces tienes ${edadRes} años. Feliz cumpleaños atrasado`)
                    }else{
                        //Cumplió años hace meses
                        edadRes=añoActual-año
                        document.write(`, ${12-mesesRestantes} meses y ${edadRes} años`);
                    }
                }
            }else{
                alert(`No existe el día ${dia} para el mes ${mes}, recarga la pagina y vuelve a intentarlo`);        
            }
        }else{
            alert(`No existe el mes ${mes}, recarga la pagina y vuelve a intentarlo`);    
        }
    }else{
        alert(`No existe el mes ${mes}, recarga la pagina y vuelve a intentarlo`);
    }
}