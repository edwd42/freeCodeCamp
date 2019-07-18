// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  // traditional for loop
  // for (let i = 0; i < arr2.length; i++){
  //   if (arr1.indexOf(arr2[i]) == -1){
  //     newArr.push(arr2[i]);
  //   }
  // }

  // for (let j = 0; j < arr1.length; j++){
  //   if (arr2.indexOf(arr1[j]) == -1){
  //       newArr.push(arr1[j]);
  //   }
  // }

  // short circuit evaluation - much more concise
  arr1.forEach(
    (element, i) => arr2.indexOf(element) == -1 && newArr.push(arr1[i])
  );
  arr2.forEach(
    (element, i) => arr1.indexOf(element) == -1 && newArr.push(arr2[i])
  );

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
