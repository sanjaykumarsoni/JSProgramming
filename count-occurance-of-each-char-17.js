
//1. function with ES6 feature.
let counter = str => {
    return str.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
};

var item = counter("aabsssd"); // => { a: 2, b: 1, s: 3, d: 1 }
console.log(item);

//2. Method 2

getFrequency= function(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};

var item2= getFrequency("aabsssd");
console.log(item2);