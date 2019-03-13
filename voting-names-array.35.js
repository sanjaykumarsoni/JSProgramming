const givenVoteArray = ['Audi', 'Maruti', 'Chevolate', 'Dan','Audi', 'Maruti', 'Chevolate', 'Dan','Audi', 'Maruti', 'Chevolate', 'Dan', 'Audi', 'Maruti', 'Chevolate', 'Audi', 'Maruti', 'Chevolate', 'Audi', 'Maruti', 'Chevolate', 'Dan','Audi', 'Dan','Audi', 'Dan','Audi', 'Maruti', 'Maruti', 'Maruti', 'Maruti', 'Maruti', 'Maruti', 'Chevolate', 'Maruti', 'Chevolate', 'Maruti', 'Chevolate', 'Dan','Audi', 'Dan','Audi', 'Dan','Audi'];

const newVotedArr = ['Audi', 'Audi', ...givenVoteArray];

const arrayMapper = (givenArr) => {
  const nonRepetatedElms = [...new Set(givenArr)];
  let candidates = [];
  const mappedObj = nonRepetatedElms.map(item => ({
    itemName: item,
    totalVote: givenArr.filter(single => single === item).length
  })).sort((a, b) => b.totalVote - a.totalVote);

  const gettingMaxVote = Math.max.apply(null, mappedObj.map(item => item.totalVote));
  const countingTieIfAny = mappedObj.filter(item => item.totalVote === gettingMaxVote);

  if(countingTieIfAny.length > 1){
    candidates = [...candidates, ...countingTieIfAny.map(item => item.itemName).sort()];
    return candidates;
  }

  return mappedObj[0].itemName;
};

console.log(`Max Voted candidate(s): `,arrayMapper(givenVoteArray));
console.log(`=== Voted Again ===`);
console.log(`Max Voted candidate(s): `,arrayMapper(newVotedArr));