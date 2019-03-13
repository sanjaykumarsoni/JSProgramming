var alphabets = "abcdefghijklmnopqrstuvwxyz";
function panagram1(str) {
    for (var i = 0; i <= str.length - 1; i++) {
        let index = alphabets.indexOf(str[i]);
        if (str[i] === alphabets[index]) {
            alphabets = alphabets.replace(str[i], '');
        }
    }
    console.log("from Panagram1 function" + ":" + alphabets);
    if (alphabets.length == 0) {
        console.log("All alphabets availble Panagram1");
    }
    else {
        console.log("Some alphabets missing from pangram1 and mentioned the same above");
    }
}
//test1
panagram1("abcdefghiuvwxyz");


var Pangram2 = function (string) {
    this.string = string.toLowerCase();
    //initialize all alphabet.
    // 2nd method would be comparing with byte instead comparing all 26 letters.
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    // Initialises a string with all the alphabets   
    var sentence = this.string;

    // Iterate through the sentence and each for each letter, remove it from the array.
    for (let i = 0; i <= sentence.length - 1; i++) {


        // Find the index of the letter in array to delete
        var num = alphabet.indexOf(sentence[i]);

        //If the letter is present in the array, remove it
        if (sentence[i] == alphabet[num]) {
            alphabet = alphabet.replace(sentence[i], '');
        }

    }

    console.log("from panagram2 function" + ":" + alphabet);

    if (alphabet.length == 0) {
        console.log("All alphabets availble panagram2");
    }
    else {
        console.log("Some alphabets missing from pangram2 and mentioned the same above");
    }

};
//test2
Pangram2("abcdefghiuvwxyz");
