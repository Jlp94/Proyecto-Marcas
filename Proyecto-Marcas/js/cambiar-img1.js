const imgGaleria1 = document.querySelector('.img-galeria1');

// Cambiar la imagen al pasar el ratón
imgGaleria1.addEventListener('mouseover', () => {
    imgGaleria1.src = 'img/Ahumado.PNG'; // Imagen al pasar el ratón
});

// Restaurar la imagen al quitar el ratón
imgGaleria1.addEventListener('mouseout', () => {
    imgGaleria1.src = 'img/4Quesos.PNG'; // Imagen original
});
