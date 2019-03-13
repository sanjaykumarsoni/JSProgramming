const problemStatement = `Given a String “aabbbbddcc” find the longest first repeating index and its length. (Input: “aabbbbddcc” Output: [2,4] 2 is the index and 4 is the length`;
console.log(problemStatement);
const stringData = 'aabbbbddcc';
const IndividualElmInStr = [...new Set(stringData.split(''))];
const strAsArr = IndividualElmInStr.map((item, index) => {
    const counter = stringData.split('').filter((single, key) => single === item).length;
    const firstIndex = stringData.split('').indexOf(item);
    return { item, totalCount: counter, firstIndex };
});

const sortedArr = strAsArr.sort((a, b) => b.totalCount - a.totalCount);
console.log('==============\n');
console.log([sortedArr[0].firstIndex, sortedArr[0].totalCount]);
console.log('\n==============\n');