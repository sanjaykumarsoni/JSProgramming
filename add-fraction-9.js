gcdOf2Number = function (a, b) {
    if (a == 0)
        return b;
    return gcdOf2Number(b % a, a);
};
// Function to convert the obtained fraction 
// into it's simplest form 
lowest=function(den3, num3)
{
    // Finding gcd of both terms 
    let common_factor = gcdOf2Number(num3, den3);

    // Converting both terms into simpler  
    // terms by dividing them by common factor  
    den3 = den3 / common_factor;
    num3 = num3 / common_factor;
    console.log("final fraction should be :", `${num3}/${den3} `);
};
addFractions = function (num1, den1, num2, den2) {
    // Finding gcd of den1 and den2 
    let den3 = gcdOf2Number(den1, den2);

    // Denominator of final fraction obtained 
    // finding LCM of den1 and den2 
    // LCM * GCD = a * b  
    den3 = (den1 * den2) / den3;

    // Changing the fractions to have same denominator 
    // Numerator of the final fraction obtained 
    let num3 = (num1) * (den3 / den1) + (num2) * (den3 / den2);

    // Calling function to convert final fraction 
    // into it's simplest form 
    this.lowest(den3, num3);
};

addFractions(1, 2, 1 , 6);