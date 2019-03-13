//https://code.tutsplus.com/articles/data-structures-with-javascript-stack-and-queue--cms-23348
function Stack() {
    this.size = 0;
    this.storage = new Map();
}
Stack.prototype.push = function (data) {
    let size = ++ this.size;
    this.storage[size] = data;
};
//Stack removes most recently added data.
Stack.prototype.pop = function () {
    let size = this.size, deletedData;
    if(size){
    deletedData = this.storage[size];
    delete this.storage[size];
    this.size--;
    return deletedData;
    }
};

var stack=new Stack();
stack.push(123);
stack.push(231);
stack.push(345);
stack.push(567);
console.log(stack);
console.log(stack.pop());

//queue implementation..
function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}
 
Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};
 
Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};
 
Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
 
        return deletedData;
    }else{
        console.log("No data !!!");
    }
};
var queue=new Queue();
queue.enqueue("sanjay");
queue.enqueue("SKS");
queue.enqueue("Raks");
console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());