const imgGaleria2 = document.querySelector('.img-galeria2');

// Cambiar la imagen al pasar el ratón
imgGaleria2.addEventListener('mouseover', () => {
    imgGaleria2.src = 'img/Pistacho3.PNG'; // Imagen al pasar el ratón
});

// Restaurar la imagen al quitar el ratón
imgGaleria2.addEventListener('mouseout', () => {
    imgGaleria2.src = 'img/Pistacho7.PNG'; // Imagen original
});
