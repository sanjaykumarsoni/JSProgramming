const givenStr = 'aaabcbdeafab';

//Brute force
const checkingUniqueAll = str => {
  const uniqueArr = [...new Set(str)];
  return uniqueArr.length === str.length ? true : false;
};
const composeLargeSubStr = str => {
  const strAsArr = str.split('');
  const strLength = strAsArr.length;
  let result = [], maxResult = [];
  for(let i=0; i<strLength; i++){
    for(let j=i+1; j<strLength+1; j++) {
      if(checkingUniqueAll(str.substring(i, j).split(''))){
        result = str.substring(i, j);
        if(result.length > maxResult.length){
          maxResult = result;
        }
      }
    }
  }

  return maxResult;
};
console.log('Brute force approach', composeLargeSubStr(givenStr));

//greedy approch
/**
 * https://wsvincent.com/javascript-longest-substring-no-repeating-characters/
 */
//const givenStr = 'aaabcbdeafab';
const returnLargeStr = (str) => {
  let minValue = 0;
  let updatedString = '';
  let newArr = [], resultStr = '';
  for(let i=0; i<str.length; i++){
    if(updatedString.indexOf(str[i])<=-1){
      updatedString += str[i];
    } else{
      newArr = [...newArr, updatedString];
      if(updatedString.length >= resultStr.length){
        resultStr = updatedString;
      }
      minValue = updatedString.indexOf(str[i]);
      updatedString = (typeof(updatedString[minValue+1]!='undefned') ? updatedString.slice(minValue+1) : '') + str[i];
    }
    if(i===str.length - 1) {
      newArr = [...newArr, updatedString];
      if(updatedString.length >= resultStr.length){
        resultStr = updatedString;
      }
    }
  }
  
  console.log(newArr);
  return resultStr;
};

console.log('Greedy approach', returnLargeStr(givenStr));