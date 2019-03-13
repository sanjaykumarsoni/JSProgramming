//https://www.geeksforgeeks.org/print-words-string-reverse-order/

function wordReverse(str) 
{ 
	let i = str.length- 1; 
	let start, end = i + 1; 
	let result = ""; 
	
	while(i >= 0) 
	{ 
		if(str[i] == ' ') 
		{ 
			start = i + 1; 
			while(start != end) 
				result += str[start++]; 
			
			result += ' '; 
			
			end = i; 
		} 
		i--; 
	} 
	start = 0; 
	while(start != end) 
		result += str[start++]; 
	
	return result; 
} 

// test code 
	let str = "I AM A GEEK"; 
	
	console.log(wordReverse(str)); 
