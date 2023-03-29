class User {
  constructor() {
  }  
};

class user {
  //METODOS
  greeting() {
    return 'Hello';
  }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//CONSTRUCTOR

class user {
  constructor(){
    console.log('Nuevo usuario');
  }
  greeting() {
    return 'Hello';
  }
};

const david = new user();

// THIS

class user {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `Hello`;
  }
  greeting() {
    return `${this.speak()} ${this.name}`; 
  }
}

const newUser = new user('Thiago');
console.log(newUser.greeting());

//SETTERS AND GETTERS

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    return 'Hola';
  }
  greeting() {
    return `${this.speak()} mi nombre es ${this.name}
y tengo ${this.age} años.
    `
  }
  //GETTER Y SETTER
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper2 = new user('Thiago', 19);
console.log(bebeloper2.uAge);
console.log(bebeloper2.uAge = 20); // CON EL SET SE CAMBIA EL VALOR DE "AGE".
console.log(bebeloper2.greeting());
