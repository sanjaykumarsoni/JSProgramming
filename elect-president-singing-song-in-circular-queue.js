//Method 1: 
students = ["sanjay", "Sks", "Naba", "D", "Jay", "Soni", "Verma"];
k = 9;

function print(arr, index) {
    console.log(circularArray(arr, index));
}

console.log("test to see student 1st and nth+1 students are same to prove that the student aree sitting in circle");
print(students, 0);
print(students, students.length); //starting from 0 so the last student would be at nth-1 postion and hence the
//the first student is actually at nth postion.

// function to push circular list starting 
// from given index ind.
function circularArray(arr, index) {
    let n = arr.length;
    let tempArr = [];
    // push from ind-th index to (n+i)th index. 
    for (let i = index; i < n + index; i++) {
        tempArr.push(arr[(i % n)]);
    }
    return tempArr;
}

function electStudent(arr, k) {
    let n = arr.length; //7 , k=9
    //original array from 0 index starting.
    let kthPositionOnTopArray = circularArray(arr, 0);
    console.log("Initial Sitting Arrangment : ", kthPositionOnTopArray);
    while (n > 1) {
        //traverse k times in circular array and remove the kth element.
        kthPositionOnTopArray = circularArray(kthPositionOnTopArray, k);
        let popedItem = kthPositionOnTopArray.shift();
        console.log("poped element : ", popedItem);
        n--;
    }
    console.log("Congratulation Mr. President", `${kthPositionOnTopArray[0]}`, ". You are a lucky charm !");
}
electStudent(students, k);

//method 3: 

function choseStudent(n, k) {
    console.log("----------------------Method 2 -----------------------------");
    var studentArray = [], songIndex = 1, studentIndex = 0;

    for (var i = 0; i < n; i++) {
        studentArray.push(i);
    }

    while (studentArray.length > 1) {
        if (songIndex == k) {
            console.log("Removing ", studentArray[studentIndex]);
            studentArray.splice(studentIndex, 1);
            songIndex = 1;
            if (studentIndex === studentArray.length) {
                studentIndex = 0;
            }
        } else {
            songIndex++;
            if (studentIndex < studentArray.length - 1) {
                studentIndex++;
            } else {
                studentIndex = 0;
            }
        }
        console.log(studentArray);
    }
    return studentArray[0];
}

choseStudent(5, 6);