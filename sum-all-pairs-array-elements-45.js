https://www.geeksforgeeks.org/sum-product-pairs-array-elements/
// required function 
findProductSum = function (A) {
    // calculating array sum (a1 + a2 ... + an) 
    let array_sum = 0, n = A.length;
    for (let i = 0; i < n; i++)
        array_sum = array_sum + A[i];

    // calcualting square of array sum 
    // (a1 + a2 + ... + an)^2 
    let array_sum_square = array_sum * array_sum;

    // calcualting a1^2 + a2^2 + ... + an^2 
    let individual_square_sum = 0;
    for (let i = 0; i < n; i++)
        individual_square_sum += A[i] * A[i];

    // required sum is (array_sum_square - 
    // individual_square_sum) / 2 
    return parseInt((array_sum_square - individual_square_sum) / 2);
};

// Driver code 
let arr = [1, 3, 4];
console.log("sum of product of all pairs of array elements : ", findProductSum(arr)); 
