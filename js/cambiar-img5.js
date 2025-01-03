const imgGaleria5 = document.querySelector('.img-galeria5');

// Cambiar la imagen al pasar el ratón
imgGaleria5.addEventListener('mouseover', () => {
    imgGaleria5.src = 'img/Choco1.PNG'; // Imagen al pasar el ratón
});

// Restaurar la imagen al quitar el ratón
imgGaleria5.addEventListener('mouseout', () => {
    imgGaleria5.src = 'img/Choco2.PNG'; // Imagen original
});
