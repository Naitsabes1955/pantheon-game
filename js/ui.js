// ui.js
// Integrante 3 – Constructor del DOM

const app = document.getElementById("game-app");

/* =========================
   UTILIDAD GENERAL
========================= */
export function limpiarPantalla() {
    app.innerHTML = "";
}

/* =========================
   PANTALLA DE INICIO
========================= */
export function renderPantallaInicio() {
    limpiarPantalla();

    const contenedor = document.createElement("div");
    contenedor.className = "container text-center mt-5";

    const titulo = document.createElement("h1");
    titulo.textContent = "⚖️ El Juicio de Anubis";
    titulo.className = "mb-4";

    const descripcion = document.createElement("p");
    descripcion.textContent =
        "Decide el destino de las almas y demuestra si eres digno de gobernar el inframundo.";

    const botonIniciar = document.createElement("button");
    botonIniciar.textContent = "Iniciar Juego";
    botonIniciar.id = "btn-iniciar";
    botonIniciar.className = "btn btn-primary btn-lg mt-3";

    contenedor.append(titulo, descripcion, botonIniciar);
    app.appendChild(contenedor);
}

/* =========================
   PANTALLA DE JUEGO
========================= */
export function renderPantallaJuego(estado) {
    limpiarPantalla();

    const contenedor = document.createElement("div");
    contenedor.className = "container mt-4";

    // Título
    const titulo = document.createElement("h2");
    titulo.textContent = `Dios: ${estado.dios}`;
    titulo.className = "text-center mb-4";

    // Tarjeta de estado
    const card = document.createElement("div");
    card.className = "card p-3 mb-4";

    const salud = document.createElement("p");
    salud.textContent = `❤️ Salud: ${estado.salud}`;

    const energia = document.createElement("p");
    energia.textContent = `⚡ Energía: ${estado.energia}`;

    const progreso = document.createElement("p");
    progreso.textContent = `📜 Progreso: ${estado.progreso}%`;

    card.append(salud, energia, progreso);

    // Botones de acción
    const acciones = document.createElement("div");
    acciones.className = "d-flex justify-content-center gap-3";

    const btnAtacar = document.createElement("button");
    btnAtacar.textContent = "Atacar";
    btnAtacar.id = "btn-atacar";
    btnAtacar.className = "btn btn-danger";

    const btnDescansar = document.createElement("button");
    btnDescansar.textContent = "Descansar";
    btnDescansar.id = "btn-descansar";
    btnDescansar.className = "btn btn-success";

    const btnSalir = document.createElement("button");
    btnSalir.textContent = "Salir";
    btnSalir.id = "btn-salir";
    btnSalir.className = "btn btn-secondary";

    acciones.append(btnAtacar, btnDescansar, btnSalir);

    contenedor.append(titulo, card, acciones);
    app.appendChild(contenedor);
}

/* =========================
   PANTALLA FINAL
========================= */
export function renderPantallaFinal(resultado) {
    limpiarPantalla();

    const contenedor = document.createElement("div");
    contenedor.className = "container text-center mt-5";

    const titulo = document.createElement("h1");
    titulo.textContent =
        resultado === "victoria"
            ? "🏆 Has triunfado como Anubis"
            : "💀 Has fallado en el juicio";

    const mensaje = document.createElement("p");
    mensaje.textContent =
        resultado === "victoria"
            ? "Las almas te respetan."
            : "El equilibrio se ha perdido.";

    const btnReiniciar = document.createElement("button");
    btnReiniciar.textContent = "Reiniciar Juego";
    btnReiniciar.id = "btn-reiniciar";
    btnReiniciar.className = "btn btn-warning mt-3";

    contenedor.append(titulo, mensaje, btnReiniciar);
    app.appendChild(contenedor);
}
