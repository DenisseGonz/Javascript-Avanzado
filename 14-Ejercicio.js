const $btnGatetos = document.querySelector('#gatetos');
const $btnPerritos = document.querySelector('#perritos');

$btnGatetos.addEventListener('click',()=>{
    fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json()).then(data =>{
        let newImage=document.createElement('img');
        newImage.src=data[0].url;
        document.body.appendChild(newImage);
    }).catch(err => console.log(err));
});

$btnPerritos.addEventListener('click',()=>{
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(data =>{
        let newImage=document.createElement('img');
        newImage.src=data.message;
        document.body.appendChild(newImage);
    }).catch(err => console.log(err));
});