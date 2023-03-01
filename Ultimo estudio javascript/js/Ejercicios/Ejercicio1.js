/// EJERCICIO 1
////////1) Programa una función que cuente el número de caracteres de una cadena de
////////texto, pe. miFuncion("Hola Mundo") devolverá 10.

// function miFuncion(){
// console.log("Hola mundo".length);
// };

// miFuncion();

// function contarCaracteres(cadena="") {
//     if (cadena) {
//         console.warn("No ingresaste ninguna cadena");
//     }else{
//         console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
//     }
// }

// contarCaracteres();
// contarCaracteres("Hola mundo");
/*

const contarCaracteres = (cadena="")=> 
(!cadena)? 
    console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

    contarCaracteres();
    contarCaracteres("Hola mundo");

*/

// EJERCICIO 2
////////////2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
////////////pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

/*
const recortarTexto = (cadena = "", longitud = undefined)=>
(!cadena)?
    console.warn("No ingresaste el texto")
    : console.info(cadena.slice(0, longitud));

recortarTexto();
recortarTexto("Hola mundo",4);
*/

/*
                EJERCICIO 3
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/
/*
const cadenaAAreglo = (cadena="",separador= undefined)=>
(!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :(separador===undefined)
    ? console.warn("No ingresaste el separador")
    :console.info(cadena.split(separador));

cadenaAAreglo("hola que tal",' ');

*/
/*
4) Programa una función que repita un texto X veces, pe. miFuncion
        ('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

// const repitaCaracteres = (texto="", repetir= undefined) =>{
//     if(!texto){
//         return console.warn("No ingresaste el texto");
//     }else{

//     }

// }
/*
const repetirCaracteres = (texto="", repetir= undefined) =>{
    if(!texto) return console.warn("No ingresaste el texto");

    if(repetir===undefined) return console.warn("No ingresaste el numero de repeticiones");
    
    if(repetir===0) return console.error("No puedes reptir 0 veces el texto, es un erro de logica");

    if(Math.sign(repetir)===-1) return console.error("El numero de veces no puede ser negativo");

    for (let i=1; i<=repetir; i++) console.info(`${texto}, ${i}`);

}  

repetirCaracteres("hola mundo", 3);
*/

/*
 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")
  devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
 pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

// ejercicio 5
/*
 const invertirPalabras = (cadena="") =>
  (!cadena) 
    ? console.warn("No ingrsaste ninguna palabra")
    : console.info(cadena.split("").reverse().join(""));

    */
/*
invertirPalabras("hola mundo");
invertirPalabras("");
*/

// EJERCICIO 6

/*
const repitePalabra = (cadena="", texto="") =>{
    if(!cadena) return console.warn("No ingresaste el texto");

    if(!texto) return console.warn("No ingresaste la palabra a analizar");
    
    let i = 0,
        contador = 0;

    while(i!== -1){
        i=cadena.indexOf(texto,i);
        if(i!==-1){
            i++;
            contador++;
    }
}

return console.info(`La variable ${texto} se repite ${contador} veces`)

}
*/

/*
repitePalabra();
repitePalabra("","mundo");
repitePalabra("hola mundo, adios mundo");
repitePalabra("hola mundo, y el mundo adios mundo, sin mundo", "mundo");
*/

// ejercicio 7

// const palindromo = (palabra = "") =>{
//     if(!palabra) return console.warn("No ingresaste un texto");

//     palabra = palabra.toLowerCase();

//     let alReves = palabra.split("").reverse().join("");

//     return(palabra===alReves)
//     ? console.info(`Si es palindromo, palabra original ${palabra}, palabra al reves ${alReves} `)
//     : console.info(`No es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`);

// }

// palindromo();
// palindromo("hola Mundo");
// palindromo("salas");

// EJERCICIO 8
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
//  pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// const eliminarCadena = (texto = "", patron = "") =>{
//     (!texto)
//         ?console.warn("No ingresaste una texto")
//         :(!patron)
//         ? console.warn("No ingresaste un patron")
//         : console.info(texto.replace(new RegExp(patron, "ig"), ""));
// }

//

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

// const aleatorio = () => console.info(Math.round(Math.random()*100)+500);

// aleatorio();
// aleatorio(5);
// aleatorio("a");

// aleatorio(0.25);

// 10) Programa una función que reciba un número y evalúe si es capicúa o no
//(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

