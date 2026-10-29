/* ==========================================================
   CONFIGURACIÓN — edita solo este archivo
   Las fotos van en la carpeta  images/
   El audio va en la carpeta    audio/
   Si un archivo no existe, se muestra un espacio rosado.
   ========================================================== */
var CFG = {

  // ----- Portada -----
  para:  "Para mi esposo",
  nombreEl: "Mi amor",          // nombre de quien recibe el regalo
  nombreElla: "tu esposa",      // quien lo regala
  tituloTop: "Nuestro recuerdo",
  subTop: "para siempre juntos",

  // ----- Archivos -----
  fotoPrincipal: "images/principal.jpg",
  audio: "audio/mensaje.mp3",   // deja "" para ocultar el audio
  spotify: "",                  // pega aquí el enlace de la canción de Spotify ("" para ocultar)

  galeria: [                    // 9 fotos (se desliza hacia la izquierda)
    "images/galeria-1.jpg", "images/galeria-2.jpg", "images/galeria-3.jpg",
    "images/galeria-4.jpg", "images/galeria-5.jpg", "images/galeria-6.jpg",
    "images/galeria-7.jpg", "images/galeria-8.jpg", "images/galeria-9.jpg"
  ],

  // ----- Carta (4 párrafos) -----
  cartaTitulo: "Para ti, mi vida",
  carta: [
    "Desde el día en que te conocí, mi mundo se volvió más suave, más luminoso y mucho más tuyo. Gracias por ser mi hogar.",
    "Contigo aprendí que el amor se construye en lo pequeño: un café por la mañana, una mano que sostiene, una risa que lo arregla todo.",
    "Hemos reído, hemos crecido y hemos soñado juntos. Cada recuerdo contigo es un lugar al que siempre quiero volver.",
    "Hoy y siempre te elijo a ti. Gracias por ser mi esposo, mi mejor amigo y mi amor eterno."
  ],

  // ----- Contador -----
  fechaInicio: "2020-02-14",    // formato AAAA-MM-DD

  // ----- 3 momentos especiales -----
  momentos: [
    { foto: "images/momento-1.jpg", fecha: "14 de febrero, 2020", titulo: "Nuestra primera cita",
      texto: "Aquel día supe que mi vida cambiaría para siempre. Todo comenzó con una sonrisa." },
    { foto: "images/momento-2.jpg", fecha: "20 de junio, 2021", titulo: "Nuestro primer viaje",
      texto: "Descubrimos nuevos lugares y confirmamos que el mejor destino eres tú." },
    { foto: "images/momento-3.jpg", fecha: "10 de octubre, 2022", titulo: "El día del “sí, acepto”",
      texto: "El momento más bonito: prometernos todo y quedarnos con lo más importante, nosotros." }
  ],

  // ----- Invitación (tarjeta final) -----
  invitacion: {
    foto: "images/invitacion.jpg",
    titulo: "Esta noche, tú y yo",
    cuando: "Sábado 14 de febrero · 8:00 p. m.",
    lugar: "Restaurante Mi Lugar Favorito",
    texto: "Una cena a la luz de las velas, solo para celebrarte y seguir escribiendo nuestra historia.",
    siguientePagina: "#"        // enlace de la página a la que lleva el botón "Continuar"
  },

  pie: "Hecho con amor, para ti ♡"
};
