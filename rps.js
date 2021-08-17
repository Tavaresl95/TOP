choice1 = prompt("Pedra, papel ou tesoura? ")
ajuste1 = choice1.toUpperCase()
console.log(ajuste1)

a1 = "PEDRA"
a2 = "PAPEL"
a3 = "TESOURA"
resp = ["PEDRA", "PAPEL", "TESOURA"]

function computerPlay() {
    play = resp[Math.random(0,2)]
    console.log(play)

}

computerPlay()