// const capicua =(numero=0)=>{
//     if(!numero)return console.warn("No ingresaste un numero");

//     if(typeof numero!== "number") return console.error(`El valor ${numero} ingresado NO es numero`);

//     numero = numero.toString();

//     let alReves = numero.split("").reverse().join("");
//     return (numero===alReves)
//     ? console.info(`Si es capicua, numero original ${numero}, numero al reves ${alReves}`)
//     :console.info(`No es capicua, numero ingresado ${numero}`);

// }

// capicua();
// capicua(19);
// capicua(2002);
// capicua("juan");
// capicua({});
// capicua(18.99);
// capicua(212.212);

// 11) Programa una función que calcule el factorial de un número
//(El factorial de un entero positivo n, se define como el producto de todos los
//números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// const factorial = (numero = undefined) =>{

//     if(numero===undefined) return console.warn("No ingresaste un numero");

//     if(typeof numero !== "number") return console.error(`El valor igresado ${numero} No es un numero`);

//     if(numero === 0) return console.error("Error, el numero NO puede ser cero");

//     if(Math.sign(numero)===-1) return console.error("Error, el numero No puede ser negativo");

//     let factorial = 1;

//     for (let i = numero; i >1 ; i--){
//         factorial *= i;
//     }

//     return console.info(`El factorial de ${numero} es ${factorial} `);
// }

// factorial();

// factorial("hola mundo");
// factorial({});
// factorial(-5);
// factorial(6);
// factorial(0);

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
// o no, pe. miFuncion(7) devolverá true.

// let numeroPrimo = (numero = undefined) =>{
//     if(numero === 0) return console.warn("0 NO es un valor permitido");

//     if(numero === 1) return console.warn("1 NO es un valor permitido");

//     if(numero === undefined) return console.warn("No ingresaste ningun dato");

//     if(typeof numero !== "number") return console.error("El dato ingreado no es un numero");

//     if(Math.sign(numero)=== -1) return console.info("Los numeros negativos no son primos");

//     let divisible = false;

//     for(let i=2; i< numero ; i++){
//         if(numero % i === 0) {
//             divisible = true;
//             break;
//         }

//     }
//     return (divisible)
// ?console.info(`El numero ${numero}, NO es primo`)
// :console.info(`El numero ${numero}, SI es primo`);

// }
// numeroPrimo();
// numeroPrimo("320");
// numeroPrimo(true);
// numeroPrimo(0);
// numeroPrimo(1);
// numeroPrimo(-13);
// numeroPrimo(13);
// numeroPrimo(200);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

let parImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste ningun dato");

  if (typeof numero !== "number")
    return console.warn("El dato ingresado no es valido");

  if (numero % 2 === 0) return console.info(`El numero ${numero} es PAR`);
  if (numero % 2 !== 0) return console.info(`El numero ${numero} es IMPAR`);
};

// parImpar();
// parImpar("4");
// parImpar(8.8);
// parImpar(23);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
/////////////////////////////////// QUEDA PENDIENTE TERMINAR NO ME GUSA LA SOLUCION PROPUESTA///////////////

// let convertirTemperatura = (temperatura= undefined, undidad= undefined) =>{
//     if(temperatura === undefined) return console.warn("No ingresaste un temperatura");
//     if(temperatura === undefined) return console.warn("No ingresaste un unidad");
//     if(typeof temperatura!== "number") return console.warn(prompt("Igresa un valor de temeperatura: " + temperatura));
//     if(typeof unidad!== "number") return console.warn(prompt("Igresa un valor de unidad: " + grados));

// }

//(0 °C × 9/5) + 32 = 32 °F
//(32 °F − 32) × 5/9 = 0 °C

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

// const convertirBnarioDecimal = (numero=undefined, base=undefined) =>{
//     if(numero===undefined) return console.warn("No ingresaste numero a convertir");

//     if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un numero`);

//     if(base===undefined) return console.warn("No ingresaste la base a convertir");

//     if(typeof base !== "number") return console.error(`El valor ${base} ingresado, NO es un numero`);

//     if (base===2){
//         return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
//     } else if (base=== 10){
//         return console.info(`${numero} base ${base} = ${numero.toString(base)} base 2`);
//     }
// }

