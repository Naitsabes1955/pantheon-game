// js/events.js - Manejadores de eventos del juego

// Iniciar el juego
function startGame() {
    gameState.reset();
    gameState.screen = 'game';
    render();
}

// Tomar una decisión
function tomarDecision(index) {
    const escena = gameState.getEscenaActual();
    if (!escena) return;

    const decision = escena.decisiones[index];
    if (!decision) return;

    // Si la decisión tiene un final específico
    if (decision.final) {
        gameState.setFinal(decision.final);
        render();
        return;
    }

    // Aplicar impacto de la decisión
    if (decision.impacto) {
        gameState.aplicarImpacto(decision.impacto);
    }

    // Si el juego no ha terminado por condiciones, avanzar escena
    if (!gameState.partidaFinalizada) {
        gameState.avanzarEscena();
        render();
    } else {
        render();
    }
}

// Reiniciar el juego
function restartGame() {
    gameState.reset();
    render();
}

// Exponer funciones globalmente
window.startGame = startGame;
window.tomarDecision = tomarDecision;
window.restartGame = restartGame;
