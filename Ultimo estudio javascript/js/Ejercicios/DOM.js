/////////////////////////////// 60. webs APIS   ////////////////////////////////////////////////////

////////// API:  interfaz de programación de aplicaciones -- Application Programming Interfaces///////////////////

/*
      Se trata de un conjunto de definiciones y protocolos que se utiliza para
      desarrollar e integrar el software de las aplicaciones, permitiendo la
      comunicación entre dos aplicaciones de software a través de un conjunto
      de reglas.
      */

/////////////////////////////// 61. DOM: Introducción   ////////////////////////////////////////////////////

// console.log("************************Elementos del Documento**********************************");
// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.scripts);
// console.log(document.getSelection().toString());

////////////////////////// 62. DOM: Nodos, Elementos y Selectores /////////////////////////////////////////////////////

////////////// estos ya no se usan ///////////////////////////////////

// console.log(document.getElementsByTagNameNS("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("menu"));

// //////////// son los mas usados ///////////////

// console.log(document.getElementById("menu"));
// console.log(document.querySelector("#menu"));
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach((el) => consol.log(el));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card")[2]);
// console.log(document.querySelectorAll("#menu li"));

///////////////////////////////////   63. DOM: Atributos y Data-Attributes  /////////////////////////////

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.documentElement.querySelector(".link-dom").href);
// console.log(document.documentElement.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang = "en";
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute("lang", "es-MX");
// console.log(document.documentElement.lang);

///////////////// ***($)**** se usa para para referenciar variables que son parte del HTML, son elementos del DOM /// ojo recordar ///////

// const $linkDOM = document.querySelector(".link-dom");

// $linkDOM.setAttribute("target", "_blank");
// $linkDOM.setAttribute("rel", "noopener");
// $linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
// console.log($linkDOM.hasAttribute("rel"));
// $linkDOM.removeAttribute("rel");

///////////////// DATA-ATTRIBUTES ////////////////

// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.database);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-description", "modelo de objeto del documento");
// console.log($linkDOM.dataset.description);

// $linkDOM.dataset.description = "Suscribete a mi canal y comparte";
// console.log($linkDOM.dataset.description);
// console.log($linkDOM.hasAttribute("data-id"));
// console.log($linkDOM.removeAttribute("data-id"));
// console.log($linkDOM.hasAttribute("data-id"));

////////////////////// 64. DOM: Estilos y Variables CSS ////////////////////////////////

// const $linkDOM = document.querySelector(".link-dom");

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM));
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// $linkDOM.style.setProperty("text-decoration","none");
// $linkDOM.style.setProperty("display", "block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAling = "center";
// $linkDOM.style.marginLeft = "auto";
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.padding = "1rem";
// $linkDOM.style.borderRadius = "5rem";

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log(getComputedStyle($linkDOM));

// Variables CSS - Custom Properties Css ///

// const $html = document.documentElement,
// $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
// varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor, varYellowColor);

// Sbody.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color", "pink");

// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color", varDarkColor);

/////////////////////////////// DOM: Clases CSS ///////////////////////////////////////

// const $card = document.querySelector("card");

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classlist.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// console.log($card.className);
// console.log($card.classList);
// $card.classlist.remove("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classlist.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classlist.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classlist.toggle("rotate-45");
// $card.classlist.replace("rotate-45", "rotate-135");
// $card.classlist.add("opacity-80","sepia");
// $card.classlist.remove("opacity-80","sepia");
// $card.classlist.toggle("opacity-80","sepia");

////////////////////////////////// 66. DOM: Texto y HTML ////////////////////////////////////////

// const $whatItsDOM = document.getElementById("que-es");

// let text = `
// <p>
// El modelo de objetos del documento (<b> <i> DOM - Document Object Model </i> </b>) es un API para documentos HTML y XML.

// </p>

// <p>
// Este provee una representacion estructural del documento, permitiendo modificar su contenido y representacion visual mediante codigo Js

// </p>

