//Autor Camilo Gamez
// Clase Programacion Orientada a Objetos

// Colapsa la ventana
var col = document.getElementsByClassName("boton-chat");

for (let i = 0; i < col.length; i++) {
    col[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// para la marquilla del tiempo en el chat.
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes  = today.getMinutes();
    if (hours < 10) {
        hours = "0" + minutes;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let time = hours + ":" + minutes;
    return time;
}

// El primer mensaje que envia el bot
function mensajeBienvenida() {
    let primerMensaje = "!Hola! me llamo Nacho ¿En qué puedo ayudarte?"
    document.getElementById("mensajeBienvenida").innerHTML = '<p class="botText"><span>' +
        primerMensaje + '</span></p>';

    let tiempo = getTime();

    $("#marquilla-tiempo").append(tiempo);
    document.getElementById("input-usuario").scrollIntoView(false);
}
mensajeBienvenida();


// Obtiene el texto y lo procesa.
function getRespuestaBruta(textoUsuario) {
    let respuestaBot = getRespuestaBot(textoUsuario);
    let htmlBot = '<p class="textoBot><span>' + respuestaBot + '</span></p>';

    $("#cajaChat").append(htmlBot);

    document.getElementById("barra-chat-inf").scrollIntoView(true)
}

// Obtiene la respuesta y la procesa
function getRespuesta() {
    let textoUsuario = $("input-texto").val();

    if (textoUsuario == "") {
        textoUsuario = "Hola Nacho, ten un lindo día.";
    }

    let htmlUsuario = '<p class="textoUsuario"></span>' + textoUsuario + '</span></p>';

    $('#barra-texto').val();
    $("#cajaChat").append(htmlUsuario);
    document.getElementById("barra-chat-inf").scrollIntoView(true);

    setTimeout(() => {
        getRespuestaBruta(textoUsuario);
    }, 1000)
}
/*
function botonEnviarTexto(textoEjemplo) {

    let htmlUsuario = '<p class="textoUsuario"></span>' + textoUsuario + '</span></p>';

    $('#barra-texto').val();
    $("#cajaChat").append(htmlUsuario);
    document.getElementById("barra-chat-inf").scrollIntoView(true);
}
*/
function botonEnvio() {
    getRespuesta()
}

$("#input-texto").keypress(function (e) {
    if (e.which() == 13) {
        getRespuesta();
    }
})
