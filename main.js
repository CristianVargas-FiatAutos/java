let producto ="" ;
let precio =0;
let cantidad =0;
let precioTotal =0;
let seguirComprando = false;

do {
    producto = prompt("¿que producto desea llevar? 1_fernet 1500$, 2_cerveza 900$, 3_gaseosa 500$", "ej 1 para fernet")
    cantidad = parseInt(prompt("indique la cantidad"))

    switch (producto) {
        case "1":
            precio = 1500;
            break;
        case "2":
            precio = 900;
            break;
        case "3":
            precio = 500;
            break;

        default:
            alert ("no se a selecionado ningun producto")
            precio = 0 ;
            cantidad = 0 ;
            break;
    }

    precioTotal += precio * cantidad;
    seguirComprando = confirm ("¿desea agregar algo mas?")
} while (seguirComprando)

alert("el total de su compra es :" + precioTotal + "$");

alert ("gracias por su compra")