// <p>
// <mark> El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores.</mark>
// </p>
// `;

// //$whatItsDOM.innerText = text;
// $whatItsDOM.textContent = text;
// $whatItsDOM.innerHTML = text;
// $whatItsDOM.outerHTML = text;

//////////////////////////////////  67. DOM Traversing: Recorriendo el DOM ////////////////////////////////

// const $cards = document.querySelector("cards");
// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentNode);
// console.log($cards.parentElement);
// console.log($cards.firstChild);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousSibling);
// console.log($cards.previousElementSibling);
// console.log($cards.nextSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.closest("div"));
// console.log($cards.closest("body"));
// console.log($cards.children[3].closest("section"));

////////////////////////////////////// 68. DOM: Creando Elementos y Fragmentos ///////////////////////////////

// const $figure = document.createElement("figure"),
//   $img = document.createElement("img"),
//   $figcaption = document.createElement("figcaption"),
//   $figcaptionText = document.createTextNode("Animals"), // nodo de texto dentro del nodo "figcaption"
//   $cards = document.querySelector(".cards");

// const $figure2 = document.createElement("figure");

// $img.setAttribute("src", "https://placeimg.com/200/200/animals");
// $img.setAttribute("alt", "Animals");
// $figure.classList.add("card");

// // agregarlas al árbol
// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption)
// $cards.appendChild($figure); // <figure></figure>

// // otra forma de agregar un elemento hijo (no recomendada porque no esta creando un NODO html)
// $figure2.innerHTML = `
// <img src="https://placeimg.com/200/200/people" alt="People">
// <figcaption>People</figcaption>
// `;

// $figure2.classList.add("card");
// $cards.appendChild($figure2);

// // otra forma
// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
//   $ul = document.createElement("ul");

// // no es una buena practica "write"
// document.write("<h3>Estaciones del Año</h3>");
// document.body.appendChild($ul);

// estaciones.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $ul.appendChild($li);
// });

// // otra forma
// const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
//   $ul2 = document.createElement("ul");

// document.write("<h3>Continentes del Mundo</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";
// continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// // otra forma (ESTA ES LA MEJOR FORMA)
// const meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre"
// ],
//   $ul3 = document.createElement("ul"),
//   $fragment = document.createDocumentFragment();

// meses.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $fragment.appendChild($li);
// });

// document.write("<h3>Meses del Año</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

/////////////////////////////////////////////    69. DOM: Templates HTML //////////////////////////////

// Entonces para cuando quiera pintar en el DOM información dimaca debo hacer lo siguiente:
// 1.Crear el template en Html
// 2.Crear el Template en js
// 3.Crear el fragme en js
// 4.Ejecutar la función y/o el proceso y llevar al template y luego al fragme para después pintarlo en el HTML.
// Es correcto? Ya que eso fue lo que entendí. Entiéndase cómo información dinámica a información que nos traemos de una API cierto?

// const $cards = document.querySelector(".cards"),
// $template = document.getElementById("template-card").content,
// $fragment = document.createDocumentFragment(),
// cardContent = [
//       {
//             title: "Tecnologia",
//             img: "https://placeimg.com/200/200/tech",
//       },
//       {
//             title: "Animales",
//             img: "https://placeimg.com/200/200/Animals",
//       },
//       {
//             title: "Aruitectura",
//             img: "https://placeimg.com/200/200/arch",
//       },
//       {
//             title: "Gente",
//             img: "https://placeimg.com/200/200/people",
//       },
//       {
//             title: "Naturaleza",
//             img: "https://placeimg.com/200/200/nature",
//       },

// ];

// cardContent.forEach(el =>{
//       $template.querySelector("img").setAttribute("src",el.img);
//       $template.querySelector("img").setAttribute("alt",el.title);
//       $template.querySelector("figcaption").textContent = el.title;

//       let $clone = document.importNode($template,true);
//       $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);

///////////////////////////////////  70. DOM: Modificando Elementos (Old Style) ////////////////////////////////////

