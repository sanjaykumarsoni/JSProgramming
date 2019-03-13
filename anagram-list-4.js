// //Method1
////output:

const anagarmGrouping = (strArr) => {
    const map = {};
    let pairArr = [];
    let singleElm = '';
    for (let i = 0; i < strArr.length; i++) {
        singleElm = strArr[i].toLowerCase().split('').sort().join('');
          if (map[singleElm] !== undefined) {
            pairArr = [...pairArr, [map[singleElm], strArr[i]]];
        } else {
            map[singleElm] = strArr[i];
        }
    }

    return pairArr;
};
const givenArr = ['aba', 'ccd', 'nop', 'cdc', 'aab'];
console.log(`given array is `, givenArr, `, output: `, anagarmGrouping(givenArr));

const givenArr1 = ['mamoni', 'kosasi', 'Nope', 'noimam', 'Sasiok', 'pone'];
console.log(`given array is `, givenArr1, `, output: `, anagarmGrouping(givenArr1));


////Method 2;

//var input = "monk, konm, bbc, cbb, dell, ledl";
// //output:
// //  monk - konm (0, 1)
// //  konm - monk (1, 0)
// //  bbc - cbb (2, 3)
// //  cbb - bbc (3, 2)
// //  dell - ledl (4, 5)
// //  ledl - dell (5, 4)

// var words = input.split(", ");

// for (var i = 0; i < words.length; i++) {

//     var word = words[i];
//     var alphabetical = word.split("").sort().join("");

//     for (var j = 0; j < words.length; j++) {

//         if (i === j) {
//             continue;
//         }

//         var other = words[j];
//         if (alphabetical === other.split("").sort().join("")) {
//             console.log(word + " - " + other + " (" + i + ", " + j + ")");
//         }
//     }
// }