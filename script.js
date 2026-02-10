// 👉 Fecha para contador
const fechaInicio = new Date("2026-01-11");

const hoy = new Date();
const diferencia = hoy - fechaInicio;
const dias = Math.floor(diferencia/(1000*60*60*24));

document.getElementById("contador").innerText =
  "Llevamos " + dias + " días de risas, amor y momentos juntos.";

// ABRIR CARTA
function abrir(){
  document.getElementById("sobre").classList.add("abrir");
}

function abrirCarta(){
  document.getElementById("cartaGrande").style.display="flex";
}

function cerrarCarta(){
  document.getElementById("cartaGrande").style.display="none";
}

function abrirCarta(){
  document.getElementById("cartaMagica").style.display="flex";
  document.body.style.overflow="hidden";
}

function cerrarCarta(){
  document.getElementById("cartaMagica").style.display="none";
  document.body.style.overflow="auto";
}


// CORAZONES FLOTANDO
function crearCorazon(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML="❤️";
  
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = (15 + Math.random()*25) + "px";
  heart.style.animationDuration = (4 + Math.random()*4) + "s";

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },6000);
}

function mostrar(id){

  let secciones = document.querySelectorAll(".contenido");
  secciones.forEach(sec => sec.style.display = "none");

  document.getElementById(id).style.display = "block";
}

const momentos = document.querySelectorAll(".momento");

function mostrarMomentos(){
  const trigger = window.innerHeight * 0.85;

  momentos.forEach(momento => {
    const top = momento.getBoundingClientRect().top;

    if(top < trigger){
      momento.classList.add("mostrar");
    }
  });
}

window.addEventListener("scroll", mostrarMomentos);
mostrarMomentos();

function abrirImg(src){
  document.getElementById("visor-img").src = src;
  document.getElementById("visor").style.display = "flex";
}

function cerrarImg(){
  document.getElementById("visor").style.display = "none";
}



setInterval(crearCorazon,300);
