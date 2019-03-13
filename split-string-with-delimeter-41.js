//Given a string and a delimiter character. 
//Split the string based on the delimiter and print the list of resulting sub strings.

// function to split string into substrings on the 
// basis of delimiter and return the substrings 
// after split 
function splitStrings(str, dl)
{
    let word = "";

    // to count the number of split strings 
    let num = 0;

    // adding delimiter character at the end 
    // of 'str' 
    str = str + dl;

    // length of 'str' 
    let l = str.length;

    // traversing 'str' from left to right 
    substr_list = [];
    for (let i = 0; i < l; i++) {

        // if str[i] is not equal to the delimiter 
        // character then accumulate it to 'word' 
        if (str[i] != dl)
            word = word + str[i];

        else {

            // if 'word' is not an empty string, 
            // then add this 'word' to the array 
            // 'substr_list[]' 
            if (parseInt(word.length) != 0)
                substr_list.push(word);

            // reset 'word' 
            word = "";
        }
    }

    // return the splitted strings 
    return substr_list;
}

// testcase to test above 
let str1 = "geeks;for;geeks";
let dl = ';';
let res = splitStrings(str1, dl); 
console.log(res);