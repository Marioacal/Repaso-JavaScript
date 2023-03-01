// const obj = {
//     unArray: new Array(10000)
// }


// function badPerformance(){
//     console.time("bad");
//     for(let i=0; i<obj.unArray.length; i++) {
//         obj.unArray[i] = 'Hola';
//     }
//     console.timeEnd('bad');
// }
// /////////////////////////////////////////////////////////////////////////////
// function goodPerforance() {
//     console.time('good');
//     let unArray = obj.unArray;

//     for(let i=0, longitud = unArray.length; i<longitud; i++){
//         unArray[i] = 'Hola';
//     }
//     console.timeEnd('good');
// }

// badPerformance();
// goodPerforance();

// const miArray = [1,2,3,4];

// miArray.forEach((item, index) => {
//     console.log(`El valor de la posicion ${index} es: ${item}`)
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Sin destructuracion

/*const numeros = [1,2,3];
let uno= numeros[0],
    dos= numeros[1],
    tres= numeros[2];

console.log(uno,dos,tres);

//con Destructuracion

const [one,two,three]= numeros;
console.log(one,teo,three);
*/

////////////////////////////////////REST ///////////////////////////////////////////////////////////////////////////

/*function sumar (a,b,...C){
    let resultado = a+b;

    c.forEach(function (n) {
        resultado += n,
    });
    return resultado;
}

console.log(sumar(1,2))

*/

/////////////////////////////////////////////////// SPREAD: forma de expandir los valores en un objeto o arreglo (array), sirv para agregar elemetos ////////////////////////////////////////////////////////////////////////


/*
const arr1 = [1,2,3,4,5],
      arr2 = [6,7,8,9,0];

console.log(arr1,arr2);

const arr3 = [...arr1,...arr2];
console.log(arr3)
*/

///////////////////////////////// ARROW FUNCTION////////////////////////////////////////////////////
/*
funcion normal

const sumar = function (a,b){
    return a+b;
}
*/

//////////////////////////////////// arrow funcion

/*
const  sumar = (a,b) => a+b;

console.log (sumar(9,9));

const functionDeVariasLineas = () =>{
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");

}

functionDeVariasLineas();

const numeros = [1,2,3,4,5];

numeros.forEach((el,index)=>{
    console.log(`${el} esta en la posicion ${index}`)
});
*/

/////////////////////////// Prototipos //////////////////////////////// POO //////////////////

/*
Clases - Modelo a seguir
Objetos - Es una instancia de la clase
Atributos - Es una caracteristica o propiedad del objeto (son variables dentro de un objeto)
Metodos - Son las acciones que un objeto puede realizar (son funciones)
*/
/*
// Funcion constructora

function Animal (nombre, genero){

    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Metodos
    this.sonar= function(){
        console,log("Hago sondos porque estoy vivo")
    }

    this.saludar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
        
    }
}

const snoopy = new Animal("Snoopy","Macho"),
lolaBunny = new Animal ("Lola Bunny", "Hembra");

console.log(snoopy),
console.log(lolaBunny);


snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();
*/
/////////////////////////////////////////////////////


// Funcion constructora-- donde asignamos los metodos al prototipo, no a la funcion como tal

/*function Animal (nombre, genero){

    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

    //Metodos agregados al prototipo de la funcion constructora


Animal.prototype.sonar = function(){
    console.log("Hago sondos porque estoy vivo");
    }

Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  
}

const snoopy = new Animal("Snoopy","Macho"),
lolaBunny = new Animal ("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);


snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();

*/

////////////////////// CLASES /////////////////

/*
class Animal {
      
    //el constructor es un metodo especial que se ejecuta en el momento de instanciar la clase    

  constructor(nombre,genero){
    this.nombre = nombre;
    this.genero = genero;
    }

    sonar(){
        console.log("Hago sondos porque estoy vivo");
        }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
        }
    }

    class Perro extends Animal{
        constructor(nombre,genero,tamanio){


            super(nombre,genero);
            this.tamanio = tamanio;
            this.raza = null;
        }

        sonar(){
            console.log("Soy un perro y mi sonido es un latido");
        }

        ladrar(){
            console.log("guua,guua");
        }



        // los SETERS y GETTERS son metodos metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase//


        get getRaza(){
            return this.raza;
        }

        set setRaza(raza){
            this.raza = raza;
        }
    }

    const mini = new Animal("Mini","Hembra"),
        Scoby= new Animal("Scoby","Macho","Gigante");

        console.log(mini);
        mini.saludar();
        mini.somar();
        console.log(Scoby);
        Scoby.saludar();
        Scoby.sonar();
        console.log(Scoby.getRaza);
        Scoby.setRaza = "Gran Danes";

        console.log(Scoby.setRaza);

        */



///////////////////////////////////////////////////////////////////////  OBJETO CONSOLE ////////////////////////////////////////////

/*
Cortocircuito OR (||) - cuando el valor de la izquierda en la expresion 
siempre pueda validar a false, es el valor que se cargara por defecto

Cortocircuito ADN (&&) - cuando el valor de la izquierda en la expresión 
siempre pueda validar a false, es el valor que se cargara por defecto.
*/
/*
let alerta = alert("Hola esto es una alerta"),
        confirmacion = confirm("hola esto es una confirmacion"),
        aviso = prompt ("hola esto es un aviso y le permite al usuario ingresar un valor");


        console.log(alerta);
        console.log(confirmacion);
        console.log(aviso);
*/

/////////////////////////////////////////// ALERT, CONFIRM, PROMPT ///////////////////////////////////////////////////

/*
window.alert("Hola esto es una alert");
window.confirm("Hola esto es una confirmacion");
window.prompt("Hola esto es un prompt y le permite al ususario ingresar un valor")


let alerta = alert("Hola esto es una alert");
confirmacion = confirm("Hola esto es una confirmacion");
aviso = prompt("Hola esto es un prompt y le permite al ususario ingresar un valor")


console.log(alerta);
console.log(confirmacion);
console.log(aviso);

*/


/////////////////////////// EXPRESIONES REGULARES: Son una secuencia de caracteres que forma un patron //
//////////////////////////////////////////////////de bsquea, principalmente utilizada para la busqueda  //
//////////////////////////////////////////////////de patrones de cadenas de caracteres ///////////////////

/*
let cadena = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe praesentium optio,\
vero sint voluptatem libero sed facilis eveniet laboriosam dignissimos corporis repudiandae quis \
reiciendis et, quas incidunt minus suscipit consequuntur!";


let expReg = new RegExp("lorem","ig");

let expReg2 = /lorem/ig;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

*/

////////////////////////// FUNCION ANONIMA AUTO-EJECUTABLE //////////////////////

//ejemplo//

(function(){
   console.log("Mi primer funcion anonima auto ejecutada");
})();

(function(d,w,c){
    console.log("Mi segunda funcion anonima auto ejecutada");
 })(document,windo,console);















        

       





























    

