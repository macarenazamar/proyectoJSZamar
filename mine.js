class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}








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