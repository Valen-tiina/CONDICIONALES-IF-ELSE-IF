let fisica = Number(prompt("Ingrese la calificación de Física:"));
let quimica = Number(prompt("Ingrese la calificación de Química:"));
let biologia = Number(prompt("Ingrese la calificación de Biología:"));
let matematicas = Number(prompt("Ingrese la calificación de Matemáticas:"));
let informatica = Number(prompt("Ingrese la calificación de Informática:"));

let promedio = (fisica + quimica + biologia + matematicas + informatica) / 5;

let calificacion;
if (promedio >= 0 && promedio <= 5.9) {
    calificacion = "Mala";
} else if (promedio > 5.9 && promedio <= 8) {
    calificacion = "Buena";
} else if (promedio > 8) {
    calificacion = "Excelente";
}

alert("El promedio es: " + promedio.toFixed(2));
alert("La calificación es: " + calificacion);