https://www.geeksforgeeks.org/possible-to-make-a-divisible-by-3-number-using-all-digits-in-an-array/

// The idea is based on the fact that a number is divisible by 3 if sum of its digits is divisible by 3.
isPossibleToMakeDivisible = function (arr) {
    // Find remainder of sum when divided by 3 
    let remainder = 0, n = arr.length;
    for (let i = 0; i < n; i++)
        remainder = (remainder + arr[i]) % 3;

    // Return true if remainder is 0. 
    return (remainder == 0);
};

// test code  
let arr = [40, 50, 90];
if (isPossibleToMakeDivisible(arr)) {
    console.log("Yes");
} else {
    console.log("No");
}
