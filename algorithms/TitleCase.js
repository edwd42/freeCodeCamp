/**
 * Basic Algorithm Scripting: Title Case a Sentence
 * Return the provided string with the first letter of each word capitalized. 
 * Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words 
 * like "the" and "of".
 */

function titleCase(str) {
    // split sentence into array of words
    str = str.split(' ');
    // iterate over the elements
    for (let i = 0; i < str.length; i++){
        // make all letters lowercase
        str[i] = str[i].toLowerCase();
        // capitalize first letter and concat rest of word
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  
console.log(titleCase("I'm a little tea pot"));  // should return I'm A Little Tea Pot.
console.log(titleCase("sHoRt AnD sToUt"));  // should return Short And Stout.
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));  // should return Here Is My Handle Here Is My Spout