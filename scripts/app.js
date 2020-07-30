const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1


// puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.message
// console.log(game1.status)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.message

    let chars = game1.puzzle.split('')
    chars.forEach((i) => {
        const spanEl = document.createElement('span')
        spanEl.textContent = i     
        puzzleEl.appendChild(spanEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', (e)=> {
    startGame()
})

startGame()

// getPuzzle('1').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(err)
// })

// getCurrentCountry().then((country) => {
//     console.log(country)
// }).catch((err)=> {
//     console.log(err)
// })