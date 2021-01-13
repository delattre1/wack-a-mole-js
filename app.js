const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelectorAll('#time-left')
var score = document.querySelector('#score')

var result = 0 
var currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    var randomPosition = square[Math.floor(Math.random () * 9 )]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}   

square.forEach(id=> {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result ++
            score.textContent = result
        }
    })
})

function moveMole() {
    var timerId = null
    timerId = setInterval(randomSquare, 1000)
    var timerNho = null
    timerNho = setInterval(countDown, 1000)

}

moveMole()

function countDown(){
    currentTime --
    timeLeft.textContent = currentTime


    if (currentTime === 0) {
        clearInterval(timerId)
        alert('Game Over! Your score: '+ result)
    }
}

var timerId = setInterval(countDown, 1000)

