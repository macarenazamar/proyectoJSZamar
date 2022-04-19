class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
const producto1 = new Producto("Bombas", 67500, 10);
const producto2 = new Producto("Motores", 30500, 15);
const producto3 = new Producto("Guarniciones", 1200, 50);
const producto4 = new Producto("Direciones Hidrostáticas", 52600, 10);
const producto5 = new Producto("Electroválvulas", 2300, 50);
const producto6 = new Producto("Radiadores", 10500, 5);

class Servicio{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
const servicio1 = new Servicio("Centrales Hiráulicas", 167500, 10);
const servicio2 = new Servicio("Ascensores Hirdráulicos", 130500, 15);
const servicio3 = new Servicio("Máquinas Agrícolas", 111200, 50);
const servicio4 = new Servicio("Grúas y Montacargas", 152600, 10);
const servicio5 = new Servicio("Cilindros Hidráulicos", 112300, 50);
const servicio6 = new Servicio("Trasnsmiciones Hidrostáticas", 210500, 5);





let precio = 0;

function consultarPrecio() {

    let volverAConsultar = false;

    do {

        let oferta = '';

        do {
            oferta = prompt("¿Queres conocer el precio de nuestros PRODUCTOS o SERVICIOS?").toLocaleUpperCase();

            if (oferta !== "PRODUCTO" && oferta !== "SERVICIO"){
                alert("Ingresa PRODUCTO o SERVICIO");
            }
            
        } while ((oferta !== "PRODUCTO") && (oferta !== "SERVICIO"));

        switch (oferta){
            case "PRODUCTO":
                precio = 4608;
                break;
            case "SERVICIO":
                precio = 5732;
                break;
        }

        alert ("El precio es de " + precio + " dólares");
        volverAConsultar = confirm("¿Consultar otro valor?");
    } while (volverAConsultar);

}

function cambioArg (precio){
    let confirmation = confirm ("¿Convertimos a pesos?");

    if (confirmation && precio){
        alert("El precio es de " + (precio * 200) + " pesos");
    } else{
        alert("El precio es de " + precio + " dólares");
    }

}

consultarPrecio();
cambioArg(precio);