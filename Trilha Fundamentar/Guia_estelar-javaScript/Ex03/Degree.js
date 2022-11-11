

// transformeDegree('F')
function transformeDegre(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    
    //Fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não indentificado')
    } 

    //Fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    //Fluxo alteranativo, C -> F
    if (celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSing = 'F'
    }

    return formula(updateDegree) + degreeSing
}

try {
    transformeDegre('50F')
    transformeDegre('50G')
    
} catch (error) {
    console.log(error.message)
    
}