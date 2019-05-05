/** 
 * Basic Algorithm Scripting: Where do I Belong
 * https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong/

 * Return the lowest index at which a value (second argument) should be inserted into an array 
 (first argument) once it has been sorted. The returned value should be a number.

 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 
 (index 0), but less than 2 (index 1).

 * Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted 
 it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.

    // first sort the array
    var tmp = 0;
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j < arr[i]; j++){
            if (arr[j] > arr[j + 1]){
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }

    if (arr.length === 0) return 0;
    for (let i = 0; i < arr.length; i++){
        if (num <= arr[0]) return 0;
        if (num >= arr[arr.length - 1]) return arr.length;
        if (num > arr[i] && num <= arr[i + 1]) return i + 1;
    }
  }
  
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
  console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
  console.log(getIndexToIns([40, 60], 50)); // 1
  console.log(getIndexToIns([3, 10, 5], 3)); // 0
  console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2
  console.log(getIndexToIns([2, 20, 10], 19)); // 2
  console.log(getIndexToIns([2, 5, 10], 15)); // 3
  console.log(getIndexToIns([], 1)); // 0



  