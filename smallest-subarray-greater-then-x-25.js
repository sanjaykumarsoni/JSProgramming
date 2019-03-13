
https://www.geeksforgeeks.org/minimum-length-subarray-sum-greater-given-value/

// Returns length of smallest subarray with sum greater than x. 
// If there is no subarray with given sum, then returns n+1 
smallestSubWithSum=function(arr,x) 
{ 
    // Initilize length of smallest subarray as n+1 
    let n=arr.length;
	let min_len = n + 1; 

	// Pick every element as starting point 
	for (let start=0; start<n; start++) 
	{ 
		// Initialize sum starting with current start 
		let curr_sum = arr[start]; 

		// If first element itself is greater 
		if (curr_sum > x) return 1; 

		// Try different ending points for curremt start 
		for (let end=start+1; end<n; end++) 
		{ 
			// add last element to current sum 
			curr_sum += arr[end]; 

			// If sum becomes more than x and length of 
			// this subarray is smaller than current smallest 
			// length, update the smallest length (or result) 
			if (curr_sum > x && (end - start + 1) < min_len) 
				min_len = (end - start + 1); 
		} 
	} 
	return min_len; 
} ;

/* Driver program to test above function */

	let arr1 = [1, 4, 45, 6, 10, 19]; 
	let x1 = 51; 
	let res1 = smallestSubWithSum(arr1, x1); 
	console.log(res1); 

    let arr2 = [1, 10, 5, 2, 7]; 
	let x2 = 9; 
	let res2 = smallestSubWithSum(arr2, x2); 
	console.log(res2);
