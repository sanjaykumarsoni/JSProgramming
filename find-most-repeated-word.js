function findMostReaptedWord(str) {
    var counts = {}, mr, mc;
    str.match(/\w+/g).forEach(function (w) {
         counts[w] = (counts[w] || 0) + 1 ;
        });
    for (var w in counts) {
        if (!(counts[w] < mc)) {
            mc = counts[w];
            mr = w;
        }
    }
    return mr;
}

var temp= findMostReaptedWord("Ravi had been saying that he had been there");
console.log(temp);