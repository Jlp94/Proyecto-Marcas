// Selecciona el botón por su ID
const botonContactar = document.getElementById('enviar');

// Agrega un evento 'click' al botón
botonContactar.addEventListener('click', function () {
    // Redirige al enlace mailto
    window.location.href = "mailto:joseluis.prieto@solvam.es";
});// mailto te abre el correo de aplicación que tengas en el sistema, ya que no se de back-end y prefiero no adentrarme en algo que no se aún.
