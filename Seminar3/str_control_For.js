function occurences(text, character) {
  let count = 0;
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === character) {
      count++;
    }
  }
  return count;
}

console.log(occurences("sample text", "e"));

//Varianta simplificata folosind split()
function occurences2(text, character) {
  //!!!
  console.log(text.split(character)); //scoate e-ul si returneaza un array de siruri de caractere
  return text.split(character).length - 1;
}

console.log(occurences2("sample texte", "e"));

//Varianta simplificata folosind lamnda expression
let occurences3 = (text, character) => text.split(character).length - 1;

console.log(occurences3("sample text", "e"));

//Implementează o funcție care primește ca parametru un array de int-uri și returnează un array conținând doar numere pare din listă.
//input: [2, 4, 6, 7, 8]
//output: [2, 4, 6, 8]
const nrPare = (arr) => {
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
};

console.log(nrPare([2, 4, 6, 7, 8]));

console.log(3 == "3"); //true  (le face cast la object si apoi foloseste toString)
console.log(3 === "3"); //false
console.log(true + true + true == 3); //true (pentru ca true are valoarea 1 => 3=3)
console.log(0.1 + 0.2 == 0.3); //false
console.log(0.1 + 0.2); //0.30000000000000004
