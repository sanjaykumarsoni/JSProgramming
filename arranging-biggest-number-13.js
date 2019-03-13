//Method 1:

initialArr = [0, 1, 234, 340, 3, 98, 9, 76, 45, 5];
const maxCombinationArr = (arr) => +arr.sort((x, y) => +(''+y+x) - +(''+x+y)).join('');
console.log("Method 1 : "+maxCombinationArr(initialArr));


//Method 2: 

// A comparison function which is used by sort() in printLargest() 
myCompare = function (x, y) {
    // first append Y at the end of X 
    let XY = Number( x.toString() + y.toString());

    // then append X at the end of Y 
    let YX = Number(y.toString() + x.toString());

    // for decending order. 
    return YX-XY;
};

// The main function that prints the arrangement with the largest value. 
// The function accepts a vector of strings 
printLargest = function (arr) {
    let arr1 = arr.sort(myCompare).join("");
    console.log("Method 2 : "+ arr1);
};
printLargest(initialArr);