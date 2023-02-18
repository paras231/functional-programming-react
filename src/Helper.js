// ? here we can create some reusable functions that can be used in our application.

// create a function that takes an array argument and sort the array by name  a-z



//! this function works properly.
export function sortByName(arr) {
  arr.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });
  return arr;
}
