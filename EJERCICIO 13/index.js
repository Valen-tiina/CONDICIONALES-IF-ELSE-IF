let operador = prompt.toLowerCase();
let minutosInternacionales = parseInt(prompt)
let cargoFijo, valorMinutoInternacional, valorPaqueteDatos

if(operador === "tigo"){
    cargoFijo = 45000
    valorMinutoInternacional = 200
    valorPaqueteDatos = 12000
} else if (operador === "claro"){
    cargoFijo =30000
    valorMinutoInternacional = 100
    valorPaqueteDatos = 18000
} else if (operador === "movistar") {
    cargoFijo = 40000
    valorMinutoInternacional = 250
    valorPaqueteDatos = 8000
} else {
    console.log("Operador no reconocido.")
} 

if (cargoFijo !== undefined) {
    let costoTotal = cargoFijo + (valorMinutoInternacional * minutosInternacionales)
    console.log("El costo total para el operador " + operador + " es: $" + costoTotal)
}