const seccion1 = document.querySelector('#seccion1');
const seccion2 = document.querySelector('#seccion2');
const seccion3 = document.querySelector('#seccion3');

const secciones = [seccion1, seccion2, seccion3];
let i = 0; 
const time = 3000;

// Mostrar la sección actual y ocultar las demás
function showSeccion(index) {
  secciones.forEach((seccion, idx) => {
    seccion.style.display = idx === index ? 'block' : 'none'; // Solo muestra la sección activa
  });
}

// Avanzar al siguiente slide
function avanzaSlide() {
  i = (i + 1) % secciones.length; // Incrementa el índice 
  showSeccion(i);
}

// Retroceder al slide anterior
function retrocedeSlide() {
  i = (i - 1 + secciones.length) % secciones.length; // Decrementa el índice
  showSeccion(i);
}

function tiempoSecciones() {
  avanzaSlide(); 
  setTimeout(tiempoSecciones, time);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  showSeccion(i); // Muestra la primera sección al cargar
  tiempoSecciones(); // Inicia el carrusel automático
});
