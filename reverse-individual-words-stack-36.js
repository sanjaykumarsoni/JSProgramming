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

function printWords(str) {
    var st = new Stack();
    let tempRev=[];
    // Traverse given string and push all characters 
    // to stack until we see a space. 
    for (let i = 0; i < str.length; ++i) {
        if (str[i] != ' ')
            st.push(str[i]);

        // When we see a space, we print contents 
        // of stack. 
        else {
            while (st.isEmpty() == false) {
                tempRev.push(st.pop());
                //st.pop();
            }

            tempRev.push(" ");
        }
    }

    // Since there may not be space after 
    // last word. 
    while (st.isEmpty() == false) {
        tempRev.push(st.peek());
        st.pop();
    }
    console.log(tempRev.join(""));
}

// test code 
let s = "GeeksforGeeks is good to learn";
printWords(s);

