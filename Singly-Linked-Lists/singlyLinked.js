// node contains: piece of data(val) and ref to next node(next)

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // add methods to work with the list
    // push to add a new node at the end of the list
    push(val){
        // add a new node using the value
        let newNode = new Node(val);
        if(!this.head){
            // if list is empty. set the added node to be both the head and the tail(edge case)
            this.head = newNode;
            this.tail = this.head;
        } else {
            // if the list isn't empty add it to the end and update the tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // increment the list
        this.length++; 
        // return the whole list
        return this;
    }
    // pop: removing a node from the end of the linked list
    pop(){
        // if list is empty(edge case)
        if(!this.head) return undefined;

        let temp = this.head;
        let newTail = temp;

        while(temp.next){
            newTail = temp;
            temp = temp.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        // if there was only one item on the list
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return temp;
    }
    // shift: removing a node from the beginning of the linked list
    shift(){
        if(!this.head) return undefined;

        // store current head in a variable
        let temp = this.head;
        // set the head property to be the current head's next property
        this.head = temp.next;
        // decrement length by 1
        this.length --;
        // set the list to be empty if its empty
        if(this.length === 0){
            // this.head = null;
            this.tail = null;
        }

        // return val of the node removed
        return temp;        
    }
    // unshift: adding a node to the beginning of the list
    unshift(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }
    // retrieving values
    // get: retrieving a node by its position(index) in the list
    get(index){
        // if the index is less than zero or greater than or equal to the length of the list return null
        if(index < 0 || index >= this.length) return null;

        let count = 0;
        let temp = this.head;

        while(count !== index){
            temp = temp.next;
            count++;
        }

        return temp;
    }
    // set: changing the value of a node based on its position in the linked list
    set(index, val){
        // use get to find the specific node
        let foundNode = this.get(index);

        // check if the node exists and change it
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    // insert: adding a new node at a specific position
    insert(index, val){
        
        if(index < 0 || index > this.length) return false;

        // if index is equal to length use push()
        if(index = this.length){
            this.push(val);
            return true;
        }

        // if index is 0, unshift()
        if(index === 0){
            this.unshift(val);
            return true;
        }

        // place holder
        let newNode = new Node(val);

        // otherwise, using the get method, access the node at the index -1
        let prev = this.get(index - 1);

        // original next of the node that we are inserting after
        let temp = prev.next;

        // set the next property on that node to be the new node
        prev.next = newNode;
        // set the next property on the new node to be the previous next 
        newNode.next = temp;
        // increment the length
        this.length ++;
        return true;

    }
    // remove: removing a node from a specified position on the list
}

let list = new SinglyLinkedList();
// add with list.push()
// list.push()