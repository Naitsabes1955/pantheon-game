// js/ui.js - Renderizado de pantallas con Bootstrap

const app = document.getElementById('game-app');

function render() {
    app.innerHTML = '';

    if (gameState.screen === 'start') {
        renderStartScreen();
    } else if (gameState.screen === 'game') {
        renderGameScreen();
    } else if (gameState.screen === 'result') {
        renderResultScreen();
    } else if (gameState.screen === 'lose') {
        renderLoseScreen();
    }
}

// ==================== PANTALLA DE INICIO ====================
function renderStartScreen() {
    app.innerHTML = `
        <div class="screen start-screen">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="card game-card border-0 shadow-lg">
                            <div class="card-body text-center p-5">
                                <div class="d-flex align-items-center justify-content-center gap-3 mb-3">
                                    <i class="bi bi-lightning-charge-fill fs-1 lightning"></i>
                                    <h1 class="game-title mb-0 fs-2">EL JUICIO DE LOS DIOSES</h1>
                                    <i class="bi bi-lightning-charge-fill fs-1 lightning"></i>
                                </div>
                                <p class="text-secondary fst-italic mb-4">Toma el rol de Zeus y decide el destino del Olimpo</p>
                                
                                <div class="mb-4 text-light opacity-75">
                                    <p class="mb-2">Los mortales han abandonado los templos. Los Titanes susurran desde el Tártaro.</p>
                                    <p>Tus decisiones determinarán si serás recordado como un dios justo... o un tirano.</p>
                                </div>
                                
                                <button class="btn btn-golden btn-lg px-5 py-3 rounded-pill mb-4" onclick="startGame()">
                                    COMENZAR JUICIO
                                </button>
                                
                                <hr class="border-warning opacity-25">
                                
                                <div class="mt-4">
                                    <div class="d-flex align-items-center gap-2 mb-2 justify-content-center bg-dark bg-opacity-25 rounded p-2">
                                        <span class="stat-icon energia"><i class="bi bi-lightning-fill"></i></span>
                                        <span class="text-light">Energía - Tu poder divino</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 mb-2 justify-content-center bg-dark bg-opacity-25 rounded p-2">
                                        <span class="stat-icon fe"><i class="bi bi-person-arms-up"></i></span>
                                        <span class="text-light">Fe - Devoción de los mortales</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 justify-content-center bg-dark bg-opacity-25 rounded p-2">
                                        <span class="stat-icon temor"><i class="bi bi-exclamation-triangle-fill"></i></span>
                                        <span class="text-light">Temor - Miedo que inspiras</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==================== PANTALLA DE JUEGO ====================
function renderGameScreen() {
    const escena = gameState.getEscenaActual();

    if (!escena) {
        determinarFinalPorStats();
        return;
    }

    const statsHTML = renderStats();
    const decisionesHTML = escena.decisiones.map((decision, index) => `
        <button class="btn btn-decision w-100 py-3 px-4 rounded-3 mb-2" onclick="tomarDecision(${index})">
            <i class="bi bi-arrow-right-circle me-2"></i>${decision.texto}
        </button>
    `).join('');

    const bgStyle = escena.imagenFondo ? `style="background-image: url('${escena.imagenFondo}')"` : '';

    app.innerHTML = `
        <div class="screen game-screen" ${bgStyle}>
            <div class="container py-4">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
                        ${statsHTML}
                        
                        <div class="card game-card border-0 shadow-lg card-animate mt-4">
                            <div class="card-body p-4">
                                <div class="text-center mb-4">
                                    <span class="badge bg-secondary mb-2">Escena ${escena.id} de ${historiaZeus.length}</span>
                                    <h2 class="escena-titulo mb-2">${escena.escena}</h2>
                                    <span class="badge bg-purple text-white px-3 py-2">
                                        <i class="bi bi-person-fill me-1"></i>${escena.personaje}
                                    </span>
                                </div>
                                
                                <p class="text-center text-light mb-4 fs-6 lh-lg">${escena.historia}</p>
                                
                                <div class="d-grid gap-2">
                                    ${decisionesHTML}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==================== RENDERIZAR STATS ====================
function renderStats() {
    const stats = [
        { key: 'energia', icon: 'bi-lightning-fill', name: 'Energía', value: gameState.energia, color: 'energia' },
        { key: 'fe', icon: 'bi-person-arms-up', name: 'Fe', value: gameState.fe, color: 'fe' },
        { key: 'temor', icon: 'bi-exclamation-triangle-fill', name: 'Temor', value: gameState.temor, color: 'temor' }
    ];

    const statsHTML = stats.map(stat => {
        const isDanger = (stat.key === 'energia' && stat.value <= 20) ||
            (stat.key === 'fe' && stat.value <= 20) ||
            (stat.key === 'temor' && stat.value >= 80);

        return `
            <div class="col-4">
                <div class="stat-item bg-black bg-opacity-50 rounded-3 p-3 border border-secondary border-opacity-25 ${isDanger ? 'danger' : ''}">
                    <div class="d-flex align-items-center gap-2 mb-2">
                        <span class="stat-icon ${stat.color}"><i class="bi ${stat.icon}"></i></span>
                        <span class="small text-uppercase text-light opacity-75 fw-bold" style="font-size: 0.7rem; letter-spacing: 1px;">${stat.name}</span>
                        <span class="ms-auto fw-bolder text-white fs-5">${stat.value}</span>
                    </div>
                    <div class="progress bg-dark bg-opacity-50" style="height: 6px;">
                        <div class="stat-bar ${stat.color}" style="width: ${stat.value}%"></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="card game-card border-0 p-3">
            <div class="row g-2">
                ${statsHTML}
            </div>
        </div>
    `;
}

// ==================== PANTALLA DE RESULTADO ====================
function renderResultScreen() {
    const final = finales[gameState.tipoFinal];
    if (!final) {
        renderLoseScreen();
        return;
    }

    const icons = {
        justo: 'bi-trophy-fill text-warning',
        tirano: 'bi-fire text-danger',
        caida: 'bi-x-circle-fill text-purple'
    };

    const iconClass = icons[gameState.tipoFinal] || 'bi-question-circle';
    const bgStyle = final.imagen ? `style="background-image: url('${final.imagen}')"` : '';

    app.innerHTML = `
        <div class="screen result-screen ${final.clase}" ${bgStyle}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-7">
                        <div class="card game-card border-0 shadow-lg card-animate">
                            <div class="card-body text-center p-5">
                                <i class="bi ${iconClass} result-icon"></i>
                                <h1 class="result-title mt-3 mb-3" style="font-family: 'Cinzel', serif;">${final.titulo}</h1>
                                <p class="text-light mb-4 fs-6">${final.descripcion}</p>
                                
                                <div class="d-flex justify-content-center gap-4 mb-4 p-3 bg-dark bg-opacity-50 rounded-3">
                                    <span><i class="bi bi-lightning-fill text-warning"></i> ${gameState.energia}</span>
                                    <span><i class="bi bi-person-arms-up text-info"></i> ${gameState.fe}</span>
                                    <span><i class="bi bi-exclamation-triangle-fill text-danger"></i> ${gameState.temor}</span>
                                </div>
                                
                                <button class="btn btn-outline-light btn-lg px-5 rounded-pill" onclick="restartGame()">
                                    <i class="bi bi-arrow-clockwise me-2"></i>JUGAR DE NUEVO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==================== PANTALLA DE DERROTA ====================
function renderLoseScreen() {
    app.innerHTML = `
        <div class="screen lose-screen">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-7">
                        <div class="card game-card border-0 shadow-lg border-danger card-animate">
                            <div class="card-body text-center p-5">
                                <i class="bi bi-emoji-dizzy-fill text-danger result-icon"></i>
                                <h1 class="text-danger mt-3 mb-3" style="font-family: 'Cinzel', serif;">FIN DEL REINADO</h1>
                                <p class="text-light mb-4">${gameState.mensajeFinal}</p>
                                
                                <div class="d-flex justify-content-center gap-4 mb-4 p-3 bg-dark bg-opacity-50 rounded-3">
                                    <span><i class="bi bi-lightning-fill text-warning"></i> ${gameState.energia}</span>
                                    <span><i class="bi bi-person-arms-up text-info"></i> ${gameState.fe}</span>
                                    <span><i class="bi bi-exclamation-triangle-fill text-danger"></i> ${gameState.temor}</span>
                                </div>
                                
                                <button class="btn btn-outline-danger btn-lg px-5 rounded-pill" onclick="restartGame()">
                                    <i class="bi bi-arrow-clockwise me-2"></i>INTENTAR DE NUEVO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==================== DETERMINAR FINAL POR STATS ====================
function determinarFinalPorStats() {
    if (gameState.fe > gameState.temor) {
        gameState.setFinal('justo');
    } else if (gameState.temor > 70) {
        gameState.setFinal('tirano');
    } else {
        gameState.setFinal('caida');
    }
    render();
}
