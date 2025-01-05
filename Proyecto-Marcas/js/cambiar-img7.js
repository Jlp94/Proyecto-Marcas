const imgGaleria7 = document.querySelector('.img-galeria7');

// Cambiar la imagen al pasar el ratón
imgGaleria7.addEventListener('mouseover', () => {
    imgGaleria7.src = 'img/Milka4.PNG'; // Imagen al pasar el ratón
});

// Restaurar la imagen al quitar el ratón
imgGaleria7.addEventListener('mouseout', () => {
    imgGaleria7.src = 'img/Milka.PNG'; // Imagen original
});
