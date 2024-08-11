let dias = Number(prompt("ingrese el numero de dias que asistio al gimnasio: 15, 30 o 90 dias"));
let costo;
    if (dias === 15) {
        costo = 18000;
        alert("Tu mensualidad es de " + costo);
    } else if (dias === 30) {
        costo = 35000;
        alert("Tu mensualidad es de " + costo);
    } else if (dias === 90) { 
        costo = 86000;
        alert("Tu mensualidad es de " + costo);
    } else {
        costo = 0
        alert("Numero de dias no valido ");
    }