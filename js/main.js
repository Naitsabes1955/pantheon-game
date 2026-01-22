// js/main.js - Punto de entrada del juego

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function () {
    // Verificar que gameState existe
    if (!window.gameState) {
        console.error('Error: gameState no está definido');
        return;
    }

    // Verificar que render existe
    if (typeof render !== 'function') {
        console.error('Error: la función render() no existe');
        return;
    }

    // Establecer pantalla inicial
    gameState.screen = 'start';

    // Renderizar pantalla de inicio
    render();

    console.log('🎮 El Juicio de los Dioses - Cargado correctamente');
});