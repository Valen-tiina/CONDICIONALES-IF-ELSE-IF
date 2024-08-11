let numero = prompt("Ingrese un número para saber si es positivo:");
numero = Number(numero);

if (numero > 0) {
    alert("El número es positivo");
} else if (numero < 0) {
    alert("El número es negativo");
} else {
    alert("El número es cero es un numero neutro");
}