## Gerenciando dados 

Estrutura de  dados tem a ver com a gestão das informações	da aplicação.

Para esse gerenciamento, podemos dividir em 3 etapas:

1. Modelar a estrutura;
2. Dar a vida à estrutura (instanciar essa estrutura);
3. Criar as funcionalidades dessa estrutura.
    * Exemplo: inserir, excluir, buscar, exibir, contar ...


# Arrays

Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação. 

Uma das estruturas mais básicas, simples de criar e utilizar.

['a', 10, 'd', true] // total de 4 elementos
//0   1    2     3


# Características 

* Acesso pelo index 
* Respeita a ordem de inserção dos elementos
* Aceita valores duplicados 
* Dependendo do tamnaho do Arrays, para encotrar e/ou deletar um elemento, será necessário um uso maior de performace

## Arrays no JavaScript

* São dinâmicos
* Você poderá ter dados de diferentes tipos misturados dentro de um Array. Strings, numbers, booleans, objetos, funções e até outros arrays.
* Existem muitos métodos já implementados
    ° push(), pop(), find(), filter() entre outros 

## Matrix 

Matriz ou Vetor muiltidimensional.

Significa que é um Array, dentro de outro array.
Poderemos ter muitos níveis.


## Stack

Tradução de Stack é pilha.

Como uma pilha de livros.

* linear, um após outro
* O último a entrar na pilha é o primeiro a sair

## Conceitos 

* LIFO: Last In First Out
    ° O último elemento a entrar na pilha, aquele elemento do topo da pilha, é o primeiro a sair

## Queue

Tradução de Queue é fila.

Como uma fila em uma loja ou restaurante.

* Linear
* O primeiro a entrar é o primeiro a sair 

## Conceitos 
* FIFO: First In First Out
    ° O primeiro elemento a entrar na fila, é o primeiro a sair dela
    ° Front (frente) é a referência do primeiro elemento a entrar na fila
    ° Back (fundo) é a referência do ultimo elemento a entrar na fila