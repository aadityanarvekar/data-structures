class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        const removedNode = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;
        return removedNode;
    }

    shift() {
        if (!this.head) return undefined;
        const removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;              
        }        
        this.length--;
        return removedNode;
    }

    unshift(val) {
        const newNode = new Node(val);        
        if (this.length === 0) {
            this.tail = newNode;
            this.head = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index <= 0 || index >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    set(index, val) {
        const node = this.get(index);
        if (node) {
            const oldVal = node.val;
            node.val = val;
            return oldVal;        
        } else {
            return -1;
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;        
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        const node = this.get(index);
        if (node) {
            const newNode = new Node(val);
            const prev = node.prev;                        
            prev.next = newNode, newNode.prev = prev;     
            newNode.next = node, node.prev = newNode;
            this.length++;
            return true;
        } else {
            return false;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) return -1;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const nodeToBeRemoved = this.get(index);
        const prevNode = nodeToBeRemoved.prev;
        const nextNode = nodeToBeRemoved.next;
        nodeToBeRemoved.prev = null, nodeToBeRemoved.next = null;
        prevNode.next = nextNode, nextNode.prev = prevNode;
        this.length--;
        return nodeToBeRemoved;
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);