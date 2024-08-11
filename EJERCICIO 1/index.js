let horasTrabajadas = Number(prompt("Ingrese el número de horas trabajadas:"));
let pagototal;
if (horasTrabajadas > 1 && horasTrabajadas <= 10) {
    pagototal = horasTrabajadas * 30000;
    alert("El pago total es: " + pagototal);
} else if (horasTrabajadas > 10) {
    pagototal = horasTrabajadas * 33000;
    alert("El pago total es: " + pagototal);
} else {
    alert("Número no válido, solo números positivos.");
}

