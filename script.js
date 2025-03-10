
const webUrl= "https://script.google.com/macros/s/AKfycbyS5L58pIm7EUGNtslScWblYXTPTDKi1eu7f7CukD4rXPZZ4jBhZaQCKGIPA2Y-95HX/exec"   
const imgEsperaUrl="/demopp_2/SimboloEspera.gif"
const urlChiste="https://script.google.com/macros/s/AKfycbxtGofgvSOkwx7T7pwzHrzXA59swnf8DAY_2xNrySYdDFaHTds_8jOVtX1HS1tiEcoM/exec"
const temas=[ 
  [ "#f8f4ff", "pink", "#CC0000", "white"  ],  //  1ario, 2ario, acento, blanco
  [ "cyan", "cyan", "blue", "white"  ],
  [ "cyan", "cyan", "green", "white"  ],
]

window.onload=init()
    
function init() {
  cambiarTema()
}

function recargarWeb (){  location.href = location.href + "?" + new Date().getTime();}

function info() {
  const anchoPantalla = window.innerWidth;
  const resPantalla = window.devicePixelRatio
  document.getElementById("nota").textContent = " width: " + anchoPantalla + ", res: " + resPantalla;
}

async function chiste(){ 
  const elem1 = document.getElementById("elemento1") 
  const elemTitulo=document.getElementById("tituloGranja")

  elem1.classList.remove("oculto");
  elem1.innerHTML = "<div class='imagenEspera'><img  src='" + imgEsperaUrl + "'></div> <br><br>"

  fetch(urlChiste)
    .then (response=>{ return response.text()})
    .then (data=>{
      elem1.innerHTML= "<div class='marco chiste'>" + data + "</div>";
      elemTitulo.innerHTML="CHISTE MALO";
  })
}

function acercade(){ 
  const elem1 = document.getElementById("elemento1") 
  elem1.innerHTML = "<div class='marco'><h3>ENCABEZADO ACERCA DE</h3><p>Realizada por OscarHR.</p><p>04/01/2025</p></div> <br><br>"
  elem1.innerHTML += "<div> Ancho: "+ window.innerWidth +"</div>"
  elem1.innerHTML += "<div> Alto: "+ window.innerHeight; +"</div>"
  elem1.innerHTML += "<div> Resolucion: "+ window.devicePixelRatio  +"</div>"
  elem1.innerHTML += "<div> Orientacion: "+ screen.orientation.type  +"</div>"
}

function cambiarTema() {
  var tema=localStorage.getItem("tema")!=null?parseInt(localStorage.getItem("tema")):10;
  tema = tema < (temas.length-1) ? tema+1:0;
  localStorage.setItem("tema",tema);
  const root = document.documentElement;
  root.style.setProperty('--color-primario', temas[tema][0]);
  root.style.setProperty('--color-secundario', temas[tema][1]);
  root.style.setProperty('--color-acento',temas[tema][2]);
}

const menuButton = document.querySelector('.menu-burger');
const menu = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('nav') && !event.target.closest('.menu-burger')) {
    menu.classList.remove('active');
  };
});
function closeMenu(){ document.querySelector('nav').classList.remove('active')     }


