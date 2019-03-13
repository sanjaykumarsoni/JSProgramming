/**
 * Given an array (or a string), returns the number of times the most frequent
 * element (or character) appears.
 */
function mostFrequentCount(elements) {
    var bins = {};
    for (var i = 0; i < elements.length; i++) {
        bins[elements[i]] = (bins[elements[i]] || 0) + 1;
    }
    var max = 0;
    for (var c in bins) {
        max = Math.max(max, bins[c]);
    }
    return max;
}
function wordsWithMaxRepeatedCharacters(string) {
    var maxRepeatedCharacters = 0, wordsWithMaxRepeatedCharacters = [];

    var words = string.split(/\W/);
    for (var w = 0; w < words.length; w++) {
        var word = words[w];
        var numRepeatedCharacters = mostFrequentCount(word);

        if (maxRepeatedCharacters < numRepeatedCharacters) {
            maxRepeatedCharacters = numRepeatedCharacters;
            wordsWithMaxRepeatedCharacters = [word];
        } else if (maxRepeatedCharacters == numRepeatedCharacters) {
            wordsWithMaxRepeatedCharacters.push(word);
        }
    }
    return wordsWithMaxRepeatedCharacters;
}

var temp=wordsWithMaxRepeatedCharacters("Ravi had been saying that he had been there");
console.log(temp);