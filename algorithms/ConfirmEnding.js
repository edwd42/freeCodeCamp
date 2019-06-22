// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

function confirmEnding(str, target) {
  let same = true;
  for (let i = 1; i <= target.length; i++) {
    same = str[str.length - i] == target[target.length - i] ? true : false;
  }
  console.log(same);
  // return same;
}

confirmEnding("Bastian", "n");
confirmEnding("Open sesame", "pen");
confirmEnding("Open sesame", "same");
