const arrayProductos =[];
const producto1 = new producto(1, "fernet", 1500);
const producto2 = new producto(2, "gaseosa", 500);
const producto3 = new producto(3, "cervezas", 900);

arrayProductos.push(producto1, producto2, producto3);




const ordenarMenorMayor = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
}

const ordenarMayorMenor = () => {
    arrayProductos.sort((a, b) =>b.precio - a.precio);
    mostrarListaOrdenada();
};




const mostrarListaOrdenada = () => {
    let array = []
    arrayProductos.forEach(producto => array.push(producto.nombre+" $"+producto.precio));
    alert("lista de precios:"+"\n"+array.join("\n"));

};



function comprarProductos () {

    let productoNombre ="" ;
    let productoCantidad =0;
    let total =0;
    let seguirComprando = false;

    do {
    productoNombre = prompt("¿que producto desea llevar? fernet, cerveza, gaseosa", "ej:fernet");
    productoCantidad = parseInt(prompt("indique la cantidad"));

    const producto = arrayProductos.find(producto => producto.nombre === productoNombre);
    
    if (producto) {
        total += producto.precio * productoCantidad;
    }
        else {
            alert("el producto no esta disponible");
        }


    seguirComprando = confirm ("¿desea agregar algo mas?");
    } while (seguirComprando);

    aplicarDescuentos(total);
}

function aplicarDescuentos(totalCompra) {
    if (totalCompra >=5000) {
        totalCompra = totalCompra * 0.9;
        alert("tienes un 10% por superar los 5000 $")
        alert("total de su compra es " + totalCompra+"$")

    }
}

function comprar () {
   const quieroOrdenar =confirm("¿desea ordenar de menor a mayor precio?");
   if(quieroOrdenar){
    ordenarMenorMayor()
   } else {
    ordenarMayorMenor()
   }
   comprarProductos();
};

comprar(); 

alert ("gracias por su compra")
 

















// let producto ="" ;
// let precio =0;
// let cantidad =0;
// let precioTotal =0;
// let seguirComprando = false;

// do {
//     producto = prompt("¿que producto desea llevar? 1_fernet 1500$, 2_cerveza 900$, 3_gaseosa 500$", "ej 1 para fernet")
//     cantidad = parseInt(prompt("indique la cantidad"))

//     switch (producto) {
//         case "1":
//             precio = 1500;
//             break;
//         case "2":
//             precio = 900;
//             break;
//         case "3":
//             precio = 500;
//             break;

//         default:
//             alert ("no se a selecionado ningun producto")
//             precio = 0 ;
//             cantidad = 0 ;
//             break;
//     }

//     precioTotal += precio * cantidad;
//     seguirComprando = confirm ("¿desea agregar algo mas?")
// } while (seguirComprando)

// alert("el total de su compra es :" + precioTotal + "$");

// alert ("gracias por su compra")