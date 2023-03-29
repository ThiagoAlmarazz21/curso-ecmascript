const list = new Set(); // Set es un objeto iterable que permite almacenar valores UNICOS osea que no se pueden repetir de cualquier tipo, incluso valores primitivos u objetos referenciados.

// Agrefando valores al Set
list.add('thiago');
list.add('walter').add('sol').add('guada');

// MOSTRANDO LOS VALORES DEL SET
console.log(list);

// VERIFICANDO SI UN VALOR EXISTE EN EL SET
console.log(list.has('guada')); //true
console.log(list.has('alaska')); //false

// ELIMINANDO UN VALOR DEL SET
list.delete('sol');

// VOLVIENDO A MOSTRAR LOS VALORES DEL SET DESPUES DE ELIMINAR UN VALOR
console.log(list);

// MOSTRANDO EL TAMAÑO DEL SET
console.log(`El tamaño del set es de: ${list.size}`);

