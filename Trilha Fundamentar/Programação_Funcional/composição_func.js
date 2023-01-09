const peaple = ['Rafa', 'Diego', 'Dani', 'Rod']//array 
const upperCasePeopleThatStarsWithD = people
.filter(people => people.starWith('D'))
.map(dperson => dperson.toUpperCase())