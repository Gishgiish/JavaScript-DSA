
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(){
        // create new node
        let newNode = new Node(val);

        if(!this.head){
            // if list is empty. set the added node to be both the head and the tail(edge case)
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if the list isn't empty add it to the end and update the tail
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;

        let temp = this.tail;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length --;
        return temp;
    }
    shift(){
        if(!this.head) return undefined;

        let oldHead = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        
        this.length --;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }
    get(index){
        // if(index < 0 || index >= this.length) return null;

        // let count = 0;
        // let current = this.head;

        // while(count !== index){
        //     current = current.next;
        //     count ++;
        // }
        // return current;

        // optimized version:
        if(index < 0 || index >= this.length) return null;

        let half =this.length/2;

        if(index <= half) {
            let count = 0;
            let current = this.head;

            while(count !== index){
                current = current.next;
                count ++;
            }
        return current;
        } else {
            let count = this.length - 1;
            let current = this.tail;

            while (count !== index){
                current = current.prev;
                count --;
            }
            return current;
        }
    }
    set(index, val){
        let foundNode = this.get(index);

        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
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

        let newNode = new Node(val);
        let insertNode = this.get(index - 1);
        let afterNode = insertNode.next;

        insertNode.next = newNode;
        newNode.prev = insertNode;

        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length ++;
        return true;
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index = this.length - 1) return this.pop();        
        if(index === 0) return this.shift();

        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        
        removedNode.next = null;
        removedNode.prev = null;
        this.length --;

        return removed;        
    }
}