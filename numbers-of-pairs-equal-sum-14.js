ArrayTwoCandidates = function (A, sum) {
    var l, r;

    /* Sort the elements */
    A.sort((a, b) => a - b);

    /* Now look for the two candidates in  
    the sorted array*/
    l = 0;
    r = A.length - 1;
    sumPair = [];
    while (l < r) {
        if (A[l] + A[r] == sum) {
            sumPair.push(A[l] + "," + A[r]);
            l++; r--;
        }
        else if (A[l] + A[r] < sum) {
            l++;
        }
        else {
            r--;
        }
    }
    console.log("total pairs" +":"+ sumPair.length);
    console.log(sumPair);

};

//test 1
arr1 = [1, 12, 4, 8, -20, 36, 45, 6, 10, 8];
ArrayTwoCandidates(arr1, 16);