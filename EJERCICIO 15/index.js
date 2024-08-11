// Función para generar una carta aleatoria entre 1 y 10
function generarCarta() {
    return Math.floor(Math.random() * 10) + 1;
}

// Inicialización de puntuaciones
let puntuacionUsuario = 0;
let puntuacionComputadora = 0;

// Repartir dos cartas iniciales para el usuario y la computadora
puntuacionUsuario += generarCarta() + generarCarta();
puntuacionComputadora += generarCarta() + generarCarta();

// Mostrar la puntuación inicial del usuario
alert("Tu puntuación inicial es: " + puntuacionUsuario);

// Turno del usuario para pedir carta adicional
let continuar = true;
while (continuar && puntuacionUsuario < 21) {
    continuar = confirm("¿Deseas pedir otra carta?");
    if (continuar) {
        puntuacionUsuario += generarCarta();
        if (puntuacionUsuario > 21) {
            alert("Tu puntuación final es: " + puntuacionUsuario + ". Has superado 21. ¡Pierdes!");
            puntuacionUsuario = 0; // El usuario pierde si supera 21
            continuar = false; // Termina el turno del usuario
        } else {
            alert("Tu puntuación actual es: " + puntuacionUsuario);
        }
    }
}

// Si el usuario no ha superado 21, juega la computadora
if (puntuacionUsuario <= 21) {
    // La computadora pide cartas hasta alcanzar al menos 17 puntos
    while (puntuacionComputadora < 17) {
        puntuacionComputadora += generarCarta();
    }

    // Mostrar la puntuación final de la computadora
    alert("La puntuación final de la computadora es: " + puntuacionComputadora);

    // Determinar el ganador
    if (puntuacionComputadora > 21) {
        alert("La computadora ha superado 21. ¡Ganaste!");
    } else if (puntuacionUsuario > puntuacionComputadora) {
        alert("¡Ganaste! Tu puntuación: " + puntuacionUsuario + ", Computadora: " + puntuacionComputadora);
    } else if (puntuacionUsuario < puntuacionComputadora) {
        alert("Perdiste. Tu puntuación: " + puntuacionUsuario + ", Computadora: " + puntuacionComputadora);
    } else {
        alert("Empate. Tu puntuación: " + puntuacionUsuario + ", Computadora: " + puntuacionComputadora);
    }
}