let tamano = prompt("Ingrese el tamaño del sándwich (pequeño o grande):");
let costoBase

if (tamano === "pequeño") {
    costoBase = 6000
} else if (tamano === "grande") {
    costoBase = 12000
} else {
    alert("Tamaño no válido. Por favor, elija entre pequeño o grande.");
    throw "Tamaño no válido"
}

let costoIngredientes = 0;

if (confirm("¿Desea agregar tocineta? (Costo adicional $3000)")) {
    costoIngredientes += 3000;
}
if (confirm("¿Desea agregar jalapeño? (Gratis)")) {
}
if (confirm("¿Desea agregar pavo? (Costo adicional $3000)")) {
    costoIngredientes += 3000;
}
if (confirm("¿Desea agregar queso? (Costo adicional $2500)")) {
    costoIngredientes += 2500;
}

let costoTotal = costoBase + costoIngredientes;

alert("El costo total para su sándwich es:" + costoTotal)