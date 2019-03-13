//https://medium.com/@joshuablankenshipnola/checking-for-linked-list-cycles-in-javascript-77ec9adc6822


var hasCycle=function(linkedList){
    // create a slow pointer and a fast pointer
    let tortoise=linkedList;
    let hare=linkedList;

    //while the two pointers exist and the fast pointer has a next value.
    while(hare && hare.next){
        //move the slow pointer by one node and the fast pointer by 2 nodes.
        tortoise=tortoise.next;
        hare=hare.next.next;

        //if at any time the slow and fast pointer are equal the linked list contains cycle.
        if(tortoise===hare){
            return true;
        }
    }
    //return false if a cycle is never found.
    return false;
};

console.log(hasCycle([1,3,1,2,1]));