// convertirBnarioDecimal();
// convertirBnarioDecimal("2");
// convertirBnarioDecimal(100);
// convertirBnarioDecimal(100,"2");
// convertirBnarioDecimal(100,2);
// convertirBnarioDecimal(4,10);

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20)
//devolverá 800.

const asignarDescuento = (cantidad = undefined, descuento = 0) => {
  if (cantidad === undefined)
    return console.error("NO ingresaste ninguna cantidad");
  if (typeof cantidad !== "number")
    return console.error("El valor ingresado no es un numero");
  if (Math.sign(cantidad) === -1)
    return console.error(`La ${cantidad} es un valor NEGATIVO`);
  if (cantidad === 0)
    return console.error("La cantidad ingresada NO pede ser cero");

  if (typeof descuento !== "number")
    return console.error(`La ${descuento} ingresado no es un numero`);

  if (Math.sign(descuento) === -1)
    return console.error(`El ${descuento} NO puede ser NEGATIVO`);

  return console.info(
    `${cantidad} - ${descuento}% = ${cantidad - (cantidad * descuento) / 100}`
  );
};

// asignarDescuento();
// asignarDescuento("2");
// asignarDescuento(-1000);
// asignarDescuento(0);

// asignarDescuento(50000,"2");
// asignarDescuento(50000,-15);
// asignarDescuento(50000, 15);
// asignarDescuento(50000);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23))
// devolverá 35 años (en 2020).

// const calcularAnios = (fecha = undefined) =>{
//     if (fecha === undefined) return console.warn("No ingresaste la FECHA");
//     if (!(fecha instanceof Date)) return console.error("El dato ingresado no es una FECHA valida");

//     let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
//         aniosEnMS = 1000 *60*60*24*365
//      let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

//     return(Math.sign(aniosHumanos)===-1)
//         ? console.info(`Faltan ${Math.abs(aniosHumanos)} para el ${fecha.getFullyear()}`)
//         : (Math.sign(aniosHumanos)===1)
//             ? console.info(`Han Pasado ${aniosHumanos} años, desde ${fecha.getFullyear()}`)
//             : console.info(`Estamos en el año actual ${fecha.getFullyear()}`)

// }

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo")
// devuelva Vocales: 4, Consonantes: 5.

// const contarLetras = (cadena = "") => {
//   if (!cadena) return console.warn("No ingresaste una cadena de texto");
//   if (typeof cadena !== "string")
//     console.warn(`El valor de ${cadena}, NO es una cadena de texto`);

//   let vocales = 0,
//     consonantes = 0;

//     cadena = cadena.toLocaleLowerCase();

//   for (let letra of cadena) {
//     if (/[aeiouáéíóúü]/.test(letra)) vocales++;

//     if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
//   }

//   return console.info({
//     vocales,
//     consonantes,
//   })
// }

// contarLetras();
// contarLetras(3);
// contarLetras("Hola Mundo");

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha")
//  devolverá verdadero.

// const validarNombre = (nombre = "") =>{

//   if(!nombre) return console.warn ("No ingresaste el nombre");

//   if(typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado NO es una cadena de texto`);

//   let expRg = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ\s]+$/g.test(nombre);

//   return (expReg)
//   ? console.info(`"${nombre}", es un nombre valido`)
//   : console.info(`"${nombre}", NO es un nombre valido`);
// }

// // validarNombre();
// // validarNombre(3);
// // validarNombre("mario acosta");

// // 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com")
// // devolverá verdadero.

// const validarMail = (mail = "") =>{

//   if(!mail) return console.warn ("No ingresaste el email");

//   if(typeof mail !== "string") return console.error(`El valor "${mail}" ingresado NO es una cadena de texto`);

//     let RegExp = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(mail);

//   return (expReg)
//   ? console.info(`"${mail}", es un email valido`)
//   : console.info(`"${mail}", NO es un email valido`);
// }

// validarMail();
// validarMail(3);
// validarMail(marioaa@gmail.com);
// // validarMail(marioaa25@gmail.com);
// // validarMail(marioaa25@gmail.3);
// // validarMail(3Marioaa25@gmail.com);

//fusion 19 - 20 validar un patron

// const validarPatron = (cadena="",patron = "") =>{

//   if(!cadena) return console.warn ("No ingresaste el email");

//   if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado NO es una cadena de texto`);

//   if(!patron) return console.warn ("No ingresaste el email");

