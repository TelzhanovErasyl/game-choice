let games = document.querySelectorAll('.game-card')
let gamesList = document.querySelector('.games-list')

let allBtn = document.querySelector('#allBtn')
let shooterBtn = document.querySelector('#shooterBtn')
let adventureBtn = document.querySelector('#adventureBtn')
let plotBtn = document.querySelector('#plotBtn')

allBtn.addEventListener('click', function() {
    gamesList.innerHTML = ''
    games.forEach(function(game) {
        gamesList.appendChild(game.cloneNode(true))
    })
})
shooterBtn.addEventListener('click', function() {
    gamesList.innerHTML = ''
    games.forEach(function(shooter) {
        if (shooter.id == 'shooter') {
            gamesList.appendChild(shooter.cloneNode(true))
        }
    })
})

adventureBtn.addEventListener('click', function() {
    gamesList.innerHTML = ''
    games.forEach(function(adventure) {
        if (adventure.id == 'adventure') {
            gamesList.appendChild(adventure.cloneNode(true))
        }
    })
})

plotBtn.addEventListener('click', function() {
    gamesList.innerHTML = ''
    games.forEach(function(plot) {
        if (plot.id == 'plot') {
            gamesList.appendChild(plot.cloneNode(true))
        }
    })
})
