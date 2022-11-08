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



/*
Prototype 
* prototype-based language
* prototype chain
* __proto__
*/

/* 

Type conversion (typecasting) vs Type coersion
* Alteração de um tipo de dado para outro tipo

*/

console.log(Number('9')+5)

// Manipulando Strings e Números

// Transformar String em Número e Número em String

let String = "123"
console.log(Number(String))
let Number = 123
console.log(String(Number))

// Manipulando Strings e Números

// Contar quantos caracteres tem uma palavra e quanto dígitos tem um número.
let word2 = "paralelepipedo"
console.log(word2.length)
let number3 = 1234
console.log(String(number3).length)

// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar o ponto por vírgula

let number4 = 325.3265233
console.log(number4.toFixed(2).replace(".",","))

// Manipulando Strings e Números

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

let word1 = "Programar é muito bacana!"
console.log(word1.toLowerCase().toUpperCase())

// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())

// Manipulando Strings 

// Verificar se o texto contém a palavra Amor

let phrase1 = "Eu quero viver o Amor"
console.log(phrase1.includes("Amor"))

//Manipulando Array

// Criar Array com construtor 

let myArray1 = new Array('a', 'b', 'c')
console.log(myArray1)

// Manipulando Array
// Contar elementos de um array 
console.log(["a", "b", "c"].length)


// Manipulando Array
// Transdormar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word))

// Manipulando Array
 let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("node.js")
// adicionar no começo
techs.unshift("sql")
// remover do fim
//techs.pop()
//remover do começo
//techs.shift()
// pegar somento alguns elementos do array
//console.log(techs.slice(1,3))
// remover 1 ou mais items em qualquer posição do array
//techs.splice(1,2)
// encotrar a posição de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)
console.log(techs)

// Control Flow
console.log('a')
console.log('b')

// if..else

let temparature = 36.9
let highTemperature = temparature >= 37.9
let mediumTemperature = temperature < 37.5 && temparature >= 37

if(highTemperature){
    console.log('Febre alta')
} else if(mediumTemperature){
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// switch

function calculate(number1, operator, number2){
    let result = 0 ;
    switch(operator){
        case '+':
            result = number + number2
            break
        case '-':
            result = number - number2
            break
        case '*':
            result = number * number2
            break
        case '/':
            result = number / number2
            break
        default:
            console.log('não implementado')
            break
    }
}
console.log(4, '*', 2)

// throw

function sayMyName(name = ''){
    if (name === ''){
        throw 'Nome é obrigatório'
    }
    console.log(name)
}

// try...catch

try {
    sayMyName('Hed')
} catch(e){
    console.log(e)
}

console.log('após ao try/catch')

// Estrutura de repetição

// for
// break - para a execução do loop
// continue - pula a execução do momento.
for (let index = 10; index < 0; index--) {
    if(index === 5) {
        continue;
    }
    console.log(index)
    
}

// Estrutura de repetição
// while
let i = 4545455454214654654
while(i > 10){
    console.log(i)

    i /= 35
}

// for...of

let namE = 'Hed'
let namEs = ['Sousa','Stefani','Igor']

for(let namE of namEs){
    console.log(namE)
}

// for...in 

let person = {
    name: 'john',
    age: 30,
    weight: 88.6
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}