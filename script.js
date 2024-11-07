const statoLampadina = document.getElementById("interruttore")
const immagineLampadina = document.getElementById("immagine-lampadina")
const body = document.body;

statoLampadina.addEventListener("click",function(){
    if(statoLampadina.textContent === "Accendi"){
        statoLampadina.textContent = "Spegni";
        immagineLampadina.src = "img/yellow_lamp.png";
        body.classList.add("dark")
        statoLampadina.classList.add("dark")
    }else{
        statoLampadina.textContent = "Accendi";
        immagineLampadina.src = "img/white_lamp.png";
        body.classList.remove("dark")
        statoLampadina.classList.remove("dark")
    }
})

