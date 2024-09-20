// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No te has ido de mi vida vida mia pero ya te extraño", time: 22 },
  { text: "Quien diria, nadie lo creia y ya vamos para cuatro años", time: 28 },
  { text: "De solo pensar en perderte", time: 32 },
  { text: "Las milesimas se vuelven horas", time: 35 },
  { text: "Contigo yo me voy a muerte", time: 38 },
  { text: "Y mucho más cuando estamos a solas", time: 40 },
  { text: "Cuando nos falle la memoria y solo queden las fotografías", time: 45 },
  { text: "Que se me olvide todo menos que tu eres mía", time: 51 },
  { text: "Cuando los años nos pesen y las piernas no caminen", time: 55 },
  { text: "Los ojos se no cierren y la piel ya no se estire", time: 61 },
  { text: "Cuando lo unico que pese", time: 67 },
  { text: "Sea lo que hicimos en vida", time: 69 },
  { text: "Y aunque nada de esto pase", time: 72 },
  { text: "Eres, sos y serás EL AMOR DE MI VIDA", time: 78 },
  { text: "Eres el amor de mi vida", time: 85 },
  { text: "Me encanta verte desnudita, eres la pintura más bonita", time: 91 },
  { text: "Tanta belleza quien la explica", time: 95 },
  { text: "En la ducha mojaita, si salimos fino exquisita", time: 97 },
  { text: "Y en los parches donde no se quitan", time: 101 },
  { text: "Todos los planes cambiaron, era perro y me amarraron", time: 103 },
  { text: "El corazon me robaron, justo y necesario", time: 107 },
  { text: "Me haces sentir millonario", time: 109 },
  { text: "Cuando los años nos pesen", time: 113 },
  { text: "Y las piernas no caminen", time: 116 },
  { text: "Los ojos se nos cierren", time: 119 },
  { text: "Y la piel ya no se estire", time: 121 },
  { text: "Cuando lo unico que pese, sea lo que hicimos en vida", time: 125 },
  { text: "Y aunque nada de esto pase", time: 130 },
  { text: "Eres el amor de mi vida", time: 136 },
  { text: "Siempre he soñado una vida contigo", time: 139 },
  { text: "Mas vale los hechos que lo prometido", time: 142 },
  { text: "Sin saber a donde vayas te persigo", time: 145 },
  { text: "Y cuando falle la memoria y solo queden las fotografías", time: 150 },
  { text: "Que se me olvide todo menos que tu eres mia", time: 156 },
  { text: "Cuando los años nos pesen y las piernas no caminen", time: 160 },
  { text: "Los ojos se nos cierren y la piel ya no se estire", time: 166 },
  { text: "Cuando lo unico que pese", time: 171 },
  { text: "Sea lo que hicimos en vida", time: 175 },
  { text: "Y aunque nada de esto pase", time: 178 },
  { text: "Eres el AMOR DE MI VIDA", time: 183 },
  { text: "Eres el AMOR DE MI VIDA", time: 188 },
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