// FLAT
const array = [1, 2, 3, 4, 5, [1,3,5, [1, 2, 3]]];
console.log(array.flat(3));

// FLAT MAP
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));