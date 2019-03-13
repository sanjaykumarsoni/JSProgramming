const checkPowerOf = (baseElem, targetElem) => {
    let pow = 1, counter = 0;
    if(baseElem === 1 ){
      return (targetElem === 1) ? counter : -1;
    }
    while(pow < targetElem){
      pow *= baseElem;
      counter++;
    }
    
    return (pow === targetElem) ? counter : -1;
  };
  
  let x = 10, y = 1;
  let getPowerrelation = checkPowerOf(x, y) === -1 ? 'Not in relation': checkPowerOf(x, y);
  console.log(`Power relation of ${x} and ${y}: ${getPowerrelation}`);
  
  x = 10, y = 1000;
  getPowerrelation = checkPowerOf(x, y) === -1 ? 'Not in relation': checkPowerOf(x, y);
  console.log(`Power relation of ${x} and ${y}: ${getPowerrelation}`);
  
  x = 2, y = 64;
  getPowerrelation = checkPowerOf(x, y) === -1 ? 'Not in relation': checkPowerOf(x, y);
  console.log(`Power relation of ${x} and ${y}: ${getPowerrelation}`);
  
  x = 2, y = 65;
  getPowerrelation = checkPowerOf(x, y) === -1 ? 'Not in relation': checkPowerOf(x, y);
  console.log(`Power relation of ${x} and ${y}: ${getPowerrelation}`);