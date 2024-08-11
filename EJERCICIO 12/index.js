let modelo = Number(prompt("Ingrese el numero de modelo de su automovil"))
let modeloDefectuoso = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
if (modeloDefectuoso.includes(modelo)){
    alert ("el automovil esta defectuso, llevar a garantia");
} else {
    alert ("Su automovil no esta defectuoso");
}