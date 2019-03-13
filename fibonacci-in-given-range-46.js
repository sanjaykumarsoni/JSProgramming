//https://www.geeksforgeeks.org/count-fibonacci-numbers-given-range-log-time/

// Returns count of fibonacci numbers in [low, high] 
function countFibs(low, high) {
    // Initialize first three Fibonacci Numbers 
    let f1 = 0, f2 = 1, f3 = 1;

    // Count fibonacci numbers in given range 
    let result = 0;

    while (f1 <= high) {
        if (f1 >= low)
            result++;
        f1 = f2;
        f2 = f3;
        f3 = f1 + f2;
    }

    return result;
}

//test
let low = 10, high = 100;
console.log("Count of Fibonacci Numbers is ", countFibs(low, high)); 
