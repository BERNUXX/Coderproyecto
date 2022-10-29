

let nombre = (prompt("Nombre"))
let edad = (prompt("Edad"))
let calle = (prompt("Calle"))

    

 class Persona {
    constructor (nombre, edad, calle){
        this.nombre = nombre
        this.edad = edad
        this.calle = calle
    }
    
    
    minuscula () {
        console.log (this.nombre)
        console.log (this.edad)
        console.log (this.calle)
    
    }
    
 }
function validarNombre (nombre) {
    if (nombre == "" || nombre == Number) {
        console.log ("el nombre no es valido")
    }

}

 const calle2 = new Persona (nombre, edad, calle)


 calle2.minuscula();

 


function comprarProductos() {
    let producto = '';
    let precio = 0;
    let cantidad = 0;
    let totalCompra = 0;
    let cantidadTotal = 0;
    let seguirComprando = false;

    do {
        producto = prompt('¿Que café quieres?', 'Ej: Machiatto').toLowerCase;
        cantidad = parseInt(prompt('¿Cuantos queres comprar?'));

        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case 'machiatto':
                precio = 100;
                break;
            case 'late':
                precio = 100;
                break;
            case 'expresso':
                precio = 150;
                break;
            case 'americano':
                precio = 150;
                break;
            default:
                alert('Debe ingresar un producto válido');
                precio = 0;
                cantidad = 0;
                break;
        }

        totalCompra += precio * cantidadValidada;
        cantidadTotal += cantidad;

        seguirComprando = confirm('¿Desea continuar con su orden?');

    } while (seguirComprando)

    return totalCompra;
}

function validarCantidad(cantidad) {
    while(Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Agregue un número, por favor')
        } else {
            alert('El numero no puede ser 0')
        }
        cantidad = Number(prompt('¿Cuantos queres comprar?'));
    }

    return cantidad;
}

function Pagfinal(totalCompra) {

    document.write ("Gracias por la compra "+ this.nombre+ "El total a pagar es " +totalCompra)
}

Pagfinal(comprarProductos());
    

