//Activity 1

const greet = () => {
  console.log("Hello CodeNation!");
};

const repeatFunction = (fn) => {
  for (i = 0; i < 5; i++) {
    fn();
  }
};

repeatFunction(greet);

//Activity 2

const nums = [1, 2, 3, 4, 5];
const multi3 = nums.map((x) => x * 3);
console.log(multi3);

// Activity 3
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const doMaths = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};

console.log(doMaths(2)(2, add));
