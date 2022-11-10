// Criando uma function para verificações de notas 

function getScore(score){

    // A logica sobre as notas 
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    // a Variavel de retorno do resultado da logica
    let scoreFinal;

    if (scoreA) {
        scoreFinal = 'A'  
    }else if(scoreB) {
        scoreFinal = 'B'
    }else if(scoreC) {
        scoreFinal = 'C'
    }else if(scoreD) {
        scoreFinal = 'D'
    }else if(scoreF) {
        scoreFinal = 'F'
    }else {
        scoreFinal = "Nota Inválida"
    }

    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(10))
console.log(getScore(-1))
console.log(getScore(89))
console.log(getScore(65))
console.log(getScore(75))
console.log(getScore(90))