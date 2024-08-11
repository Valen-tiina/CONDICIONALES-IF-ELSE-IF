let tipoLavadora = Number(prompt("Ingrese el tipo de lavadora (1 para grande, 2 para pequeña):"));
let cantidadLavadoras = Number(prompt("Ingrese la cantidad de lavadoras:"));
let horas = Number(prompt("Ingrese la cantidad de horas:"));
let valorPorHora = 0;

if (tipoLavadora === 1) {
    valorPorHora = 4000;
} else if (tipoLavadora === 2) {
    valorPorHora = 3000;
} else {
    alert("Tipo de lavadora no válido.");

    throw "Tipo de lavadora no válido";
}

let valortotal = valorPorHora * horas * cantidadLavadoras;

if (cantidadLavadoras > 3) {
    valortotal *= 0.97; 
}

alert("El costo total a pagar es: " + valortotal);