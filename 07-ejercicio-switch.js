const nombre=prompt('Ingresa tu nombre');
let mensaje='';
switch(nombre){
    case 'denisse':
        mensaje='Eres administrador';
        break;
    case 'juan':
        mensaje='Eres usuario';
        break;
    default:
        mensaje='No tienes permisos para usar el sistema';
        break;
}
document.write(`<p>${mensaje}</p>`);