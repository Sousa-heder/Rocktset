/*  Métodos fundamentais
    * enqueue(): adicionar um elemento ao final da fila
    * dequeue(): remover o primerio elemento a entrar na fila
*/

// Passa 1: Modelando
class Queue {
    constructor(){
        this.data = []
    }
    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou a fila!`)
    }
    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}

// Passa 2: utilizando
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.enqueue('Ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()