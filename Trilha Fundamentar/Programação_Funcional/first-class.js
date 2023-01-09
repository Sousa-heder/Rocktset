const sayName = () => console.log('Hed')
const runFunction = fn => fn()

runFunction(sayName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))