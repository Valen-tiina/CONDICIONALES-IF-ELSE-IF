let genero = prompt("Ingrese su género (femenino o masculino):").toLowerCase();
let edad = Number(prompt("Ingrese su edad:"));
let ayuda;
if (genero === 'femenino') {
    if (edad > 50) {
        ayuda = 120000;
        alert("Tu ayuda mensual será de " + ayuda);
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000;
        alert("Tu ayuda mensual será de " + ayuda);
    } else {
        ayuda = 0; 
        alert("No cumple con las condiciones de ayuda");
    }
} else if (genero === 'masculino') {
    ayuda = 40000;
    alert("Tu ayuda mensual será de " + ayuda);
} else {
    ayuda = 0;
    alert("Género no válido");
}