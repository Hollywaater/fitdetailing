//Simulador de compras Fit Detail.
//Declaro la funcion constructora para luego armar el Array de Objetos
//Construimos objetos mediante class
let acumulador = 0
let compra
class Producto {
    constructor(id, marca, nombre, precio, tipo) {
        this.id = id,
            this.marca = marca,
            this.nombre = nombre,
            this.precio = precio,
            this.tipo = tipo
            
    }
    //Metodo
    mostrarIngoCatalogo() {
        console.log(`El producto ${this.nombre} de la marca  ${this.marca} tiene un valor de : $${this.precio}`)
    }
}
const producto1 = new Producto(1, "Fit Detail", "Pasta para Pulidos", 1500, "Carroceria")
const producto2 = new Producto(2, "Fit Detail", "Cera para abrillantado", 2000, "Carroceria")
const producto3 = new Producto(3, "Fit Detail", "Tinner removedor de aceites", 2500, "Carroceria")
const producto4 = new Producto(4, "Fit Detail", "Shampoo PH neutro", 1200, "Interior")
const producto5 = new Producto(5, "Fit Detail", "Renovador de neumaticos", 1900, "Carroceria")
const producto6 = new Producto(6, "Carri Detail", "Acondicionador para carroceria", 2300, "Carroceria")
const producto7 = new Producto(7, "Carri Detail", "Silicona para interior", 1300, "Interior")
const producto8 = new Producto(8, "Ternova", "Acrilico para abrillantado", 3300, "Tratamiento")
const producto9 = new Producto(9, "Ternova", "Sellador ceramico", 4300, "Tratamiento")
const producto10 = new Producto(10, "Ternova", "Renovador de interiores", 2200, "Inerior")
//Creo array de objetos
const catalogo = []
catalogo.push(producto1, producto2, producto3, producto4, producto5,producto6,producto7,producto8,producto9,producto10)
console.log(catalogo)

//Declaracion de Funciones
//Funcion para comprar productos
function agregarCarro() {
    while (compra !== "s") {
        let compra = prompt(`Ingrese el NUMERO del producto que desea comprar, escriba s para salir o finalizar su compra \n1) ${producto1.nombre} $ ${producto1.precio}\n2) ${producto2.nombre} ${producto2.precio}\n3) ${producto3.nombre} $ ${producto3.precio}\n4) ${producto4.nombre} $ ${producto4.precio}\n5) ${producto5.nombre} $ ${producto5.precio}\n6) ${producto6.nombre} $${producto6.precio} \n7) ${producto7.nombre} $${producto7.precio}\n8) ${producto8.nombre} $${producto8.precio}\n9) ${producto9.nombre} $${producto9.precio}\n10) ${producto10.nombre} $${producto10.precio}`)

        if (compra == 1) {
            acumulador = acumulador + producto1.precio
            alert(`Usted agrego una ${producto1.nombre} a su carrito de compras\n Lleva un total de $${acumulador} acumulados en el carrito`)

        }
        else if (compra == 2) {
            acumulador = acumulador + producto2.precio
            alert(`Usted agrego una ${producto2.nombre} a su carrito de compras\n Lleva un total de $${acumulador} acumulados en el carrito`)
        }
        else if (compra == 3) {
            acumulador = acumulador + producto3.precio
            alert(`Usted agrego un ${producto3.nombre} a su carrito de compras\n Lleva un total de $${acumulador} acumulados en el carrito`)

        }
        else if (compra == 4) {
            acumulador = acumulador + producto4.precio
            alert(`Usted agrego un ${producto4.nombre} a su carrito de compras\n Lleva un total de $${acumulador} acumulados en el carrito`)

        }
        else if (compra == 5) {
            acumulador = acumulador + producto5.precio
            alert(`Usted agrego un ${producto5.nombre} a su carrito de compras \n Lleva un total de $${acumulador} acumulados en el carrito`)

        }
        else if (compra == 6) {
            acumulador = acumulador + producto5.precio
            alert(`Usted agrego un ${producto5.nombre} a su carrito de compras \n Lleva un total de $${acumulador} acumulados en el carrito`)

        }
        else if (compra == 7) {
            acumulador = acumulador + producto7.precio
            alert(`Usted agrego un ${producto6.nombre} a su carrito de compras \n Lleva un total de $${acumulador} acumulados en el carrito`)

        }
        else if (compra == 8) {
            acumulador = acumulador + producto8.precio
            alert(`Usted agrego un ${producto8.nombre} a su carrito de compras \n Lleva un total de $${acumulador} acumulados en el carrito`)

        }
        else if (compra == 9) {
            acumulador = acumulador + producto9.precio
            alert(`Usted agrego un ${producto9.nombre} a su carrito de compras \n Lleva un total de $${acumulador} acumulados en el carrito`)

        }
        else if (compra == 10) {
            acumulador = acumulador + producto10.precio
            alert(`Usted agrego un ${producto10.nombre} a su carrito de compras \n Lleva un total de $${acumulador} acumulados en el carrito`)

        }
        else if (compra === "s") {
            if (acumulador > 0) {
                alert("Compra finalizada. Seleccione su método de pago")
                finalizarCompra()
            }
            else {
                alert("Gracias por visitarnos. Esperamos volver a verte pronto!")
            }
            break;
        }
        else if (compra == null) {
            alert("Operación cancelada. Gracias por visitarnos. Esperamos volver a verte pronto!");
            console.log("dio escape")
            break;
        }
        else {
            alert("Entrada inválida. Seleccione una de las 10 opciones")
        }
    }
}

