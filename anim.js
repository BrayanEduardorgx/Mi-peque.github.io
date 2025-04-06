// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
  var lyricsData = [
    { text: "Sale para ser feliz, sale para sonreír", time: 33 },
    { text: "Sale y solo se daña, pero yo la entiendo porque he estado allí", time: 37 },
    { text: "No es la misma que conocí, y cuando de lejos yo la vi", time: 43 },
    { text: "Perdiéndose en la noche que juró no iba a repetir", time: 46 },
    { text: "Pinta sus labios color rosado", time: 52 },
    { text: "Vestido negro y por dentro su llanto", time: 54 },
    { text: "Tuve tu pelo entre mis manos", time: 60 },
    { text: "Te lo cambiaste, ay, cuánto has cambiado", time: 65 },
    { text: "Y mírate, ya ni siquiera te conozco", time: 70 },
    { text: "Y mírate, ya ni puedo ver tu rostro", time: 75 },
    { text: "Y la mujer que tanto amé", time: 78 },
    { text: "¿A dónde se me fue?...", time: 85 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 89 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 90 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 91 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 92 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 93 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 94 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 95 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 96 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 97 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 98 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 99 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 100 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 101 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 102 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 103 },
    { text: "TE QUIERO MUCHO MI PEQUE, ESTE REGALO ES PARA TI 💕", time: 104 },

  
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
setTimeout(ocultarTitulo, 333000);