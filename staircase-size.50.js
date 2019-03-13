const generateStairCase = (numberOfLines) => {
  let generatedStr = [];
  for(let i=1; i <= numberOfLines; i++){
    generatedStr = [...generatedStr, new Array(numberOfLines-i).fill(' ').join('')];
    generatedStr = [...generatedStr, new Array(i).fill('#').join('')];
    console.log(generatedStr.join(''));
    generatedStr = [];
  }
}

console.log(`Generating stair cases...`);
generateStairCase(7);
