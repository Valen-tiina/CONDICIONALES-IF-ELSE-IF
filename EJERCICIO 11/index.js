let sonido = confirm ("¿Funciona tu sonido? presiona aceptar para si y cancelar para no");
let discoDuro = confirm ("¿Funciona tu disco duro? presiona aceptar para si y cancelar para no");
let unidad = confirm ("¿Funciona tu unidad? presiona aceptar para si y cancelar para no");
if(sonido === true && discoDuro === true){
    alert("tu computadora esta averiada");
} else if (sonido === true && unidad === true){
    alert("pongase en contacto con el tecnico de apoyo");
    }else if (sonido === true && unidad === false){
    alert("verificar contactos de unidad")}
else if (sonido === false && discoDuro === false){
    alert("traiga la computadora para repararla en la central");
}else if(sonido === false && discoDuro === true){
    alert("compruebe las conexiones de altavoces")}