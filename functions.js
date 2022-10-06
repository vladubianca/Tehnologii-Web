// let sayHello = function (name) {
//   return "Hello, " + name;
// };

//Arrow function
// let sayHello = (name) => {
//   return "Hello, " + name;
// };

//Forma simplificata:
// let sayHello = (name) => "Hello, " + name;

// console.log(sayHello("me"));


//Functia cu parametrii din linia de comanda
let sayHello = (name) => "Hello, " + name;

console.log(sayHello(process.argv[2]));
