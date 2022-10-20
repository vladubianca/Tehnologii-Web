function addToArray() {
  let args = arguments;
  let array = args[0];

  for (var i = 1; i < args.length; i++) {
    array.push(args[i]);
  }
  return array;
}

let array = ["a"];

console.log(addToArray(array, "b", "c").join(", "));

//Varianta simplificata
function addToArray2(array, ...args) {
  for (var i = 0; i < args.length; i++) {
    array.push(args[i]);
  }
  return array;
}

let array2 = ["a"];

console.log(addToArray2(array2, "b", "c").join(", "));

//Implementează o funcție care primește ca parametru o listă de numere și returnează un array conținând doar numere pare din listă.

//input: 2, 5, 6, 7
//output: [2, 6]

//input: 2, 5, 6, 7, 9, 10
//output: [2, 6, 10]

//input: 2
//output: [2]

const nrPare = (...args) => {
  let arr = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      arr.push(args[i]);
    }
  }
  return arr;
};

console.log(nrPare(2, 5, 6, 7));
console.log(nrPare(2, 5, 6, 7, 9, 10));
console.log(nrPare(2));
