const botonVerMarterias = document.getElementById ("ver-Materias");
const fotoMateriasProg = document.getElementById ("materiasUTN");
const botonOcultarMarterias = document.getElementById ("ocultar-Materias");


function iniciarCV(){
    fotoMateriasProg.style.display ="none";
    botonOcultarMarterias.style.display ="none";

    botonVerMarterias.addEventListener("click", mostrarMateriasAp);
    botonOcultarMarterias.addEventListener("click", ocultarMateriasAp);
    
}

function mostrarMateriasAp() {
    fotoMateriasProg.style.display = "flex";
    fotoMateriasProg.style.width = "95%";
    fotoMateriasProg.style.margin = "20px";

    botonVerMarterias.style.display = "none";
    botonOcultarMarterias.style.display = "flex";
}

function ocultarMateriasAp() {
    fotoMateriasProg.style.display = "none";
    botonVerMarterias.style.display = "flex";
    botonOcultarMarterias.style.display = "none";
}

window.addEventListener('load', iniciarCV);