const imgGaleria4 = document.querySelector('.img-galeria4');

// Cambiar la imagen al pasar el ratón
imgGaleria4.addEventListener('mouseover', () => {
    imgGaleria4.src = 'img/Kitkat1.PNG'; // Imagen al pasar el ratón
});

// Restaurar la imagen al quitar el ratón
imgGaleria4.addEventListener('mouseout', () => {
    imgGaleria4.src = 'img/Kitkat.PNG'; // Imagen original
});
