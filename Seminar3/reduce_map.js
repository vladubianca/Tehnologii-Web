const squareDimensions = [3, 5, 12, 3, 5, 3];

const getTotalArea1 = (squareDimensions) => {
  return squareDimensions.map((side) => {
    return side * side;
  });
};

console.log(getTotalArea1(squareDimensions));

const getTotalArea2 = (squareDimensions) => {
  return squareDimensions
    .map((side) => {
      return side * side;
    })
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
};

console.log(getTotalArea2(squareDimensions));

const getTotalArea3 = (squareDimensions) =>
  squareDimensions
    .map((side) => side * side)
    .reduce((prev, current) => prev + current, 0);

console.log(getTotalArea3(squareDimensions));

//implementați o funcție care primește ca parametrii un array de numere și un număr și returnează suma tuturor numerelor din array divizibile cu cel de-al doilea parametru.
const sumaMultipli = (arr, nr) =>
  arr
    .filter((el) => el % nr === 0)
    .reduce((prev, current) => prev + current, 0);

console.log(sumaMultipli([10, 25, 30, 40, 31], 10));
console.log(sumaMultipli([10, 15, 18, 21, 29, 19], 3));
