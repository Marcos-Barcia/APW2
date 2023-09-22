const {user} = require ('./datos')

//Ciclo repetitivo for.
console.log(`!---------FOR---------!`);
for (const iterator of user) {
    console.log(`|-| id: ${iterator.id} |-| nombre: ${iterator.nombre} |-| identificador: ${iterator.identificador}`);
}


//Ciclo repetitivo for Each.
console.log(`!---------ForEach---------!`);
user.forEach(user => {
    console.log(`|-| id: ${user.id} |-| nombre: ${user.nombre} |-| identificador: ${user.identificador}`);
});


//Definimos una variable de control para controlar el ciclo repetitivo.
var control = 0;
//Ciclo repetitivo do while en el cual implementamos una sentencia de forEach anidada para poder consultar los parametos indicados.
do{
    const iteracion = user
    console.log(`!---------DoWhile---------!`);
    iteracion.forEach(user =>
    console.log(`|-| id: ${user.id} |-| nombre : ${user.nombre} |-| identificador: ${user.identificador} `))
    control++;
}while(control < user.length)
