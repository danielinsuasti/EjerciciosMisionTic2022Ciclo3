// 1. Primer JavaScript

// 2. Comentarios


// var a = 20;
// var b = 40;

// var c = a + b;

// 3. Tipos Datos

//String

var cadena = "String con doble o con single quotes";
var cadena2 = 'String con doble o con single quotes';
//Number

let numero = 85;
let numeroDecimal = 85.6;

//Boolean

var pregunta = true;

//null

var datoNull = null;
//Es un valor asignado que tiene el valor de "no valor"

//undefined

var casaSinValor

//Symbol

Symbol() === Symbol() //false

//objetos
//Un valor en memoria al que podemos accedor por un identificador

var a = 20;
var b = 40;

var c = a + b;


//let vs var
let x = 5

function prueba(){
   let x =4*5
   console.log(x)
}

console.log(x)

//Salida de información

console.log("variable b :" + b);

document.write("Cadena");

window.alert("Muestro valor de una variable x " + 5  );

document.body.innerHTML="otro Hola"


// 4. OPERADORES ARITMENTICOS

// 5. OPERADORES DE COMPARACION

// 6. OPERADORES LOGICOS BOOLENAS


// 7. CONDICIONALES Y BUCLES

    //if

    //switch

    //Bucle for
    for(let i = 0; i <= 10 ; i++){
        document.write(i + "<br />");
        console.log(i);
    }

    //Bucle while
    //Bucle do while
    //Break y continue

// 8. FUNCIONES


let contador_impresiones = 1
function myFunction(){
    alert("Alert Box" + contador_impresiones );
    contador_impresiones++;
}

myFunction();
myFunction();
myFunction();

// 8.1 funciones con varios Parametros
var x = 5
var y = 10
var z = 30
var w = 100
function myFunction(a, b, c){
    console.log(a)
    console.log(b)
    console.log(c)
    
}

myFunction(x, y)

// 8.2 declaracion Return


function myFunctionSum(a, b){
    return "El resultado de la suma es " + (a+b);
}

// 9. ALERT PROMPT CONFIRM

alert("Hola como estas")

var entrada = prompt("Ingrese el nombre");
alert("Hola " + entrada)


var confirmacion = confirm("Por favor confirme");
alert("La confirmacion es " + confirmacion);


// LINKS PARA PRACTICAR JAVASCRIPT

// * https://hackernoon.com/javascript-practical-coding-challenges-for-beginners-4bq3ugr


// * https://www.w3schools.com/js/

// * https://javascript.info/



// 11. HTML TREE GENERATOR

// https://yoksel.github.io/html-tree/en/

// 12. Objetos en JAVASCRIPT 

// sintaxis literal de objeto

//Atributos
var personaEstudiante = {
    nombre : "Alejandro", edad : 22,
    colorFavorito : "verde", altura : 156
}

personaEstudiante.nombre
personaEstudiante['nombre']

//Metodos

document.write("Esto es algun texto");


//definir Metodos con this
function persona(nombre, edad, colorFav){
    this.nombre = nombre;
    this.edad = edad;
    this.colorFav = colorFav;
    this.cambiarNombre = function(name){
        this.nombre = name
    }
}

