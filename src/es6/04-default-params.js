function newUser (name, age, country) {
  var name = name || 'Oscar';
  var age = age || '34';
  var country = country || 'Mex'
  console.log(name, age, country);
}

newUser();
newUser('Thiago', 19, 'Arg');

function newAdmin(
  name = 'Oscar', 
  age = '34', 
  country = 'Mex') {
  console.log(name, age, country);
};

newAdmin();
newAdmin('Daniel', 20, 'Arg');