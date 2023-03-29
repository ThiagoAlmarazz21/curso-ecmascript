const anotherNumber = 1;
const validate = anotherNumber ?? 5;
console.log(validate);
// RETORNA 1

const anotherNumber2 = null;
const validate2 = anotherNumber ?? 5;
console.log(validate);
// RETORNA 5