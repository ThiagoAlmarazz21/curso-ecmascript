var lastName = 'Thiago'; //Decalrar y Asignar VARIABLE GLOBAL

lastName = 'Daniel';  //Reasignando VARIABLE

console.log(lastName);

let fruit = 'Apple'; //Declarar y asignar VARIABLE BLOCK SCOPE
fruit = 'Kiwi'; // Reasignacion  de variable
console.log(fruit);

const animal = 'Dog';

animal = 'Cat';

console.log(animal);

const fruits = ()  => {
  if(true) {
    var  fruit1 =  'Apple';
    let fruit2 = 'Banana';
    const fruit3 = 'Pera';
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();