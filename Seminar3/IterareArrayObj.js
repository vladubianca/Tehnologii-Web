var days = ["monday", "tuesday", "wednesday", "thursday", "friday"];

for (var day in days) {
  console.log(day);
  console.log(days[day]);
}

for (var day of days) {
  console.log(day);
}

//Implementează o funcție care primește ca parametru un string și returnează frecvența de apariție a fiecărui cuvânt
// input: "the quick brown fox jumps over the lazy dog";
// output:
// {
//   the: 2,
//   quick: 1,
//   brown: 1,
//   fox: 1,
//   jumps: 1,
//   over: 1,
//   lazy: 1,
//   dog: 1
// }

const frecventa = (str) => {
  let arr = str.split(" ");
  //console.log(arr);
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
};

console.log(frecventa("the quick brown fox jumps over the lazy dog"));
