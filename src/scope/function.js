const fruits = () => {
  var fruit = "apple";
  console.log(fruit);
};

fruits();
console.log(fruit);

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  // let y = 2; var can reassigned its value let can't
  console.log(x);
  console.log(y);
};

anotherFunction();

console.log(x);
console.log(y);