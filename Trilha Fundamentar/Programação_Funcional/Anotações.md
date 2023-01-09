# Progamação Funcional?
É um paradigma de progamação como a Orientação a Objetos, por exemplo
    * Uma maneira de resolver problemas.

# Funções 

* Pequenas tarefas dentro de uma função
* Abstrair um problema e isolar ele dentro da função
* Não modificar dados fora dela 
* Pequenas e bem específicas no que fazem. 

# Caracteristicas principais da função

* Um DADO (ou mais) entra em uma função e um novo dado sai dessa função
* Não altera os dados 
* Não guarda o estado (stateless)

Linguagens Funcionais 
* JavaScript(multiparadigma)
* PHP (multiparadigma)
* Elixir
* Haskell 

# Pontos Positivos 

* Fácil manutenção
* Fácil uso de testes
    ° Funções isoladas e consistentes 
* Códigos mais confiveis´

# Princípios 

# PARADIGMAS
* Programação Imperativa
* Programação Declarativa

# Dados 
* Imutalibidade
* Stateless

# FUNÇÕES
* Independentes
* Puras
* Higher-order
* First-class
* Composição

# Programação imperativa 

* O código é pensado e gerado em sequência. 
* O código é pensado como um passo-a-passo, como uma receita de bolo
* Uma coisa depende da outra 
* O estado de um dado é alterado constantemente causando mutações nas variáveis
* Orientação a Objetos é um tipo de paradigma imperativo

# Programação declarativa

* O código é gerado para fazer algo, não importa como
* O que fazer e não como fazer 
* Não há necessidade de um passo a passo no código
* Programação funcional é um tipo de paradigma declarativo

# Imutabilidade 

* Uma variável não vai variar
* Se você precisar mudar uma variável, você não muda, você cia uma nova. 

# Stateless 

* Não guarda estado
* A função só conhece dados entregues a ela 
* A resposta não poderá variar 

# FUNÇÕES
Vamos conhecer algums características das funções na programação funcional. 

° Funções Independentes
° Funções Puras
° First-class Functions
° Higher-order Functions
° Composição de Funções 

# Funções independentes 

* Deverá ter ao menos 1 argumento
* Deverá retornar algo
* Nada que acontecer lá dentro afeta o mundo externo
    ° Dados imutáveis 
    ° não guarda estado
* Não faremos uso de loops (for, while), mas se houver necessidade de tal, usaremos recursão (A função chama ela mesma)

# Funções puras 

* Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
* Não deverá sofre nenhuma interferência do mundo externo a ela
* Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
* Não terá nenhum efeito colateral no seu código
    ° Não irá modificar nenhum dado.
    ° Não irá guarda nenhum estado. 

# First-class function
* Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
* A função poderá ser entendida como uma variável

# Hifher-order function 
* Funções que recebem funções como argumentos
* Funções que poderão retornar outras funções

# Composições de funções 
* Um encadeamento de funções
* Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função, que retorna.

# Conclusão

* Paradigma de Programação
* Linguagens 
* Conceitos fundamentais
    ° Stateless, Imutabilidade, Função pura, Higher-ordes
