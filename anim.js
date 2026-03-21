// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No me imaginé que funcionara así, no buscaba amor y un dia te encontre", time: 0 },
  { text: "Estaba vivo, pero con vos comencé a vivir", time: 5 },
  { text: "Fuiste una bendición, me queda agradecer", time: 7 },
  { text: "Sos ese cuento del que no quiero saber el final", time: 9 },
  { text: "Ese cometa que tuve suerte de presenciar", time: 13 },
  { text: "El mundo es feo y su pasado provocó ansiedad", time: 15 },
  { text: "Me iré al infierno, pero en tierra", time: 18 },
  { text: "Si algún día de estos se hace gris tu cielo", time: 22 },
  { text: "Lo pintará' mirando un río", time: 24 },
  { text: "Las lágrimas y el frío te hicieron de hielo", time: 27 },
  { text: "Y daré la piel pa' servir de abrigo", time: 30 },
  { text: "Y aunque el orgullo a veces ocultó mis miedo'", time: 33 },
  { text: "Temo a caer y que no estés conmigo", time: 36 },
  { text: "Te ofrezco amor real de un corazón sincero", time: 39 },
  { text: "Y quemar la llave que abrió el laberinto", time: 42 },
  { text: "Si algún día de estos se hace gris tu cielo", time: 46 },
  { text: "Lo pintará' mirando un río", time: 48 },
  { text: "Las lágrimas y el frío te hicieron de hielo", time: 50 },
  { text: "Y daré la piel pa' servir de abrigo", time: 53 },
  { text: "Y aunque el orgullo a veces ocultó mis miedo'", time: 56 },
  { text: "Temo a caer y que no estés conmigo", time: 58 },
  { text: "Te ofrezco amor real de un corazón sincero", time: 61 },
  { text: "Y quemar la llave que abrió el laberinto", time: 64 },
  { text: "Ma-a-a-ai", time: 70 },
  { text: "Ma-a-a-ai", time: 72 },
  { text: "Ma-a-a-ai", time: 74 },
  { text: "Ma-a-a-ai", time: 76 },
  { text: "Hoy el tiempo no perdona", time: 79 },
  { text: "Y el ambiente es raro", time: 83 },
  { text: "Pero solo esa persona me dio su mano", time: 88 },
  { text: "Tu alma era viajera y sola", time: 92 },
  { text: "Sé que es un descaro", time: 94 },
  { text: "Y la mia se desmorona", time: 97 },
  { text: "Pero combinamos", time: 99 },
  { text: "Lograste comprender lo que ni yo entendí", time: 102 },
  { text: "Tus palabras hoy, fueron mirada ayer", time: 106 },
  { text: "Preferiste escuchar antes que verme sonrreir", time: 109 },
  { text: "Me hiciste ser mejor, me queda agradecer", time:  112 },
  { text: "Si algún día de estos se hace gris tu cielo", time: 115 },
  { text: "Lo pintará' mirando un río", time: 117 },
  { text: "Las lágrimas y el frío te hicieron de hielo", time: 120 },
  { text: "Y daré la piel pa' servir de abrigo", time: 123 },
  { text: "Y aunque el orgullo a veces ocultó mis miedo'", time: 126 },
  { text: "Temo a caer y que no estés conmigo", time: 129 },
  { text: "Te ofrezco amor real de un corazón sincero", time: 133 },
  { text: "Y quemar la llave que abrió el laberinto", time: 136 },
  { text: "Ma-a-a-ai", time: 140 },
  { text: "Ma-a-a-ai", time: 142 },
  { text: "Ma-a-a-ai", time: 144 },
  { text: "Ma-a-a-ai", time: 146 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);