// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let nombresAmigos = [];

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja(){
    let cajaVacia = document.querySelector('#amigo').value = '';
    return cajaVacia;

}
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == ""){
        alert("Digite un nombre valido");
        

    } else { 
        nombresAmigos.push(amigo);
        limpiarCaja();
        const li = document.createElement('li'); // Crea un nuevo elemento LI
        li.textContent = amigo; // Asigna el nombre del amigo al LI
        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.appendChild(li); // Agrega el LI a la lista
    }
    console.log(nombresAmigos);
}
   


function sortearAmigo(){
    
    let indiceAmigo = Math.floor((Math.random()*nombresAmigos.length) );
    console.log(indiceAmigo);
    let amigoElegido = nombresAmigos[indiceAmigo];
    const li = document.createElement('li');
    li.textContent = amigoElegido; 
    const resultado = document.getElementById('resultado');
    resultado.appendChild(li); 
}


