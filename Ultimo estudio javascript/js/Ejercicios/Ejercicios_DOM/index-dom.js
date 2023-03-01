import scrollTopButton from "./botton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import hamburgerMenu from "./menu-hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortCuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objetos_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./Filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulaciones.js";
import speechReader from "./narrador.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("StarCraft.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "January 25, 2022 10:35:19",
    "Feliz Cumpleaños Amigo y Docente Digital 🤓"
  );
  
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/fqQqTfi3w3cVsTEZA" target="_blank rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6623502174816!2d-76.54755868568938!3d3.432102597501881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a682d02d9a15%3A0xa7e247cacdfeeaa1!2sMr.%20Empanadas!5e0!3m2!1ses!2sco!4v1663433344354!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=kgx4WGK0oNU" target="_blank rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/kgx4WGK0oNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );

  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
  
  

});

d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage");
  
  
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();


