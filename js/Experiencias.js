const botonVolver = document.getElementById ("volver");

function iniciarCV(){
    botonVolver.addEventListener("click", volverIncio);
   
}

function volverIncio() {
    window.location.href = "/index.html";
}

window.addEventListener('load', iniciarCV);