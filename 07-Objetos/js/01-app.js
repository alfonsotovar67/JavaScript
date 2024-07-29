"use strict";

const producto = {
    nombre: "Monitor de 20",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1 Kg",
            medida: "1 metro"
        },
        fabricacion: {
            pais: "china"
        }
    }
}

const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;

console.log("INformacion");
console.log(informacion);
console.log("fabricacion");
console.log(fabricacion);
console.log("pais");
console.log(pais);

producto.imagen = "imagen.jpg";
delete producto.disponible;

const { precio, disponible, imagen } = producto;

console.log("producto");
console.log(producto);

console.log("producto.nombre");
console.log(producto.nombre);

console.log("precio");
console.log(producto['precio']);

console.log("nombre");
console.log(nombre);
console.log("precio");
console.log(precio);
console.log("imagen");
console.log(imagen);

//Esto no es valida, ya que debe ser con el manejo de objetos, porque no existe el 
console.log("producto.informacion.medida");
console.log(producto.informacion.medida);

//Dejar u objeto que no se pueda modificar
Object.freeze(producto);

//esto marca error
//delete producto.imagen;

//este verifica si esta conjelado el objeto
console.log(Object.isFrozen(producto));

//object Literal
const almacen = {
    nombreProducto: "Pantalla curva de 24 pulgadas",
    precio: 500,
    cantidad: 2
};

//object Constructor
function Almacen(nombreProducto, precio, cantidad) {
    this.nombreProducto = nombreProducto;
    this.precio = precio;
    this.cantidad = cantidad;
}

const almacen2 = new Almacen("Monitos", 500, 3);
console.log("almacen2");
console.log(almacen2);

console.log(Object.keys(almacen2));
console.log(Object.values(almacen2));
console.log(Object.entries(almacen2))

const almacen3 = new Almacen("mouse", 100, 1);
console.log("almacen3");
console.log(almacen3);


//cuando en la función puse la palabra this, va a buscar la propiedad dentro del objeto,
//si no lo tengo va a buscar la variable afuera del objeto.
const ubicacion = {
    longitud: 123,
    latitud: 452,
    mostrarInfo: function () {
        console.log(`La ubicacion es Longitud: ${this.longitud} y latitud: ${this.latitud}`)
    }
};

//esto lo que hace es no permitir agregar propiedades o eliminar propiedades al objeto
//pero si permite cambiar valores de las propiedades ya existentes.
Object.seal(almacen);

almacen.cantidad = 5;

console.log("almacen");
console.log(almacen);
console.log(Object.isSealed(almacen));

//assign sirve para unir dos objetos.
const resultado = Object.assign(ubicacion, producto);
console.log("Resultado");
console.log(resultado);

// otra forma de hecer la union de 2 objetas es con 3 puntos antes del objeto.
// los tres puntos significan que tome una copia del objeto y lo asigne al otro objeto
// por lo que si esta frezzed no lo afecta.
const resultado2 = {
    ...producto, ...almacen
}

console.log("resultado2");
console.log(resultado2);

ubicacion.mostrarInfo();

