// Métodos fundamentais 
/*  ° push(): adicionar um elemento à pilha
    ° pop(): remover um elemento do topo da pilha
    ° peek(): obter o elemento do topo da pilha */

// Passo 1: Modelando 
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
}

    pop() {
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
    }
    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
};

// Passo 2: Utilizando
const stack = new Stack()

// Adicionar dados
stack.push('learning')
stack.push('data')

console.log(stack.peek('Structures'))

console.log(stack.peek())

// Remover 

stack.pop()
console.log(stack.pop())

console.log(stack.peek())