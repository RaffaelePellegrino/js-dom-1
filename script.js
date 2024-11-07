const statoLampadina = document.getElementById("interruttore")
const immagineLampadina = document.getElementById("immagine-lampadina")
const body = document.body;

statoLampadina.addEventListener("click",function(){
    const cambio = statoLampadina;
    if(cambio.textContent === "Accendi"){
        cambio.textContent = "Spegni";
        immagineLampadina.src = "img/yellow_lamp.png";
        body.classList.add("dark")
    }else{
        cambio.textContent = "Accendi";
        immagineLampadina.src = "img/white_lamp.png";
        body.classList.remove("dark")
    }
})

