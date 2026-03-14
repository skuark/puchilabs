// ============================================================
//  LÓGICA PRINCIPAL — Baraja de pareja
// ============================================================

// --- ESTADO DE LA APLICACIÓN ---
// Aquí guardamos todo lo que la app necesita "recordar"

let barajaActual = [];      // las cartas que quedan por sacar (en orden barajado)
let historial = [];         // las cartas que ya han salido, en orden de salida


// --- REFERENCIAS AL DOM ---
// Conectamos el JS con los elementos HTML que vamos a necesitar

const elBaraja       = document.getElementById('baraja');
const elContador     = document.getElementById('contador');
const elCarta        = document.getElementById('carta');
const elPregunta     = document.getElementById('pregunta');
const elMensaje      = document.getElementById('mensaje');
const btnBarajar     = document.getElementById('btn-barajar');
const btnSacarCarta  = document.getElementById('btn-sacar-carta');


// --- FUNCIONES ---

/**
 * Baraja un array usando el algoritmo Fisher-Yates.
 * Devuelve un nuevo array con los elementos en orden aleatorio.
 */
function barajar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Inicializa o reinicia la baraja.
 * Si hay historial, la restaura en el orden en que salieron.
 * Si no hay historial, baraja todas las preguntas.
 */
function inicializarBaraja() {
  if (historial.length > 0) {
    // Restaurar en el orden en que fueron saliendo
    barajaActual = [...historial];
    historial = [];
  } else {
    barajaActual = barajar(PREGUNTAS);
  }

  ocultarCarta();
  ocultarMensaje();
  actualizarContador();
  actualizarEstadoBotonBaraja();
}

/**
 * Saca la primera carta de la baraja actual.
 * La añade al historial y la muestra en pantalla.
 */
function sacarCarta() {
  if (barajaActual.length === 0) return;

  const carta = barajaActual.shift();
  historial.push(carta);

  mostrarCarta(carta);
  actualizarContador();

  if (barajaActual.length === 0) {
    mostrarMensajeBarajaVacia();
  }

  actualizarEstadoBotonBaraja();
}

/**
 * Muestra una carta con su pregunta en pantalla.
 */
function mostrarCarta(carta) {
  elPregunta.textContent = carta.texto;
  elCarta.classList.remove('oculto');
  elCarta.classList.add('visible');
}

/**
 * Oculta la zona de la carta.
 */
function ocultarCarta() {
  elCarta.classList.remove('visible');
  elCarta.classList.add('oculto');
  elPregunta.textContent = '';
}

/**
 * Muestra el mensaje de baraja vacía.
 */
function mostrarMensajeBarajaVacia() {
  elMensaje.classList.remove('oculto');
  elMensaje.classList.add('visible');
}

/**
 * Oculta el mensaje de baraja vacía.
 */
function ocultarMensaje() {
  elMensaje.classList.remove('visible');
  elMensaje.classList.add('oculto');
}

/**
 * Actualiza el contador de cartas restantes.
 */
function actualizarContador() {
  const restantes = barajaActual.length;
  elContador.textContent = restantes === 1
    ? '1 carta restante'
    : `${restantes} cartas restantes`;
}

/**
 * El botón de barajar solo está disponible cuando hay historial.
 * Si la baraja nunca ha empezado, no tiene sentido barajar.
 */
function actualizarEstadoBotonBaraja() {
  const hayHistorial = historial.length > 0 || barajaActual.length < PREGUNTAS.length;
  btnBarajar.disabled = !hayHistorial;
}


// --- EVENTOS ---

btnSacarCarta.addEventListener('click', sacarCarta);

btnBarajar.addEventListener('click', () => {
  barajaActual = barajar([...barajaActual, ...historial]);
  historial = [];
  ocultarCarta();
  ocultarMensaje();
  actualizarContador();
  actualizarEstadoBotonBaraja();
});


// --- ARRANQUE ---
inicializarBaraja();
