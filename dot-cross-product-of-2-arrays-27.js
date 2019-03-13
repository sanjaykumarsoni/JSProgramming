https://www.geeksforgeeks.org/program-dot-product-cross-product-two-vector/

// Function that return 
// dot product of two vector array. 
dotProduct = function (vect_A, vect_B) {
    let product = 0;

    // Loop for calculate cot product 
    for (let i = 0; i < n; i++)
        product = product + vect_A[i] * vect_B[i];
    return product;
};

// Function to find 
// cross product of two vector array. 
crossProduct = function (vect_A, vect_B, cross_P) {
    cross_P[0] = vect_A[1] * vect_B[2] - vect_A[2] * vect_B[1];
    cross_P[1] = vect_A[0] * vect_B[2] - vect_A[2] * vect_B[0];
    cross_P[2] = vect_A[0] * vect_B[1] - vect_A[1] * vect_B[0];
};

//test
let vect_A = [3, -5, 4 ]; 
let vect_B = [ 2, 6, 5 ]; 
let n=3;
let cross_P=new Array(n); 

// dotProduct function call 
console.log("Dot product:"); 
console.log(dotProduct(vect_A, vect_B)); 

// crossProduct function call 
console.log("Cross product:"); 
crossProduct(vect_A, vect_B, cross_P); 

// Loop that print 
// cross product of two vector array. 
for (let i = 0; i < n; i++) 
    console.log(cross_P[i] ); 
 
