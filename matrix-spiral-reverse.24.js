const givenArr1 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18]
];

const givenArr2 = [
  [1,  2,   3,  4],
  [5,  6,   7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
];

const reverseSpiral = (givenArr, resultArr) => {
  
  if(givenArr.length == 0){
    return resultArr.reverse();
  }
  if(givenArr.length === 1){
    return [...resultArr, ...givenArr[0]].reverse();
  }
  //console.log(givenArr, resultArr);
  resultArr = [
    ...resultArr,
    ...givenArr.shift(),
    ...givenArr.map(item => item.pop()),
    ...givenArr.pop().reverse(),
    ...givenArr.map(item => item.shift()).reverse()
  ];
  
  return reverseSpiral(givenArr, resultArr);
};

console.log(`Reverse order spiral for givenArr2: `, reverseSpiral(givenArr2.map(item => item.slice(0)), []));
console.log(`Reverse order spiral for givenArr1: `, reverseSpiral(givenArr1.map(item => item.slice(0)), []));
///console.log([...givenArr2]);