//Mehod 1:
// Recursive function to compute atoi() 
myAtoiRecursive = function (str, n) {
    // Base case (Only one digit) 
    if (n == 1)
        return str - '0';

    // If more than 1 digits, recur for (n-1), multiplu result with 10 
    // and add last digit 
    return ((10 * myAtoiRecursive(str, n - 1)) + (str[n - 1] - '0'));
};

//Method 2:
atoi = function (str) {
    let res = 0; // Initialize result 

    // Iterate through all characters of input string and 
    // update result 
    for (let i = 0; i<str.length; ++i) {
        res = res * 10 + str[i] - '0';
    }

    // return result. 
    return res;
};

//Method 3
atoi1 = function (str) {
    let result = 0;
    let i = 0;
    let strLength = str.length;
    let multiplier = 1;

    if (strLength != 0 && str.charAt(0) == '-') {
        multiplier = -1;
        i++;
    }

    for (; i < strLength; i++) {
        let c = str.charAt(i);

        if (c < '0' || c > '9') {
            break;
        }

        result = result * 10 + c - '0';
    }
    console.log(result * multiplier);
    return result * multiplier;
};

//testcases.
var item = myAtoiRecursive("2", 3);
console.log(item);
console.log(atoi("123"));
console.log(atoi1("123"));