// 1. PRIMER JAVASCRIPT camelCase
//var, let, const
var a = 20;
var b = 40;

var c = a + b

// var VS let

let z = 5

function pruebaLet(){
    
    let z = z++
}

z = 6

console.log(z)



// 2. Comentarios


/*
var a = 20;
var b = 40;

var c = a + b*/

// 3. TIPOS DE DATOS (7tipos)
//typeof(variable)

var a = 15;     //number
var d = 12.6;   //number
var e = true;   //boolean
var f = "Variable Cadena";  //cadena
var f1 = 'Variable Cadena';
var g = null                // Es una valor asignado que de "no valor"
var h       ; //undefined, es una variables que no se le ha asignado ningun valor.
const myFirstSymbol = Symbol() //symbol
//Object  Un valor en memoria al que podemos acceder mediante un indentificador



// 3.1 formas de Salida JS

console.log("variable d : " +  d)
document.write("HOLA")
// window.alert(c)
// document.body.innerHTML = "OTRO OLA"

// 4. OPERADORES ARITMETICOS
// 5. OPERADORES DE COMPARACION
// 6. OPERADORES LOGICOS BOOLEANOS
// 7. CONDICIONALES Y BUCLES

    // IF
    // SWICH
    // BUCLE FOR
    document.write("<br />")


    for( let i = 0; i <= 10; i++){
        document.write(i + "<br />");
    }   
    // BUCLE WHILE
    // BUCLE DO WHILE
    // BREAK Y CONTINUE

// 8. FUNCIONES

let contadorImpresiones =0;

function myFunction(){
    contadorImpresiones++;
    alert("Alert Box!" + contadorImpresiones)
}
// myFunction()
// myFunction();
// myFunction()
// myFunction();

// 8.1 Funciones con varios parametros
function myFunctionSuma(a , b){
    let c = a + b;
    console.log(c)
}
// 8.2 Declaracion return

function myFunctionMult( a, b){
    return a * b

}

// 9. ALERT PROMPT CONFIRM
function punto9(){
    alert("hola Como estas?")

    var entrada = prompt("Ingrese su nombre")
    alert("HOLA " + entrada)
    
    var confirmacion = confirm("Por favor confirme, si o no?")
    
    alert("la confirmacion es " + confirmacion)
}

// punto9()


// 10. EJEMPLO DE INTERACCION CON HTML


// 11.	HTML TREE GENERATOR
// https://yoksel.github.io/html-tree/en/


// 12. OBJETOS EN JAVASCRIPT JSON(Java Script Object Notation)

// "sintaxis literal de objeto"
var personaEstudiante = {
    nombre : "Alejandro", edad : 22,
    colorFavorito : "verde", altura : 156
}

// 13. PROPIEDADES DE LOS OBJETOS

console.log(personaEstudiante.altura)

// Propiedad .lenght en los String.

//14. Metodos de objetos.
//objectName.methodName()

// document.write("Esto es algun texto")

// 15. CONSTRUCTOR DE OBJETOS

function persona(nombre, edad, colorFav){
    this.nombre= nombre;
    this.edad = edad;
    this.colorFav =colorFav;
}
var p1 = new persona("David", 25, 180)


//16. METODOS

// Metodos son funciones que se guardan como propiedades de un objeto
function personaTrabajador(nombre, edad, colorFav){
    this.nombre= nombre;
    this.edad = edad;
    this.colorFav =colorFav;
    this.cambiarNombre = function (primerNombre){
        this.nombre = primerNombre
    }
}

var p2 = new personaTrabajador("Luisa", 23, "Azul");

// 17. ARRAYS
//Los arreglos registran multiples valores en una sola variable

var cursos = new Array("Python", "Java", "HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT")

// 18. DOM

//SELECCIONADO DE ELEMENTOS
    document.getElementById("id");
    document.getElementsByClassName("nombreClase");
    document.getElementsByTagName("etiqueta");
    document.getElementsByName("atributoName");
    document.querySelector("#title");