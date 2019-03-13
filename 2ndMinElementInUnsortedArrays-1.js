var min2nd=function(arr) {
    let n=arr.length;
    if(n<2){
        console.log("array length should be a minimum of 2 elements");
        return;
    }
    let firstMin = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (arr[i]<firstMin) {
            secondMin = firstMin;
            firstMin = arr[i];
        } else if (arr[i]<secondMin && arr[i] !=firstMin) {
            secondMin = arr[i];
        }
    }
    //boundry to check if 2nd smallest element present.
    if(secondMin ==Number.MAX_SAFE_INTEGER){
        console.log("No second smallest element");
    }else{
        console.log(secondMin);
    }
};

//test cases.
var test1 = [0,2,2,3];
var test2=[0];
var test3=[1,1,1];
var test4=[-1,0,-2];
min2nd(test1);
min2nd(test2);
min2nd(test3);
min2nd(test4);
