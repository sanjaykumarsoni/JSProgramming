// A utility function to print a substring str[low..high] 
printSubStr=function(str, low, high) 
{ 
    strWord =[];
    for( let i = low; i <= high; ++i ) {
       strWord.push(str[i]);
    }
    console.log(strWord.join(''));    
} ;
  
// This function prints the longest palindrome substring (LPS) 
// of str[]. It also returns the length of the longest palindrome 
longestPalSubstr=function(str) 
{ 
    let maxLength = 1;  // The result (length of LPS) 
  
    let start = 0; 
    let len = str.length; 
  
    let low, high; 
  
    // One by one consider every character as center point of  
    // even and length palindromes 
    for (let i = 1; i < len; ++i) 
    { 
        // Find the longest even length palindrome with center points 
        // as i-1 and i.   
        low = i - 1; 
        high = i; 
        while (low >= 0 && high < len && str[low] == str[high]) 
        { 
            if (high - low + 1 > maxLength) 
            { 
                start = low; 
                maxLength = high - low + 1; 
            } 
            --low; 
            ++high; 
        } 
  
        // Find the longest odd length palindrome with center  
        // point as i 
        low = i - 1; 
        high = i + 1; 
        while (low >= 0 && high < len && str[low] == str[high]) 
        { 
            if (high - low + 1 > maxLength) 
            { 
                start = low; 
                maxLength = high - low + 1; 
            } 
            --low; 
            ++high; 
        } 
    } 
  
    console.log("Longest palindrome substring is: "); 
    printSubStr(str, start, start + maxLength - 1); 
  
    return maxLength; 
};
  
//test above functions  
longestPalSubstr( "forgeeksskeegfor" );
// Time complexity: O ( n^2 ) where n is the length of input string.
// Auxiliary Space: O ( 1 )
