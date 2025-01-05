const hamburger = document.querySelector('.hamburger') //cogemos la clase hamburger
const menu = document.querySelector('.menu-navegacion') // cogemos la clase menu-navegacion



hamburger.addEventListener('click', ()=>{
   menu.classList.toggle("spread")
}) // si hacemos click en la hamburguesa expandimos el menú


window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') && e.target != hamburger) // si clicK en la ventana y click diferente a la hamburguesa cerramos el menú.
    {
       menu.classList.toggle("spread") // spread expande el menú , le da el movimiento , a la zona invisible como fuera de la ventana.
    }
})

