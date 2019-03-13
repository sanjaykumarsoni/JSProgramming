
// Returns value of Binomial Coefficient C(n, k) 
binomialCoeff = function (n, k) {
    let res = 1;
    // Since C(n, k) = C(n, n-k) 
    if (k > n - k)
        k = n - k;
    // Calculate value of [n * (n-1) *---* (n-k+1)] / [k * (k-1) *----* 1] 
    for (let i = 0; i < k; ++i) {
        res *= (n - i);
        res /= (i + 1);
    }
    console.log(res);
    return res;
};

//test1
binomialCoeff(4, 2);