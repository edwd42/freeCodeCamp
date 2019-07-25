// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype

// the global Array
var s = [23, 65, 98, 5];

export const myMap = () => {
  Array.prototype.myMap = function(callback) {
    var newArray = [];
    // Add your code below this line
    s.forEach(el => {
      newArray.push(el * 2);
    });
    // Add your code above this line
    return newArray;
  };

  var new_s = s.myMap(function(item) {
    return item * 2;
  });

  return new_s;
};

console.log(myMap);
