import React from "react";

const FunctionalConcepts = () => {
  // remove an element from an array at given position

  function removeElem(arr, position) {
    arr.splice(position, 1);
    return arr;
  }
  const output = removeElem([20, 30, 40, 50, 60], 3); // will remove 50 from array


  console.log(output);

//   add new element in array at given position->

function addElement(arr,position){
   arr.splice(position,0,100);
   return arr;
}

const result = addElement([100,200,300,400,500],3);  // will add 100 at index 3

console.log(result);

  return <></>;
};

export default FunctionalConcepts;
