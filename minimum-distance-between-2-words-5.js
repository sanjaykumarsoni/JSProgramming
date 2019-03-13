function findMinimumWordDistance(words, wordA, wordB) {
  var wordAIndex = null;
  var wordBIndex = null;
  var minDistance = null;

  for (var i = 0, length = words.length; i < length; i++ ) {
    if (words[i] === wordA) {
      wordAIndex = i;
    }

    if (words[i] === wordB) {
      wordBIndex = i;
    }

    if ( wordAIndex !== null && wordBIndex !== null ) {
      var distance = Math.abs(wordAIndex - wordBIndex);
      if(minDistance === null || minDistance > distance) {
        minDistance = distance;
      } 
    }
  }
  console.log(minDistance);
  return minDistance;
}
//test1
findMinimumWordDistance(["xyz","abc","cde", "yzf", "xyz"], "abc","xyz");