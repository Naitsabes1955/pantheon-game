// js/state.js - Estado del juego

class GameState {
    constructor() {
        // Estado del Juego
        this.dios = "Zeus";
        this.energia = 100;
        this.fe = 50;
        this.temor = 50;

        // Sistema de Pantallas
        this.screen = "start";

        // Lógica de Progresión
        this.escenaActual = 0;
        this.partidaFinalizada = false;
        this.mensajeFinal = "";
        this.tipoFinal = null;
    }

    // Aplica los impactos de una decisión
    aplicarImpacto(impacto) {
        if (this.partidaFinalizada) return;

        if (impacto.fe !== undefined) {
            this.fe += impacto.fe;
            this.fe = Math.max(0, Math.min(100, this.fe));
        }
        if (impacto.temor !== undefined) {
            this.temor += impacto.temor;
            this.temor = Math.max(0, Math.min(100, this.temor));
        }
        if (impacto.energia !== undefined) {
            this.energia += impacto.energia;
            this.energia = Math.max(0, Math.min(100, this.energia));
        }

        this.verificarCondiciones();
    }

    // Avanza a la siguiente escena
    avanzarEscena() {
        this.escenaActual++;
    }

    // Verifica condiciones de fin de juego
    verificarCondiciones() {
        if (this.fe <= 0) {
            this.finalizarJuego("Los mortales te han olvidado. Has desaparecido del Olimpo.", "lose");
        } else if (this.temor >= 100) {
            this.finalizarJuego("Tu tiranía fue excesiva. Has sido derrocado por los otros dioses.", "lose");
        } else if (this.energia <= 0) {
            this.finalizarJuego("Has agotado tu poder divino. Ya no puedes gobernar.", "lose");
        }
    }

    // Finaliza el juego con un tipo de final
    finalizarJuego(mensaje, tipo) {
        this.partidaFinalizada = true;
        this.mensajeFinal = mensaje;
        this.tipoFinal = tipo;
        this.screen = tipo === "lose" ? "lose" : "result";
    }

    // Establece un final específico (justo, tirano, caida)
    setFinal(tipoFinal) {
        const final = finales[tipoFinal];
        if (final) {
            this.tipoFinal = tipoFinal;
            this.partidaFinalizada = true;
            this.mensajeFinal = final.descripcion;
            this.screen = "result";
        }
    }

    // Obtiene la escena actual
    getEscenaActual() {
        if (this.escenaActual < historiaZeus.length) {
            return historiaZeus[this.escenaActual];
        }
        return null;
    }

    // Reinicia el juego
    reset() {
        this.energia = 100;
        this.fe = 50;
        this.temor = 50;
        this.escenaActual = 0;
        this.partidaFinalizada = false;
        this.mensajeFinal = "";
        this.tipoFinal = null;
        this.screen = "start";
    }
}

// Instancia global
window.gameState = new GameState();