//Funcion para seleccionar el medio de pago
function finalizarCompra() {
    let formaPago = prompt("Elija el medio de pago para realizar su compra \n1) Efectivo \n2) Tarjeta de Debito \n3) Tarjeta de Credito")

    while (formaPago !== "1" && formaPago !== "2" && formaPago !== "3") {
        if (formaPago === null) {
            alert("Operacion cancelda, gracias por visitar nuestra tieda")
            break;
        }
        formaPago = prompt("Elija el medio de pago para realizar su compra \n1) Efectivo \n 2) Tarjeta de Debito \n3) Tarjeta de Credito")
    }
    if (formaPago === "1") {
        let resultadoEfectivo = acumulador * 0.85
        alert("Pagando en efectivo obtiene un 15% de descuento su total abonar es: $" + resultadoEfectivo.toFixed(2))
    }
    else if (formaPago === "2") {
        alert("El total abonar es de: $" + acumulador + " gracias por su compra")
    }
    else if (formaPago === "3") {
        let resultadoTarjeta = acumulador / 3
        alert("El total abonar es de: $" + acumulador + " y puede hacerlo en 3 cuotas sin interes de: $" + resultadoTarjeta.toFixed(2))
    }

}
//Funcion para mostrar el catalogo a traves de la consola
function mostrarCatalogo(array){
    console.log(`Productos disponibles: `)
    array.forEach(
        (produ)=>{
            console.log(produ.id, produ.nombre, produ.marca, produ.precio)
        }
    )
}
//Funcion para Filtrar por Marca
function buscarPorMarca(array){
    let marcaBuscada = prompt("Ingrese la marca de productos que desea buscar")
    let buscar = array.filter(
        (produ)=> produ.marca.toLowerCase() == marcaBuscada.toLowerCase()
        )
    if(buscar.length == 0 ){
        console.log(`Actualmente no tenemos ningun producto de la marca: ${marcaBuscada} en stock`)
    }else{
        console.log(buscar)
    }
    
}
//Funcion para filtrar por la utilidad de los productos
function buscarPorUtilidad(array){
    let utiBuscada = prompt("Ingrese el tipo de productos que desea buscar: \n Carroceria - Interior - Tratamiento")
    let busqueda = array.filter(
        (produ)=> produ.tipo.toLowerCase() == utiBuscada.toLowerCase()
        )
    if(busqueda.length == 0 ){
        console.log(`Actualmente no tenemos ningun producto para ${utiBuscada} en stock`)
    }else{
        console.log(busqueda)
    }
}
//Funcion para el Menu
function menuDesplegable(salir) {
    let opcion = parseInt(prompt(`Ingrese la opción deseada
                1 - Comprar productos
                2 - Ver Catalogo
                3 - Buscar por Marca
                4 - Ordenar productos por categoria
                0 - Presione 0 si desea salir`))

    switch (opcion) {
        case 1:
            agregarCarro()
            break
        case 2:
            mostrarCatalogo(catalogo)            
            break
        case 3:
            buscarPorMarca(catalogo)
            break
        case 4:
            buscarPorUtilidad(catalogo)
            break
        case 0:
            alert("Gracias por utilizar el simulador de Fit Detail, esperamos volver a verte pronto")
            salir = true
            return salir
            break
        default:
            console.log("Ingresar una opción correcta")
            break
    }
}

///Comienza a correr el codigo

let mostrarMenu = prompt("Desea ver el Menu de Fit detail escriba si/no")
if (mostrarMenu == "no") {
    alert("Muchas gracias por visitar nuestro sitio que tengas un lindo dia")
}
while (mostrarMenu !== "no") {
    if (mostrarMenu.toLowerCase() == "si") {
        menuDesplegable()
        break;
    }
    else if (mostrarMenu == "no") {
        alert("Muchas gracias por visitar nuestro sitio que tengas un lindo diaaaaa")
    }
    else if (mostrarMenu == null) {
        alert("Muchas gracias por visitar nuestro sitio que tengas un lindo dia")
    }
    else {
        mostrarMenu = prompt(`Entrada inválida. \n \n Teclee "si" para ver el catálogo o "no" para salir`);
        if (mostrarMenu === "no") {
            alert("Gracias por visitarnos. Esperamos volver a verte pronto!")  //Caso entrada inválida pedimos que ingrese nuevamente
        }
        else if (mostrarMenu === "si") {
            agregarCarro()
            break;
        }

    }
}
