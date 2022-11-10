// Criando um Ex para a avaliação das desepesas da familia

let family = {
    incomes: [2500, 653.2, 4541, 654.5],
    expenses: [2454, 4545, 545.4, 455]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }
    return total
    
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "Negativo"
    if (itsOk) {
        balanceText = "Positivo"
    }

    console.log(`Seu Saldo é ${balanceText}: ${total.toFixed(2)} R$`)

}

calculateBalance()