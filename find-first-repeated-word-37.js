function findFirstReaptedWord(str) {
    var counts = {};
    w=str.match(/\w+/g);
    for(let i=0; i<w.length;i++){
        counts[w[i]] = (counts[w[i]] || 0) + 1;
        if (counts[w[i]]=== 2) {
            return w[i];
        }
    }
}

var temp= findFirstReaptedWord("Ravi had been saying that he had been there");
console.log(temp);
