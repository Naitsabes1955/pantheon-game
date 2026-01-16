const app = document.getElementById('game-app')

function render(){
    app.innerHTML = ''; //for that, when the screen change, don't mix the objects into, it "delete" and render refresh the game

    if (gameState.screen === 'start'){ 
        renderStartScreen();
    } else if (gameState.screen === 'game'){
        renderGameScreen();
    } else if (gameState.screen === 'win'){
        renderWinScreen();
    } else if (gameState.screen === 'lose'){
        renderLoseScreen();
    }
}

