let copias = Number(prompt("ingrese el numero de copias que desea imprimir"))
let valor1 = 120
let valor2 = 100
let valor3 = 80
let valor4 = 50 
if(copias >=0 && copias <=499){
    valor = copias*valor1
    alert("el valor por copia es: "+valor1 +" y el valor total de tus copias seria: " +valor)
} else if(copias >=500 && copias <=749){
    valor = copias*valor2
    alert("el valor por copia es: "+valor2 +" y el valor total de tus copias seria: " +valor)
}else if(copias >=750 && copias <=999){
    valor= copias*valor3
    alert("el valor por copia es: "+valor3 +" y el valor total de tus copias seria: " +valor)
}else if(copias >=1000){
    valor= copias*valor4
    alert("el valor por copia es: "+valor4 +" y el valor total de tus copias seria: " +valor)
}else{
    alert("valor de copias invalido")}