// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  // Remove all the values
  console.log("3. ", ...arguments);
  for (let j = 1; j < arguments.length; j++) {
    // console.log("5. ",arguments[j]);
    for (let i = 0; i <= arr.length; i++) {
      // console.log("7. ",i);
      if (arr.indexOf(arguments[j]) > -1) {
        // console.log("8. ", arr.indexOf(arguments[j]));
        arr.splice(arr.indexOf(arguments[j]), 1);
        i = 0;
        // console.log("11. ", arr);
      }
    }
  }

  return arr;
}

console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
