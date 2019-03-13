function fib(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    console.log("iterative solution : " + arr[n]);
    return arr[n];
};

function fibRecusive(n) {
    if (n < 2) {
        return n;
    }
    return fibRecusive(n - 1) + fibRecusive(n - 2);
};

fib(6);
var item= fibRecusive(6);
console.log("recursive solution : " + item);
   