const imgGaleria3 = document.querySelector('.img-galeria3');

// Cambiar la imagen al pasar el ratón
imgGaleria3.addEventListener('mouseover', () => {
    imgGaleria3.src = 'img/Turron1.PNG'; // Imagen al pasar el ratón
});

// Restaurar la imagen al quitar el ratón
imgGaleria3.addEventListener('mouseout', () => {
    imgGaleria3.src = 'img/Turron2.PNG'; // Imagen original
});
