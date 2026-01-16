function init(){
    if (!window.gameState){
        console.log('gameState does not defined')
        return;
    }

    gameState.screen = 'start'; //initial screen or main screen.

    if (typeof render === 'function'){
        render(); // it check that render exist, it is for avoid errors if it is not chargedz
    } else {
        console.error('the function render() do not exist')
    }
}
// (si llegan a tener errores esto es para que puedan identificarlos facilmente aunque no hay mucha utilidad en ellos)-delete