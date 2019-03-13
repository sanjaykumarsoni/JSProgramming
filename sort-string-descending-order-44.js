//Method 1 : comparison function

function sortThings(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
}

//Method 2: using hash map :To Do.
// MAX_CHAR = 26; 
  
// // function to print string in sorted order  
// function sortString(str)  
// {      
//     // Hash array to keep count of characters.  
//     // Initially count of all charters is  
//     // initialized to zero.  
//     charCount = new Array(MAX_CHAR); 

//     // Traverse string and increment  
//     // count of characters  
//     // 'a'-'a' will be 0, 'b'-'a' will be 1,  
//     for (let i = 0; i < str.length; i++)  
//     { 
          
//         // so for location of character in count  
//         // array we wil do str[i]-'a'.  
//         charCount[(str.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0))]++; 
//     } 

//     // Traverse the hash array and print  
//     // characters  
//     for (let i = MAX_CHAR - 1; i >= 0; i--) 
//     { 
//         for (let j = 0; j < charCount[i]; j++)  
//         { 
//             console.log((char) ('a'.charCodeAt(0) + i)); 
//         } 
//     } 
// } 

// // test above function 
// let s = "sanjaysoni";
// sortString(s); 

//using comparison function.
let res=s.split("").sort(sortThings).join("");
console.log(res);
