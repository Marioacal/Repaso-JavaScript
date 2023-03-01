import saludar, {Saludar, PI, usuario} from "./constantes.js";
import {Aritmetica as calculos} from "./Aritmetica.js";


console.log("archivos modulos.js");

console.log(PI, usuario);

//console.log(Aritmetica.sumar(3, 4));

console.log(calculos.restar(3, 4));

saludar();

let saludo = new Saludar();
saludo;



