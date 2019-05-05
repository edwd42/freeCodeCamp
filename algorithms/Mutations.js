/**
 * Basic Algorithm Scripting: Mutations

 * Return true if the string in the first element of the array contains all of the letters 
 * of the string in the second element of the array.

 * For example, ["hello", "Hello"], should return true because all of the letters in the 
 * second string are present in the first, ignoring case.

 * The arguments ["hello", "hey"] should return false because the string "hello" does not 
 * contain a "y".

 * Lastly, ["Alien", "line"], should return true because all of the letters in "line" are 
 * present in "Alien".
 */

function mutation(arr) {
    let firstWord = [];
    let secondWord = [];
    firstWord = arr[0].toLowerCase().split('');
    secondWord = arr[1].toLowerCase().split('');
    for(let i = 0; i < firstWord.length; i++){
        for(let j = 0; j < secondWord.length; j++){
            if(firstWord.indexOf(secondWord[j]) == -1){
                return false;
            }
        }
        return true;
    }
  }
  
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));

/**
 * mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.

 */