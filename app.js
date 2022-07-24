const board = document.getElementById('board')
var change = document.getElementById('change')
const player1 = "❌"
const player2 = "⭕"
var tourn = 0


board.addEventListener('click', (e)=>{
    if (e.target.className === "box"){
        if (tourn % 2 === 0) {
            e.target.innerText = player1
            change.innerText = `Turno de: ${player2}`
        } else if(tourn % 2 === 1){
            e.target.innerText = player2
            change.innerText = `Turno de: ${player1}`
        }
        tourn++
        return(tourn)
        
    }
})

