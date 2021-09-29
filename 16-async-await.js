const $btnGatetos = document.querySelector('#gatetos');
$btnGatetos.addEventListener('click',async()=>{
    const resp = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await resp.json();
    let newImage=document.createElement('img');
        newImage.src=data[0].url;
        newImage.width='300';
        document.body.appendChild(newImage);
});

// fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json()).then(data =>{
//         let newImage=document.createElement('img');
//         newImage.src=data[0].url;
//         document.body.appendChild(newImage);
//     }).catch(err => console.log(err));