// const $cards = document.querySelector(".cards"),
// $newCard = document.createElement("figure"),
// $cloneCards = $cards.cloneNode(true);

// $newCard.innerHTML =`
// <img src= "https://placeimg.com/200/200/any" alt= "Any">
// <figcaption>Any</figcaption>
// `;

// $newCard.classList.add("card");

// $cards.replaceChild($newCard,$cards.children[2]);
// $cards.removeChild($cards.lastElementChild);
// $cards.insertBefore($newCard,$cards.firstElementChild);
// document.body.appendChild($cloneCards);

///////////////////////////////////////////////// 71. DOM: Modificando Elementos (Cool Style)//////////////////////////////

// .insertAdjacent...
// insertAdjacentElement(position, el) ////// Hace referencia a un NODO de tipo elemento, es decir a una etiqueta de HTML
// insertAdjacentHTML(position, html)  //// Hece referencia a texto que sea en HTML
// insertAdjacentText(position, text) ///// Nodos de texto

// Psociones:

// beforebegin(hermano anterior)
// afterbegin(primer hijo)
// beforeend(hermano hijo)
// afterend(ermano siguiente)

// const $cards = document.querySelector(".cards"),
// $newCard = document.createElement("figure"),

// let $contentCard =`
// <img src= "https://placeimg.com/200/200/any" alt= "Any">
// <figcaption></figcaption>
// `;
// $newCard.classList.add("card");

// $newCard.insertAdjacentHTML("beforebegin", $contentCard);
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
// $cards.insertAdjacentElement("beforebegin", $newCard);

// $cards.insertAdjacentElement("afterbegin", $newCard);
// $cards.insertAdjacentElement("beforeend", $newCard);
// $cards.insertAdjacentElement("afterend", $newCard);

// $cards.prepend($newCard);
// $cards.before($newCard);
// $cards.append($newCard);
// $cards.after($newCard);

///////////////////////////////////////// : 72. DOM: Manejadores de Eventos/////////////////////////////////////////////

// function holaMundo (){
//       alert("Hola mundo");
//       console.log(Event);
// };

