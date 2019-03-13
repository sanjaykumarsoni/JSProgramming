countPairsBruteForce = function (X, Y) {
    let ans = 0;
    let m = X.length;
    let n = Y.length;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (power(X[i], Y[j]) == power(Y[j], X[i])){
                console.log(X[i], Y[j]);
                ans++;
            }
    console.log("Number pairs which equale to the format a^b=b^a : ", ans);
    return ans;
};

power = function (x, y) {
    if (y == 0)
        return 1;
    if (y % 2 == 0) {
        return power(x, parseInt(y / 2)) * power(x, parseInt(y / 2));
    } else {
        return x * power(x, parseInt(y / 2)) * power(x, parseInt(y / 2));
    }
};

let X = [2, 1, 6]; Y = [1, 5];
countPairsBruteForce(X, Y);
