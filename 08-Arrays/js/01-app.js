const numeros = [10, 20, 30,40,50];

const meses = new Array("Enero", "Febrero", "Marzo","Abril","Mayo","Junio");

const deTodo = ["hola", 10, true, "si", null, { nombre: "juan", trabajo: "programador"},[1,2,3]];

console.log("Tamaño de un arreglo")
console.log(meses.length);

console.log(numeros);
console.table(numeros);  // muestra posicion y valos
console.log(meses[0]);  // los arreglos empiezan en el indice 0, si se solicita el valor de un indice no existente regresa undefined
console.log(deTodo);
console.log(deTodo[6][1]);
console.log(deTodo[6, 2]);  //esta forma no funciona para traer un valos de un arreglo de arreglos

meses[0] = "Nuevo Mes";
meses[6] = "julio";

// para agregar un elemento al final del arreglo
meses.push("Agosto");

meses.unshift("Enero");  //este agrega un dato al inicio del arreglo.

meses[12] = "Diciembre";  //Eb este casi no agrega los elementos faltantes, lo cual es falso, si agrega elementos en undefined


for (let mes = 0; mes < meses.length; mes++) {
    console.log(meses[mes]);
}

const enteros = [10, 20, 30, 40, 50];

//Para obtener el primer y el segundo elemento y dejar los demas en otro arreglo se hace de la siguiente manera

const [primerentero, segundoentero, ...resto] = enteros;

console.log("destructurando en elementos y arregles un mismo arreglo");
console.table(resto);
console.log(primerentero);
console.log(segundoentero);

const carrito = [];

const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

const producto4 = {
    nombre: "Celular2",
    precio: 100
}

const producto5 = {
    nombre: "Pantalla circular de 40 \"",
    precio: 1000
}

const producto6 = {
    nombre: "CPU con 2TB Disco Duro y 128MB RAM",
    precio: 3000
}


carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
carrito.unshift(producto5);
carrito.unshift(producto6);

console.log("Carrito");
console.table(carrito);

//Elimina el ultimo elemento de la lista;
carrito.pop();

console.log("Carrito menos el ultimo de la lista");
console.table(carrito);

//Elimina el primer elemento del arreglo.
carrito.shift();

console.table(carrito);

//Eliminar un elemento de en medio de la posicion 2 un solo elemento.
carrito.splice(2, 1);

console.log("Carrito menos el tercer elemento de la lista");
console.table(carrito);

//destructoring en array
const [primero, segundo, tercero, cuarto] = carrito;

console.log("obteniendo el tercer elemento");
console.log(tercero);
// En este caso va a marcar undefined, ya que no existe ningun elemento en este arreglo
console.log(cuarto);

// otra forma de obtenerlo
const [, , tercer] = carrito;
console.log("este es el tercer elemento sin obtener los elementos anteriores");
console.log(tercer);


let resultado;

resultado = [...carrito, producto, producto2];

resultado = [producto3, ...resultado];

console.log(resultado);

