/**
 * 
 * https://stackoverflow.com/questions/30906366/spiral-traversal-of-a-matrix-recursive-solution-in-javascript
 */
const input = [
    [1,  2,   3,  4],
    [5,  6,   7,  8],
    [9,  10, 11, 12],
    [13, 14, 15, 16]
  ];
  const givenArr = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18]
  ];
  const sprialTravarsal = (matrix) => {
    let result = [];
    const goAround = (givenMatrix) => {
      if(givenMatrix.length === 0){
        return ;
      }
  
      //top to right travarsal
      result = [...result, matrix.shift()];
  
      //top to down
      for(let i=0; i<matrix.length-1; i++){
        result.push(matrix[i].pop());
      }
  
      //last right to left
      result = [...result, matrix.pop().reverse()];
  
      //up part
      for(let i=matrix.length-1; i>=0; i--){
        result.push(matrix[i].shift());
      }
  
      return goAround(matrix);
    };
    goAround(matrix);
    return result;
  };
  
  //es6 array functions operation
  const sprialES6Format = (matrix) => {
    let result = [];
    while(matrix.length > 1){
      result = [
        ...result,
        ...matrix.shift(),
        ...matrix.map(item => item.pop()),
        ...matrix.pop().reverse(),
        ...matrix.map(item => item.shift()).reverse()
      ];
    }
  
    if(matrix.length === 1){
      result = [...result, ...matrix[0]];
    }
  
    return result;
  };
  
  const updatedResult = sprialTravarsal(input.map(item => item.slice(0)));
  console.log(`sprial: ${updatedResult}`);
  
  
  let es6MatrixSprial = sprialES6Format(input.map(item => item.slice(0)));
  console.log(`es6 sprial: `, es6MatrixSprial);
  
  es6MatrixSprial = sprialES6Format(givenArr.map(item => item.slice(0)));
  console.log(`es6 sprial for givenArr: `, es6MatrixSprial);