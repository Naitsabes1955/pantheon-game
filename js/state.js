// js/state.js

class GameState {
    constructor() {
        // --- 1. Estado del Juego ---
        this.dios = "Zeus";
        this.energia = 100;    
        this.fe = 50;         
        this.temor = 50;      
        
        // --- 2. Sistema de Pantallas ---
        // Ajustado a 'screen' para coincidir con el Integrante 1 (main.js)
        this.screen = "start"; 
        
        // --- 3. Lógica de Progresión ---
        this.rondaActual = 0;
        this.maxRondas = 10;
        this.partidaFinalizada = false;
        this.mensajeFinal = "";
    }

    // --- 4. Mecánica Central ---
    procesarDecision(tipoEfecto) {
        if (this.partidaFinalizada) return;

        if (tipoEfecto === "castigo") {
            this.temor += 15;
            this.fe -= 5;
            this.energia -= 10;
        } else if (tipoEfecto === "bendicion") {
            this.fe += 15;
            this.temor -= 10;
            this.energia -= 5;
        }

        this.rondaActual++;
        this.verificarCondiciones();
        
        // TIP: Después de cada decisión, llamamos a render para que el Integrante 3 dibuje los cambios
        if (typeof render === 'function') render();
    }

    // --- 5. Lógica de Juego ---
    verificarCondiciones() {
        if (this.fe <= 0) {
            this.finalizarJuego("Los mortales te han olvidado. Has desaparecido del Olimpo.");
        } else if (this.temor >= 100) {
            this.finalizarJuego("Tu tiranía fue excesiva. Has sido derrocado.");
        } else if (this.energia <= 0) {
            this.finalizarJuego("Has agotado tu poder divino.");
        } 
        else if (this.rondaActual >= this.maxRondas) {
            this.finalizarJuego("¡Victoria! Has restaurado el equilibrio.");
        }
    }

    finalizarJuego(mensaje) {
        this.partidaFinalizada = true;
        this.mensajeFinal = mensaje;
        this.screen = "result"; // O "resultado", según acuerden con el Integrante 3
    }

    reset() {
        this.energia = 100;
        this.fe = 50;
        this.temor = 50;
        this.rondaActual = 0;
        this.partidaFinalizada = false;
        this.screen = "start";
        if (typeof render === 'function') render();
    }
}

// IMPORTANTE: Como no usan import/export, creamos la instancia globalmente
window.gameState = new GameState();