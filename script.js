// object person  

let person = {
  name: "Frans",
  age: 48
};

// alles laten zien
console.log(person);

/*
//alleen naam laten zien.
console.log(person.name);

//  alleen leeftijd laten zien.
console.log(person.age);

// andere manier (waarschijnlijk fout!!)
console.log(person ['name'], ['age']


let evaluations =
  [7, 10, 9]
console.log(evaluations);

// lengte laten zien
let selectedColors = ['groen', 'blauw', 'rood']
console.log(selectedColors.length)
*/
const selectedColors = ['groen', 'blauw', 'rood'];
let count = selectedColors.push('geel')
let cijfer = selectedColors.push('5')
let tekst = selectedColors.push('greeting: hi ik ben een object')
console.log(selectedColors[5])