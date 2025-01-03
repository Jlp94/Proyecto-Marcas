function showTime(){
    var dato = new Date();
    var h = dato.getHours(); // 0 - 23
    var m = dato.getMinutes(); // 0 - 59
    var s = dato.getSeconds(); // 0 - 59
    var sesion = "AM";
    
    if(h > 12){
        h = h - 12;
        sesion = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var tiempo = h + ":" + m + ":" + s + " " + sesion;
    document.getElementById("mi-reloj").innerText = tiempo;
    document.getElementById("mi-reloj").textContent = tiempo;
    
    setTimeout(showTime, 1000);
    
}

showTime();