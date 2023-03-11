export const RecursionConcept = () => {
  // example 1->

  // write a function that raises the input number to its natural power.
  // ex->  pow(2, 2) = 4  , pow(2, 3) = 8

  // it can be solved in different ways.

  // 1.  using for loop->

  function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }

  const output = pow(2, 3);
//   console.log(output);

  // using recursion ->

  function pow2(x, n) {
    if (n === 1) {
      return x;
    } else {
      return x * pow2(x, n - 1);  // if we dont pass any input it will throw error
    }
  }
const output2 = pow2(2,3) 
console.log(output2);
  return <></>;
};
