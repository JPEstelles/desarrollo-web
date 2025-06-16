/*
Listado de ejercicios:
1. Variables y Operadores
a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor
de la suma de ambos números en una 3er variable.*/
let num1 = 50;
let num2 = 19;
let suma = num1 + num2;
console.log(suma);

/*b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una
3er variable.*/
let str1 = "Hola, ";
let str2 = "mundo!";
let str_final = str1 + str2;
console.log(str_final);

/*c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de
letras del string) guardando el resultado de la suma en una 3er variable (utilizar
length).
*/
let str3 = "Javascript";
let str4 = "programacion";
let suma_length = str3.length + str4.length;
console.log(suma);

/*2. Strings
a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).*/

let str5 = "programacion";
let str_mayus = str5.toUpperCase();
console.log(str_mayus);

/*
b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).*/
let str6 = "programacion";
let str_substring = str6.substring(0, 5); // Substring te devuelve los caracteres entre los parametros indicados
console.log(str_substring);

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring).*/
let str7 = "programacion";
let str_substring2 = str7.substring(str7.length - 3); // Le indique la posicion de inicio, si no  indico el final, toma hasta el final del string
console.log(str_substring2);

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).*/
let str8 = "programacion";
let primera_letra = str8.substring(0, 1).toUpperCase(); // Obtengo la primera letra y la pongo en mayuscula
let resto_letras = str8.substring(1).toLowerCase(); // Obtengo el resto de las letras y las pongo en minuscula
let str_final2 = primera_letra + resto_letras; // Concateno 

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).*/
let str9 = "programacion web";
let posicion_espacio = str9.indexOf(" "); // indexOf devuelve la posicion del parametro
console.log(posicion_espacio);

/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +).*/
let str10 = "programacion estructurada";
let posicion_espacio2 = str10.indexOf(" ");
//la posicion del espacio es 12, entonces en el substring voy a tomar desde el 0 hasta el 12 sin incluir el espacio 
let primera_palabra = str10.substring(0, posicion_espacio2).substring(0,1).toUpperCase() + str10.substring(1, posicion_espacio2).toLowerCase(); 
let segunda_palabra = str10.substring(posicion_espacio2 + 1).substring(0, 1).toUpperCase() + str10.substring(posicion_espacio2 + 2).toLowerCase();
let str_final3 = primera_palabra + " " + segunda_palabra;
console.log(str_final3);

/*3. Arrays
a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).*/
let meses_array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses_array[4], meses_array[10]); 

/*b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
meses_array.sort();
console.log(meses_array);

/*c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
meses_array.unshift("Mes Magico"); // Agrega un elemento al principio del array
meses_array.push("Mes Osvlado"); 

/*d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
meses_array.shift(); // Quita el primer elemento del array
meses_array.pop(); // Quita el ultimo elemento del array

/*e. Invertir el orden del array (utilizar reverse).*/
meses_array.reverse(); 
console.log(meses_array);

/*f. Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join).*/
meses_array = meses_array.join(" - ");
console.log(meses_array);

/*g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice).*/
let meses_arra2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let meses_copia = meses_array2.slice(4, 11); // slice toma los elementos desde el indice 4 hasta el 11 sin incluirlo
console.log(meses_copia);

/*4. If Else
a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el
valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than
0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/
let numero_aleatorio = Math.random()
if (numero_aleatorio >= 0.5) {
    alert("Greater than 0,5");
}
else {
    alert("Lower than 0,5");
}   
/*b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y
muestre los siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años.*/
let age = 25; // Cambia este valor para probar diferentes edades
if (age < 2) {
    alert("Bebe");
}
else if (age >= 2 && age <= 12) {
    alert("Niño");
}
else if (age >= 13 && age <= 19) {
    alert("Adolescente");
}
else if (age >= 20 && age <= 30) {
    alert("Joven");
}
else if (age >= 31 && age <= 60) {
    alert("Adulto");
}
else if (age >= 61 && age <= 75) {
    alert("Adulto mayor");
}
else {
    alert("Anciano");
}

/*5. For
a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un
bucle for de JavaScript para mostrar una alerta utilizando cada una de las
palabras.*/
let array_palabras =["Dessarrollo", "Arquitectura", "web", "Primer", "Cuatrimestre"];
for (let i = 0; i < array_palabras.length; i++) {
    alert(array_palabras[i]);
}
/*b. Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada.*/
for (let i = 0; i < array_palabras.length; i++) {
    let primera_letra = array_palabras[i].substring(0, 1).toUpperCase(); 
    let resto_letras = array_palabras[i].substring(1).toLowerCase(); 
    let palabra_modificada = primera_letra + resto_letras; 
    alert(palabra_modificada);
}
/*c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de
la variable sentence. Al final mostrar una única alerta con la cadena completa.*/
let sentence = "";
for (let i = 0; i < array_palabras.length; i++) {
    sentence += array_palabras[i] + " "; // Agrego un espacio entre cada palabra
}
alert(sentence);
/*d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con
el número de la repetición, es decir que al final de la ejecución del bucle for
debería haber 10 elementos dentro del array, desde el número 0 hasta al número
9. Mostrar por la consola del navegador el array final (utilizar console.log)*/
let array_numeros = [];
for (let i = 0; i < 10; i++) {
    array_numeros.push(i); 
}