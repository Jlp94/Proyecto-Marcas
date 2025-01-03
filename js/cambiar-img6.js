const imgGaleria6 = document.querySelector('.img-galeria6');

// Cambiar la imagen al pasar el ratón
imgGaleria6.addEventListener('mouseover', () => {
    imgGaleria6.src = 'img/Lotus3.PNG'; // Imagen al pasar el ratón
});

// Restaurar la imagen al quitar el ratón
imgGaleria6.addEventListener('mouseout', () => {
    imgGaleria6.src = 'img/Lotus2.PNG'; // Imagen original
});
