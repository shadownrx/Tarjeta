// Mapa de duración de vuelo estimada en horas (puedes agregar más rutas si lo deseas)
const duracionesVuelos = {
    "KLAX-KJFK": 5,  // Los Ángeles - Nueva York
    "KLAX-LEMD": 11, // Los Ángeles - Madrid
    "KJFK-LEMD": 7,  // Nueva York - Madrid
    "KSFO-KJFK": 5,  // San Francisco - Nueva York
    "KSFO-LEMD": 10,
    "KLAX-SKBO": 5,  
};

// Función para calcular la duración del vuelo
function calcularDuracionVuelo(origen, destino) {
    const ruta = `${origen}-${destino}`;
    return duracionesVuelos[ruta] ? duracionesVuelos[ruta] : "Duración no disponible";
}

// Función para seleccionar el avión en base a la duración del vuelo
function seleccionarAvion(duracionVuelo) {
    if (duracionVuelo >= 6) {
        return "Boeing 777-300ER / Airbus A340-600"; // Vuelo largo
    } else if (duracionVuelo >= 3) {
        return "Airbus A321 / Boeing 737-800 / A320"; // Vuelo medio
    } else {
        return "Embraer 190 / Airbus A319"; // Vuelo corto
    }
}

// Función para alternar el Modo oscuro
function toggleModoOscuro() {
    document.body.classList.toggle('modo-oscuro');
}

// Función para generar el número de vuelo
function generarNumeroVuelo() {
    const numeroAleatorio = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    return `OAS${numeroAleatorio}`;
}

// Función para generar el asiento aleatorio
function generarAsiento() {
    const fila = Math.floor(Math.random() * 30) + 1;
    const letras = ["A", "B", "C", "D", "E", "F"];
    const letra = letras[Math.floor(Math.random() * letras.length)];
    return `${fila}${letra}`;
}

// Función para generar la hora de embarque
function generarHoraEmbarque() {
    const horaActual = new Date();
    horaActual.setMinutes(horaActual.getMinutes() + Math.floor(Math.random() * 60) + 30);
    return horaActual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Función para sugerir maleta según el vuelo
function sugerirMaleta() {
    const maletas = ["Equipaje de mano", "Equipaje facturado", "Maleta mediana", "Mochila"];
    return maletas[Math.floor(Math.random() * maletas.length)];
}

// Función principal para generar la tarjeta de embarque
function generarTarjeta() {
    const nombre = document.getElementById("nombre").value;
    const origen = document.getElementById("origen").value.toUpperCase();
    const destino = document.getElementById("destino").value.toUpperCase();

    // Cálculo de la duración del vuelo y selección del avión
    const duracionVuelo = calcularDuracionVuelo(origen, destino);
    const avionICAO = seleccionarAvion(duracionVuelo);

    const numeroVuelo = generarNumeroVuelo();
    const asiento = generarAsiento();
    const horaEmbarque = generarHoraEmbarque();
    const maleta = sugerirMaleta();

    // Mostrar los datos en la tarjeta de embarque
    document.getElementById("nombreAbordo").textContent = nombre;
    document.getElementById("vueloAbordo").textContent = numeroVuelo;
    document.getElementById("origenAbordo").textContent = origen;
    document.getElementById("destinoAbordo").textContent = destino;
    document.getElementById("asientoAbordo").textContent = asiento;
    document.getElementById("horaEmbarqueAbordo").textContent = horaEmbarque;
    document.getElementById("maletaSugerida").textContent = maleta;
    document.getElementById("avionICAOAbordo").textContent = avionICAO;
    document.getElementById("duracionVueloAbordo").textContent = duracionVuelo + " horas";

    // Mostrar la tarjeta de embarque
    document.getElementById("tarjetaAbordo").style.display = "block";
}
