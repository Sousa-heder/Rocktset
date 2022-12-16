const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação (index) começa pelo número 0 
console.log(pilotos [0])
console.log(pilotos [2])

// acessar o tamanho do array
console.log(pilotos.length)

// interavel 
for (let piloto of pilotos) {
    console.log(piloto)
}

// adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

// encontrar elemento
const senna = pilotos.find(piloto => piloto === 'Senna');
console.log(senna)