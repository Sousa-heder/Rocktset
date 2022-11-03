// Criar um aplicatico de frases motivacionais

// declaration - declaração de função
// function statement
function creatPhrases(){
    console.log('Estudar é muito bom.')
    console.log('Paciência e persistência.')
    console.log('revisão é mãe do aprendizado.')
}

//excute, run, call, invoke
creatPhrases()

// end
console.log("Fim do programa.")

// function expression
// function anonymous
let total = 0

// parâmetros (paremeters)
const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 54

//console.log(`o número 1 é ${number1}`)
//console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)

// Função é um liquidificador 

function fazerSuco(fruta1, fruta2){
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('Banana com ','maçã')

console.log(copo)

// function scope 
let subject 

function createThink(){
    subject = 'study'
}

console.log(subject)
createThink()
console.log(subject)

// function hoisting

sayMyName()

function sayMyName(){
    console.log('Hed')
}

// arrow function 

const sayMyName2 = (nome) =>{
    console.log(nome)
}

sayMyName2('Hed')

// callback function

function meunome(nomE){
    console.log('antes de executar a funcao callback')

    nomE()

    console.log('Depois de excutar a callback')
}

meunome(
    () => {
        console.log('estou em uma callback')
    }
)

/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

*/

function Person(NOme){
    this.NOme = NOme
    this.walk = function(){
        return this.NOme + "está andando"
    }
}

const mayk = new Person("Mayk")
const Joao= new Person("Joao")
console.log(mayk.walk())
console.log(Joao.walk())