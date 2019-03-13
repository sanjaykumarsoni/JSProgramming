// C program to find Longest subarray 
// having average greater than or equal 
// to x. 

// Function to find Longest subarray having sum 
// greater than or equal to x. 
max_subarray = function (arr, k) {
    let length = 0, temp = 0;
    let max = 0, sum = 0, i, n = arr.length;
    for (i = 0; i < n; i++) {
        sum = sum + arr[i];
        temp++;
        if (sum > max && sum == k && temp >= length) {
            max = sum;
            length = temp;
        }
        if (sum < 0) {
            sum = 0;
            temp = 0;
        }
    }
    return length;
};

// Drive Code 

let arr = [-2, 1, 6, -3];
let x = 3;
let length = max_subarray(arr, x);
console.log(length);

