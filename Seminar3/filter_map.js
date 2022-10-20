const words = [
  "fox",
  "wolf",
  "snake",
  "crocodile",
  "lion",
  "cat",
  "crocodile",
  "horse",
];

const forbiddenWord = "crocodile";
const minLength = 4;

const filterWords1 = (words, forbiddenWord, minLength) => {
  const result = words.filter((word) => {
    if (word !== forbiddenWord && word.length >= minLength) {
      return true;
    }
    return false;
  });
  return result;
};

console.log(filterWords1(words, forbiddenWord, minLength));
// expected output: Array [ 'wolf', 'snake', 'lion', 'horse' ]

const filterWords2 = (words, forbiddenWord, minLength) =>
  words.filter((word) => {
    if (word !== forbiddenWord && word.length >= minLength) {
      return true;
    }
    return false;
  });

console.log(filterWords2(words, forbiddenWord, minLength));
// expected output: Array [ 'wolf', 'snake', 'lion', 'horse' ]

const filterWords3 = (words, forbiddenWord, minLength) =>
  words.filter((word) => word !== forbiddenWord && word.length >= minLength);

console.log(filterWords3(words, forbiddenWord, minLength));
// expected output: Array [ 'wolf', 'snake', 'lion', 'horse' ]

const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

//Folosiți metodele map() și filter() pentru a procesa un array de numere reprezentând ani de naștere obținând vârstele peste 18 ani.
const funct = (arr) => {
  return arr.map((x) => 2022 - x).filter((y) => y > 18);
};

console.log(funct([1999, 2001, 2004, 2010, 2019]));
