// js/logic.js - Lógica del juego

// Función para obtener una escena por ID
function getEscenaById(id) {
    return historiaZeus.find(escena => escena.id === id);
}

// Función para verificar si hay más escenas
function hayMasEscenas() {
    return gameState.escenaActual < historiaZeus.length;
}

// Función para obtener el progreso del juego
function getProgreso() {
    return {
        escenaActual: gameState.escenaActual + 1,
        totalEscenas: historiaZeus.length,
        porcentaje: Math.round(((gameState.escenaActual + 1) / historiaZeus.length) * 100)
    };
}

// Función para calcular el final basado en stats actuales
function calcularFinalPorStats() {
    const { fe, temor, energia } = gameState;

    // Si la fe es mayor que el temor, final justo
    if (fe > temor && energia > 30) {
        return 'justo';
    }
    // Si el temor es muy alto, final tirano
    else if (temor >= 70) {
        return 'tirano';
    }
    // Caso contrario, caída
    else {
        return 'caida';
    }
}

// Función para obtener descripción del estado actual
function getEstadoDescripcion() {
    const { fe, temor, energia } = gameState;

    if (energia <= 20) {
        return "Tu poder divino se debilita...";
    } else if (fe <= 20) {
        return "Los mortales te están olvidando...";
    } else if (temor >= 80) {
        return "Tu tiranía genera descontento...";
    } else if (fe > 70) {
        return "Los mortales te adoran.";
    } else if (temor > 70) {
        return "El miedo domina la tierra.";
    } else {
        return "El equilibrio se mantiene.";
    }
}
