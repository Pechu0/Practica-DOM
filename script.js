// 1️⃣ Cambiar texto usando getElementById
function cambiarCiudad() {
    let ciudad = prompt("Ingresa el nombre de la ciudad:");
    document.getElementById("ciudad").innerText = "Ciudad: " + ciudad;
}

// Modificar contenido dinámicamente
function actualizarClima() {
    let temp = Math.floor(Math.random() * 40);
    let humedad = Math.floor(Math.random() * 100);

    document.getElementById("temperatura").innerText = "Temperatura: " + temp + " °C";
    document.getElementById("humedad").innerText = "Humedad: " + humedad + " %";
}

// Cambiar contenido y color (manipulación de propiedades)
function cambiarEstado() {
    let estados = ["Soleado con nubes", "Nublado con tifones", "Lluvia de cloruro de sodio", "Tormenta marina"];
    let estadoRandom = estados[Math.floor(Math.random() * estados.length)];

    let elemento = document.getElementById("estado");
    elemento.innerText = "Estado: " + estadoRandom;

    if (estadoRandom === "Tormenta") {
        elemento.style.color = "red";
    } else {
        elemento.style.color = "black";
    }
}

//  Crear un nuevo elemento dinámicamente
function modoEmergencia() {
    let alerta = document.createElement("h3");
    alerta.innerText = "⚠ ALERTA CLIMATOLÓGICA, TORMENTA DE ARDILLAS VOLADORAS DE PAPANTLA ⚠";
    alerta.id = "alerta";

    document.body.appendChild(alerta);
}

//  Eliminar elemento del DOM
function reiniciarDatos() {
    document.getElementById("ciudad").innerText = "Ciudad: No seleccionada";
    document.getElementById("temperatura").innerText = "Temperatura: -- °C";
    document.getElementById("humedad").innerText = "Humedad: -- %";
    document.getElementById("estado").innerText = "Estado: --";

    let alerta = document.getElementById("alerta");
    if (alerta) {
        alerta.remove();
    }
}