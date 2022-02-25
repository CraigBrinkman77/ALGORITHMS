// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
// ⚠ other methods removed for brevity ⚠
// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // == Main Methods ==

    // return true or false if the current linked list is a palindrome
    // a palindrome is a string of characters equal to itself when reversed
    // assume your node.data are all numbers or lowercase chars
    isPalindrome() {
      let forward = this.head;
      let backward = this.tail;
      //while they haven't crossed or hit eachother
      while(forward != backward){
        if(forward.prev != null && forward.prev == backward){
          return true
        }
        // if the front value doesn't eual the back value
        if(forward.data != backward.data){
          return false;
        }
        //move the pointers
        forward = forward.next;
        backward = backward.prev
      }
      
      return true
    }
    // ⚠ other methods removed for brevity ⚠
    // reverse a doubly linked list in place
    reverse() { 
        let walker = this.head;
        let runner = this.head;
        while (runner) {
            runner = runner.next;
            walker.next = walker.prev;
            walker.prev = runner;
            walker = runner
        }
        let temp = this.tail;
        this.tail = this.head;
        this.head = temp;
    }
    print() {
        let runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }
    // ---------------------------
    // ⚠ other methods removed for brevity ⚠
    // remove and return the first node with data === val, if it exists
    // what if the list is empty?
    // what if the target val is the head?
    // what if the target val is the tail?
    // what if the target val is the only node in the list?
    removeVal(val) { }
    // ⚠ other methods removed for brevity ⚠

      // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
      return this
    }
}
let list = new DLList();
list.addHead(new DLLNode("r")).addHead(new DLLNode("d")).addHead(new DLLNode("a")).addHead(new DLLNode("d")).addHead(new DLLNode("t"));
console.log(list.isPalindrome());
list.reverse();
console.log(list);
// ⚠ ... other methods removed for brevity ⚠
// instantiate the DLL
// add a few nodes
// call the methods
// TEST EARLY and OFTEN!
// Good luck :)