// Stack full implementation class 
class Stack {

    // Array is used to implement stack 
    constructor() {
        this.items = [];
    }

    // Functions to be implemented 
    // push(item) 
    // push function 
    push(element) {
        // push element into the items 
        this.items.push(element);
    }

    // pop function 
    pop() {
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    // peek function 
    peek() {
        // return the top most element from the stack 
        // but does'nt delete it. 
        return this.items[this.items.length - 1];
    }

    // isEmpty function 
    isEmpty() {
        // return true if stack is empty 
        return this.items.length == 0;
    }

    // printStack function 
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

// Function to check if A[] is 
// Stack Sortable or Not. 
check = function (A) {
    // Stack S 
    var S = new Stack(); 

    // Pointer to the end value of array B. 
    let B_end = 0, N = A.length;

    // Traversing each element of A[] from starting 
    // Checking if there is a valid operation 
    // that can be performed. 
    for (let i = 0; i < N; i++) {
        // If the stack is not empty 
        if (S) {
            // Top of the Stack. 
            let top = S.peek();

            // If the top of the stack is 
            // Equal to B_end+1, we will pop it 
            // And increment B_end by 1. 
            while (top == B_end + 1) {
                // if current top is equal to 
                // B_end+1, we will increment 
                // B_end to B_end+1 
                B_end = B_end + 1;

                // Pop the top element. 
                S.pop();

                // If the stack is empty We cannot 
                // further perfom this operation. 
                // Therefore break 
                if (S.isEmpty()) {
                    break;
                }

                // Current Top 
                top = S.peek();
            }

            // If stack is empty 
            // Push the Current element 
            if (S.isEmpty()) {
                S.push(A[i]);
            }
            else {
                top = S.peek();

                // If the Current element of the array A[] 
                // if smaller than the top of the stack 
                // We can push it in the Stack. 
                if (A[i] < top) {
                    S.push(A[i]);
                }
                // Else We cannot sort the array 
                // Using any valid operations. 
                else {
                    // Not Stack Sortable 
                    return false;
                }
            }
        }
        else {
            // If the stack is empty push the current 
            // element in the stack. 
            S.push(A[i]);
        }
    }

    // Stack Sortable 
    return true;
};

// test Code 
arr = [4, 1, 2, 3];
arr2 = [2, 3, 1];
check(arr) ? console.log("YES") : console.log("NO");
check(arr2) ? console.log("YES") : console.log("NO");

