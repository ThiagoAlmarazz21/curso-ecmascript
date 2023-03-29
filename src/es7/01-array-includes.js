let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers.includes(4));
console.log(numbers.includes(10));

const list = ['thiago', 'guada', 'sol', 'walter'];
const newList = list.map(item => item.toLowerCase());

console.log(newList);
console.log(newList.includes('thiago'));
console.log(newList.includes('oscar'));

