function WordsBeginsWithSmallLetter(str) {
    // empty strings 
    let w = "", z = "";

    // convert input string to upper case 
    str = str.toUpperCase() + " ";

    for (let i = 0; i < str.length; i++) {

        // checki if character is not a space 
        // and adding it to string w 
        let ch = str.charAt(i);
        if (ch != ' ')
            w = w + ch;
        else {

            // converting first character to lower 
            // case and subsequent initial 
            // letter of another word to lower case 
            z = z + (w.charAt(0).toLowerCase()) +
                w.substring(1) + " ";
            w = "";
        }
    }

    return z;
}

function WordsBeginsWithCapitalLetter(str) {
    // empty strings 
    let w = "", z = "";
    str1 = str + " "; //to catch the last space. 
    for (let i = 0; i < str1.length; i++) {
      
        // checki if character is not a space 
        // and adding it to string w 
        let ch = str1.charAt(i);
        if (ch != ' ')
            w = w + ch;
        else {

            // converting first character to upper 
            // case and subsequent initial 
            // letter of another word to lower case 
            z = z + (w.charAt(0).toUpperCase()) +
                w.substring(1) + " ";
            w = "";
        }
    }

    return z;
}

// test code   
let str = "I got intern at geeksforgeeks";
console.log(WordsBeginsWithSmallLetter(str));
console.log(WordsBeginsWithCapitalLetter(str)); 
