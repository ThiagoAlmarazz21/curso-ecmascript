// Ahora se puede cambiar de un array a un objeto
const entries = new Map([['name', 'thiago'], ['age', 34]]);
console.log('Array original', entries);
console.log('Array transformaod a object' ,Object.fromEntries(entries));