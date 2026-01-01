const menuOptions = document.getElementById('nav-options');
const audioPrincipal = document.getElementById('audio-principal');
const audioStories = document.getElementById('audio-stories');
const audioCarta = document.getElementById('audio-carta');

function comenzarExperiencia() {
    document.getElementById('pantalla-inicio').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('pantalla-inicio').style.display = 'none';
    }, 500);
    cambiarSeccion('principal');
}

function toggleMenu() {
    menuOptions.classList.toggle('mostrar');
}

function cambiarSeccion(nombreSeccion) {
    menuOptions.classList.remove('mostrar');
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('activa'));
    
    const seccionActiva = document.getElementById('sec-' + nombreSeccion);
    if(seccionActiva) seccionActiva.classList.add('activa');

    detenerTodoAudio();
    if(nombreSeccion === 'principal') playAudio(audioPrincipal);
    if(nombreSeccion === 'stories') playAudio(audioStories);
    if(nombreSeccion === 'carta') playAudio(audioCarta);
}

function detenerTodoAudio() {
    audioPrincipal.pause(); audioPrincipal.currentTime = 0;
    audioStories.pause(); audioStories.currentTime = 0;
    audioCarta.pause(); audioCarta.currentTime = 0;
}

function playAudio(audioElement) {
    audioElement.play().catch(error => { console.log("Esperando interacción."); });
}

document.addEventListener('click', function(event) {
    const navContainer = document.querySelector('.nav-container');
    if (!navContainer.contains(event.target)) {
        menuOptions.classList.remove('mostrar');
    }
});