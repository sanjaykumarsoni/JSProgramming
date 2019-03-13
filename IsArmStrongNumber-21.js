/* Function to calculate x raised to the power y */
power = function (x, y) {
    if (y == 0)
        return 1;
    if (y % 2 == 0) {
        return power(x, parseInt(y / 2)) * power(x, parseInt(y / 2));
    } else {
        return x * power(x, parseInt(y / 2)) * power(x, parseInt(y / 2));
    }
};

/* Function to calculate order of the number */
order = function (x) {
    let n = 0;
    while (x) {
        n++;
        x = parseInt(x / 10);
    }
    return n;
};

// Function to check whether the given number is 
// Armstrong number or not 
isArmstrong = function (x) {
    // Calling order function 
    let n = order(x);
    let temp = x, sum = 0;
    while (temp) {
        let r = temp % 10;
        sum += power(r, n);
        temp = parseInt(temp / 10);
    }

    // If satisfies Armstrong condition 
    if (sum == x) {
        console.log(true);
        return 1;
    }
    else {
        console.log(false);
        return 0;
    }
};

//test
isArmstrong(153);
isArmstrong(1634);
isArmstrong(123);