// const $eventoSemantico = document.getElementById("evento-semantico");
// $eventoMultiple = document.getElementById("evento-multiple");

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e){
//       alert("Hola Mundo Manejador de eventos Semantico");
// console.log(e);
// console.log(event);
// };

// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e)=>{
//       alert("Hola Mundo Manejador de eventos Multiples");
//       console.log(e);
//       console.log(e.type);
//       console.log(e.target);
//       console.log(Event);
// });

////////////////////////// 73. DOM: Eventos con Parámetros y Remover Eventos //////////////////////////////////

// CUALQUIER FUNCION QUE SE EJECUTE EN UN EVENTO SOLO PUEDE RECIBIR COMO PARAMETRO YA SEA COMO PARAMERO INTENCIONAL POR EL PROGRMAMADOR EL EVENTO EN SI O LA PLABR RESERVADA EVENT /////

// function holaMundo (){
//       alert("Hola mundo");
//       console.log(Event);
// };

// function saludar (nombre = "Desconocid@"){
//       alert(`Hola ${nombre}`);
//       console.log(event);
// }

// const $eventoSemantico = document.getElementById("evento-semantico");
// $eventoMultiple = document.getElementById("evento-multiple");
// $eventoRemover = document.getElementById("evento-remover");

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e){
//       alert("Hola Mundo Manejador de eventos Semantico");
// console.log(e);
// console.log(Event);
// };

// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", (e)=>{
//       alert("Hola Mundo Manejador de eventos Multiples");
//       console.log(e);
//       console.log(e.type);
//       console.log(e.target);
//       console.log(Event);
// });

// $eventoMultiple.addEventListener("click", ()=> {
//       saludar();
//       saludar("Mario");
// });

// const removerDobleClick = (e) =>{
//       alert(`Removiendo el evento tipo ${e.type}`);
//       console.log(e);
//       $eventoRemover.removeEventListener("dbclick", removerDobleClick);
//       $eventoRemover.disabled = true;

// };

// $eventoRemover.addEventListener("dbclick", removerDobleClick);

//////////////////////////////////  74. DOM: Flujo de Eventos (Burbuja y Captura) /////////////////////////////

// const $divsEventos = document.querySelectorAll(".eventos-flujo div");

// function flujoEventos (e) {
//        console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
// }

// console.log($divsEventos);

// $divsEventos.forEach(div =>{
//       /// fase de burbuja
//       div.addEventListener("click", flujoEventos);
//       ///div.addEventListener("click", flujoEventos, false);

//       /// fase de captura
//       // div.addEventListener("click", flujoEventos, true);

//       /// pasar un objeto

// //       div.addEventListener("click", flujoEventos,{
// //             capture: false,
// //             once: true,
// //       });
// });

////////////////////////////////////// 75. DOM: stopPropagation & preventDefault //////////////////////////////////

// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
// $linkEventos = document.querySelector(".eventos-flujo a");

// function flujoEventos (e) {
//        console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
//        e.stopPropagation();

// }

// console.log($divsEventos);

// $divsEventos.forEach(div =>{

//       div.addEventListener("click", flujoEventos);

// });

// $linkEventos.addEventListener("click",(e)=> {
//       alert("Hola soy tu amigo y docente digital... Jonatan Mircha");
//       e.preventDefault();
//       e.stopPropagation();
// });

////////////////////////////////////////   76. DOM: Delegación de Eventos ////////////////////////////////////

// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this}, el click lo origino ${e.target.className}`
//   );

// }

// document.addEventListener("click", (e) => {
//   console.log("Click en", e.target);

//   if (e.target.matches(".eventos-flujo div")){
//       flujoEventos(e);
//   }

//     if (e.target.matches(".eventos-flujo a")) {
//       alert("Hola soy tu amigo y docente digital... Jonatan Mircha");
//       e.preventDefault();
//     }
// });

////////////////////////////////////////77. BOM: Propiedades y Eventos////////////////////////////////

// window.addEventListener("resize", (e) => {
  
//   console.log("************Evento Resize****************");
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
//   console.log(window.outerWidth);
//   console.log(window.outerHeight);
//   console.log(e);
// });

// window.addEventListener("scroll", (e) => {
  
//   console.log("************Scroll Event****************");
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });

// window.addEventListener("load", (e) => {
  
//   console.log("************Evento Load****************");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });

// // $(window).load(funcion);
// // $(document).ready(funcion);
// // $(document).on("ready",funcion);

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("************Evento DOMContentLoaded ****************");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });

////////////////////////////////////  78. BOM: Métodos ///////////////////////////////////////


// window.alert("Alerta");
//window.confirm("Confirmacion");
//window.prompt("Aviso");

// const $btnAbrir = document.getElementById("abrir-ventana"),
// $btnCerrar = document.getElementById("cerrar-ventana"),
// $btnImprimir = document.getElementById("imprimir-ventana");

// let ventana;

// $btnAbrir.addEventListener("click",(e) =>{
//       ventana = window.open("https://jonmircha.com");
// });

// $btnCerrar.addEventListener("click",(e)=>{
//       //window.close();
//       ventana.close();
// });
// $btnImprimir.addEventListener("click",(e)=>{
//       window.print();
// });

//////////////////////////////////// 79. BOM: Objetos: URL, Historial y Navegador /////////////////////////////////

// console.log("***********************Objeto URL***************************");
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.search);
// console.log(location.pathname);


//console.log("***************Objeto historial (history)********************")

// console.log(history);
// console.log(history.length);
// console.log(history);
// console.log(history.length);
// history.forward(1);
// history.go(3);
// history.back(2);

// console.log("********************Objeto Navegador (navigator)****************");
// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);

////////////////////////////////////////  80. DOM: Ejercicios Prácticos | Presentación //////////////////////////////////












