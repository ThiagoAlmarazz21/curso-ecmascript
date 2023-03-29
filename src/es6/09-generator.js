
function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['oscar', 'david', 'ana', 'ulises', 'thiago']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
