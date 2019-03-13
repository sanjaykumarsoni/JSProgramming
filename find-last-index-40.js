// Returns last index of x if it is present. 
// Else returns -1. 
//we can avoid complete traversal in all those cases when x is present. 
//The idea is to traverse from right side and stop as soon as we find character.
function findLastIndex(str, x) {
    // Traverse from right 
    for (let i = str.length - 1; i >= 0; i--)
        if (str[i] == x)
            return i;

    return -1;
}

//test
let str = "geeksforgeeks";
let x = 'e';
let index = findLastIndex(str, x);
console.log(index);