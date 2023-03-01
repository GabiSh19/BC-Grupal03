// Funcion menu desplegable nav

let list =document.getElementById("menu");
let button=document.getElementById("burger");
let ancho = window.innerWidth;

function toggle() {
  list.classList.toggle('header__list--show');
  list.classList.toggle('header__list--hide');
}

button.addEventListener("click",toggle);


// Funcion de Jquery para boton back to top

$(document).ready(function () {
  jQuery.goup({
    hideUnderWidth: 0,
    containerColor:'#00ad91',
    goupSpeed:'fast',
  });
});


// Funcion del tiempo con intervalos de 1000ms

setInterval(() =>{
    
let fecha = document.querySelector('#year');
let muestraFecha = new Date();
let dia = muestraFecha.getDate();
let mes = muestraFecha.getMonth() + 1;
let ano = muestraFecha.getFullYear();
let hora = ('0' + muestraFecha.getHours()).slice(-2); // anade un 0 como string, y luego recorta a solo dos digitos desde el final en direccion al comienzo
let minutos = ('0' + muestraFecha.getMinutes()).slice(-2);
let segundos = ('0' + muestraFecha.getSeconds()).slice(-2);
let fechaActual = `${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}`
fecha.textContent = fechaActual;

}, 1000)


//Función para animaciones 

const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }
  
  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
  });


  //Nav fixed
let nav = document.querySelector('.navFix');
let navPosition = nav.offsetTop;
  
window.addEventListener('resize', () => {    
  ancho = window.innerWidth;     
})
    
window.addEventListener('scroll', () => {
  if ((window.pageYOffset >= navPosition) & (ancho >= 768)) {
    nav.classList.remove('header__nav');
    nav.classList.add('header__fix');
  } else {
    nav.classList.add('header__nav');
    nav.classList.remove('header__fix');
  }
});