function minMaxLengthWords(input) {
    // not -implemented: minWord and maxWord are received by reference 
    // and not by value 
    // will be used to store and return output 
    let len = input.length;
    let si = 0, ei = 0;
    let min_length = len, min_start_index = 0, max_length = 0, max_start_index = 0;

    // Loop while input string is not empty 
    while (ei <= len) {
        if (ei < len && input[ei] != ' ')
            ei++;

        else {
            // end of a word 
            // find curr word length 
            let curr_length = ei - si;

            if (curr_length < min_length) {
                min_length = curr_length;
                min_start_index = si;
            }

            if (curr_length > max_length) {
                max_length = curr_length;
                max_start_index = si;
            }
            ei++;
            si = ei;
        }
    }
    // store minimum and maximum length words 
    let minWord = input.substr(min_start_index, min_length);
    console.log(minWord);
    let maxWord = input.substr(max_start_index, max_length);
    console.log(maxWord);
}

// test code 
let a = "GeeksforGeeks A Computer Science portal for Geeks";
minMaxLengthWords(a);
