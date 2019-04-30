/**
 * Basic Algorithm Scripting: Falsy Bouncer
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 * Hint: Try converting each value to a Boolean.
 */

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let removed = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == false || arr[i] == null || Number.isNaN(arr[i])){
            removed.push(arr.splice(i,1));
            i -= 1;
        }
    }
    return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));

/**
 * bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
 * bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
 * bouncer([false, null, 0, NaN, undefined, ""]) should return [].
 * bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
 */