//   if(typeof patron !== "string") return console.error(`El valor "${patron}" ingresado NO es una cadena de texto`);

//     let expReg =patron.test(cadena);

//   return (expReg)
//   ? console.info(`"${cadena}", es un email valido`)
//   : console.info(`"${cadena}", NO es un email valido`);
// }

// validarPatron();
// validarPatron(3);
// validarPatron();

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5])
// devolverá [1, 16, 25].

const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined) return console.error("No ingresaste ningun arreglo");

  if (!(arr instanceof Array))
    return console.error("El valor ingresado no es un array");

  if (arr.length === 0) return console.error("El array esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" No es un numero`);
  }

  const newArr = arr.map((el) => el * el);

  return console.info(
    `Arreglo original: ${arr}, n\Array elevado añ cuadrado: ${newArr}`
  );
};

// devolverCuadrados();
// devolverCuadrados(true);
// devolverCuadrados({});
// devolverCuadrados([]);
// devolverCuadrados([1,2,"3"]);
// devolverCuadrados([1, 4, 5]);

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const arrayMinMax = (arr1 = undefined) => {
  if (arr1 === undefined) return console.error("No ingresaste ningun arreglo");

  if (!(arr1 instanceof Array))
    return console.error("El valor ingresado no es un array");

  if (arr1.length === 0) return console.error("El array esta vacio");

  for (let num1 of arr1) {
    if (typeof num1 !== "number")
      return console.error(`El valor "${num1}" No es un numero`);
  }

  return console.info(
    `Arreglo original: ${arr1}\nValor mayor: ${Math.max(
      ...arr1
    )},\nValor menor: ${Math.min(...arr1)}}`
  );
};

// arrayMinMax();
// arrayMinMax(false);
// arrayMinMax([]);
// arrayMinMax([1,2,true]);
// arrayMinMax([1, 4, 5, 99, -60]);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares,
// pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separarParesImpares = (arr2 = undefined) => {
  if (arr2 === undefined) return console.error("No ingresaste ningun arreglo");

  if (!(arr2 instanceof Array))
    return console.error("El valor ingresado no es un array");

  if (arr2.length === 0) return console.error("El array esta vacio");

  for (let num2 of arr2) {
    if (typeof num2 !== "number")
      return console.error(`El valor "${num2}" No es un numero`);
  }

  return console.info({
    pares: arr2.filter((num2) => num2 % 2 === 0),
    impares: arr2.filter((num2) => num2 % 2 === 1),
  });
};

// separarParesImpares();
// separarParesImpares("hola");
// separarParesImpares([]);
// separarParesImpares([1,2,"j"]);
// separarParesImpares([1,2,3,4,5,6,7,8,9,0]);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe.
//  miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArray = (arr3 = undefined) => {
  if (arr3 === undefined) return console.error("No ingresaste ningun arreglo");

  if (!(arr3 instanceof Array))
    return console.error("El valor ingresado no es un array");

  if (arr3.length === 0) return console.error("El array esta vacio");

  for (let num3 of arr3) {
    if (typeof num3 !== "number")
      return console.warn(`El valor "${num3}" No es un numero`);
  }

  return console.info({
    Original: arr3,

    eliminandoDuplicados: [...new Set(arr3)],

    asc: arr3.map((el) => el).sort(),

    desc: arr3
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

// ordenarArray();
// ordenarArray(true);
// ordenarArray([]);
// ordenarArray([1,2,3,4,{}]);
// ordenarArray([7,5,7,8,6]);

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe.
// miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicados = (arr4 = undefined) => {
  if (arr4 === undefined) return console.error("No ingresaste ningun arreglo");

  if (!(arr4 instanceof Array))
    return console.error("El valor ingresado no es un array");

  if (arr4.length === 0) return console.error("El array esta vacio");

  if (arr4.length === 1)
    return console.error("El array debe tener 2 elementos");

  // una opcion para eliminar datos repetidos//////////////
  // return console.info({
  //   original:arr4,
  //   sinDuplicados: arr4.filter((value,index,self)=> self.indexOf(value)===index)
  // });

  return console.info({
    original: arr4,
    sinDuplicados: [...new Set(arr4)],
  });
};

// eliminarDuplicados();
// eliminarDuplicados({});
// eliminarDuplicados([]);
// eliminarDuplicados([2]);
// eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe.
// promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr5 = undefined) => {
  if (arr5 === undefined) return console.error("No ingresaste ningun arreglo");

  if (!(arr5 instanceof Array))
    return console.error("El valor ingresado no es un array");

  if (arr5.length === 0) return console.error("El array esta vacio");

  if (arr5.length === 1)
    return console.error("El array debe tener mas 2 numeros");

  for (let num5 of arr5) {
    if (typeof num5 !== "number")
      return console.warn(`El valor "${num5}" No es un numero`);
  }

  return console.info(
    arr5.reduce((total, num, index, arr5) => {
      total += num;
      if (index === arr5.length - 1) {
        return `El promedio de ${arr5.join("+")} es = ${total / arr5.length}`;
      } else {
        return total;
      }
    })
  );
};

// promedio();
// promedio({});
// promedio([]);
// promedio([2,true]);
// promedio([9,8,7,6,5,4,3,2,1,0]);

//   27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB,
// titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica
//     de cada película.

            // * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,
            // Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV,
            // Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this, (pais = pais);
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);

  }

static get listaGeneros(){
  return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,
   " Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV",
    "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
}

static generosAceptados(){
  return console.info(`Los generos acetados son: ${Pelicula.listaGeneros.join(",")}`);
}




  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" es vacio`);

    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" Ingresado no es una cadena de texto`
      );

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`
      );
    return true;
  }

  validarNumero(propiedad, valor) {
    if(!valor) return console.warn("No ingresaste el año de la pelicula");
    if (typeof valor !== "number")
      return console.error(`El valor ${valor} no es un numero`);

    return true;
  }

  validarArray = (propiedad, valor) => {
    if (!valor) return console.warn("No ingresaste ningun DATO");

    if (!(valor instanceof Array))
      return console.warn("El valor ingresado no es un array");

      if(valor.length ===0) return console.error(`${propiedad} "${valor}" NO tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(`El dato ${cadena} NO es una cadena de texto`);
    }

    return true;
  };

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
        return console.error(
          `IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros.`
        );
      }
    }
  }

  validarTitulo(titulo) {
    if (this.validarLongitudCadena("titulo", titulo))
      this.validarLongitudCadena("titulo", titulo, 100);
  }

  validarDirector(director) {
    if (this.validarLongitudCadena("director", director))
      this.validarLongitudCadena("director", director, 50);
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de Estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno)) {
        return console.error(
          ` El año de Estreno"${estreno}" no es valido, debe ser un numero de 4 digitos`
        );
      }
    }
  }

  validarPais(pais){
    this.validarArray("Pais", pais)
  }

  validarGeneros(generos){
   if ( this.validarArray("generos", generos)){
    for (let genero of generos ) {
      console.log(genero, Pelicula.listaGeneros.includes(genero));
      if(!Pelicula.listaGeneros.includes(genero)){
        console.error(`Genero(s) incorrectos "${generos.join("-")}"`);
        Pelicula.generosAceptados();
      }
    }
   }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion))
      return (calificacion < 0 || calificacion >10)
        ? console.error(`La calificacion tiene que estar entre 0 y 10`)
        : this.calificacion = calificacion.toFixed(1);
  }

  fichaTecnica(){
    console.info(`Ficha tenica:\nTitulo: "${this.titulo}"\nDirector:"${this.director}"\nAños: "${this.estreno}"\nPais: "${this.pais}"\nGeneros: "${this.generos.join(",")} "\nCalificacion: "${this.calificacion}"\nIMDB id: "${this.id}"`)
  }
    

}

// const peli = new Pelicula({
  // id: "tt0111161",
  // titulo: "Titulo de la peli",
  // director: "Director de la pelicula",
  // estreno: 2022,
  // pais: ["Mexico"],
  // generos: ["Talk-Show"],
  // calificacion: 8.5
  
// });

// peli.fichaTecnica();

const misPelis = [
  {
    id: "tt0479143",
    titulo: "RockY Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1
  },
  {
    id: "tt0758758",
    titulo: "Into the wild",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1
  },
  {
    id: "tt0468569",
    titulo: "The dark knight",
    director: "Christoper Nolan",
    estreno: 200,
    pais: ["USA", "UK"],
    generos: ["Action", "Drama", "Crime"],
    calificacion: 9.0
  }
];

misPelis.forEach(el=> new Pelicula(el).fichaTecnica());