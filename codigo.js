//Simulador de compras Fit Detail.
//Declaracion de variables/Constantes

const pasta = 1500
const cera = 1000
const shampoo = 1200
const tinner = 1600
const revividor = 1300
let acumulador = 0
let compra

//Declaracion de funciones

function agregarCarro() {
    while(compra !== "s"){
        let compra = prompt(`Ingrese el NUMERO del producto que desea comprar, escriba s para salir o finalizar su compra \n1) Pasta para Pulido $ ${pasta}\n2) Cera para abrillantado $ ${cera}\n3) Shaampo con PH neutro $ ${shampoo}\n4) Tinner removedor de aceites $ ${tinner}\n5) Revividor de neumaticos $ ${revividor}` )
    
        if ( compra == 1){
            acumulador = acumulador + pasta
            alert(`Usted agrego una pasta para pulido a su carrito de compras\n Lleva un total de $${acumulador} acumulados en el carrito`)
                
        }
        else if ( compra == 2){
            acumulador = acumulador + cera
            alert(`Usted agrego una cera para abrillantado a su carrito de compras\n Lleva un total de $${acumulador} acumulados en el carrito`)
        }
        else if (compra == 3 ){
            acumulador = acumulador + shampoo
            alert(`Usted agrego un shaampo con PH neutro a su carrito de compras\n Lleva un total de $${acumulador} acumulados en el carrito`)
                
        }
        else if (compra == 4){
            acumulador = acumulador + tinner
            alert(`Usted agrego un tinner removedor de aceites a su carrito de compras\n Lleva un total de $${acumulador} acumulados en el carrito`)
                
        }
        else if (compra == 5){
            acumulador = acumulador + revividor 
            alert(`Usted agrego un revividor de neumaticos a su carrito de compras \n Lleva un total de $${acumulador} acumulados en el carrito`)
            
        } 
        else if (compra === "s") {
            if (acumulador > 0) {
                alert("Compra finalizada. Seleccione su método de pago")
                finalizarCompra()
            }
            else {
                alert("Gracias por visitarnos. Esperamos volver a verte pronto!")
            }
            break ;
        }
        else if (compra == null) {
            alert("Operación cancelada. Gracias por visitarnos. Esperamos volver a verte pronto!");
            console.log("dio escape")
            break ;
        }
        else {
            alert("Entrada inválida. Seleccione una de las 6 opciones")
        }
    }
}


function finalizarCompra(){
    let formaPago = prompt("Elija el medio de pago para realizar su compra \n1) Efectivo \n2) Tarjeta de Debito \n3) Tarjeta de Credito")

    while (formaPago !== "1" && formaPago !== "2" && formaPago !== "3"){
        if(formaPago === null){
            alert("Operacion cancelda, gracias por visitar nuestra tieda")
            break;
        }
        formaPago = prompt("Elija el medio de pago para realizar su compra \n1) Efectivo \n 2) Tarjeta de Debito \n3) Tarjeta de Credito")
    }
    if(formaPago === "1"){
        let resultadoEfectivo = acumulador * 0.85
        alert("Pagando en efectivo obtiene un 15% de descuento su total abonar es: $" + resultadoEfectivo.toFixed(2))
    }
    else if (formaPago === "2"){
        alert("El total abonar es de: $"+ acumulador +" gracias por su compra")
    }
    else if (formaPago === "3"){
        let resultadoTarjeta = acumulador/3
        alert("El total abonar es de: $"+ acumulador +" y puede hacerlo en 3 cuotas sin interes de: $"+resultadoTarjeta.toFixed(2))
    }

}


///Comienza a correr el codigo

let mostrarMenu = prompt("Desea ver el catalogo de Fit detail escriba si/no")
if (mostrarMenu == "no"){
    alert("Muchas gracias por visitar nuestro sitio que tengas un lindo dia")
}
while(mostrarMenu !== "no"){
    if (mostrarMenu.toLowerCase() == "si"){
        agregarCarro()
        break;
    }
    else if (mostrarMenu == "no"){
        alert("Muchas gracias por visitar nuestro sitio que tengas un lindo diaaaaa")
    }
    else if (mostrarMenu == null){
        alert("Muchas gracias por visitar nuestro sitio que tengas un lindo dia")
    }
    else {
        mostrarMenu = prompt(`Entrada inválida. \n \n Teclee "si" para ver el catálogo o "no" para salir`);
        if (mostrarMenu === "no") {
            alert("Gracias por visitarnos. Esperamos volver a verte pronto!")  //Caso entrada inválida pedimos que ingrese nuevamente
        }
        else if (mostrarMenu === "si"){
            agregarCarro()
            break;
        }

    }
}