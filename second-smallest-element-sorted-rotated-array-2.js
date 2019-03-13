const rearrangeTheArr = (givenArr) => {
  let newArr = [], pivotPoint = 0;
  const aceOrDesc = givenArr[0] < givenArr[givenArr.length-1] ? 'desc' : 'asc';

  if(givenArr.length < 2){
    return 'No Data';
  }
  for(let i=1; i<givenArr.length; i++){
    if(givenArr[i-1] > givenArr[i] && aceOrDesc === 'asc' || givenArr[i-1] < givenArr[i] && aceOrDesc === 'desc'){
      pivotPoint = i;
      break;
    }
  }
  console.log(pivotPoint);
  newArr = [...givenArr.slice(pivotPoint), ...givenArr.slice(0, pivotPoint)];
  if(aceOrDesc === 'desc')
    newArr.reverse();
  return newArr[1];
};


let givenArr = [4,5,6,7,8,1,2,3];
console.log(`second smallest element of the ${givenArr}:`, rearrangeTheArr(givenArr));

givenArr = [18,16,14,13,9,8,7,23,21,20];
console.log(`second smallest element of the ${givenArr}:`, rearrangeTheArr(givenArr));