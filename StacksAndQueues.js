class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.head) newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        const removedNode = this.head;
        this.length--;
        this.head = removedNode.next;
        return removedNode.val;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;            
        } else {
            this.tail.next = newNode;            
        }        
        this.tail = newNode;                
        return ++this.length;        
    }

    dequeue() {
        if (!this.head) return undefined;
        const removedNode = this.head;
        this.length--;
        this.head = removedNode.next;
        if (!this.length) this.tail = null;
        return removedNode.val;
    }
}


// let myStack = new Stack();
// myStack.push(0);
// myStack.push(1);
// myStack.push(2);

let q = new Queue();
q.enqueue("First");
q.enqueue("Second");
q.enqueue("Third");
q.enqueue("Fourth");