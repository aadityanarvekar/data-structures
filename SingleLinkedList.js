class Node {
    constructor(val = 0) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedeList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        if (this.length === 0) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            this.tail.next = new Node(val);  
            this.tail = this.tail.next;          
        }                
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--; 
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;       
    }

    shift() {
        if (!this.head) return undefined;
        const headNode = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return headNode; 
    }

    unshift(val) {
        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        if (this.length === 1) {
            this.tail = newHead;
        }
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let i = 0;
        let node = this.head;
        while (i < index) {
            node = node.next;
            i++;
        }
        return node;
    }

    set(index, val) {
//         if (index < 0 || index >= this.length) return -1;
//         let counter = 0;
//         let node = this.head;
//         while (counter < index) {
//             counter++;
//             node = node.next;
//         }
//         const oldValue = node.val;
//         node.val = val;
//         return oldValue;
        const node = this.get(index);
        if (node) {
            const oldVal = node.val;
            node.val = val;
            return oldVal;
        }
        return -1;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;        
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        
        const newNode = new Node(val);
        const prevNode = this.get(index - 1);        
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        let returnNode = this.get(index);
        if(index === 0) {            
            this.head = this.head.next;                                    
        } else {
            let prevNode = this.get(index - 1);
            prevNode.next = prevNode.next.next;            
        }        
        this.length--;
        if (this.length <= 1) this.tail = this.head;
        return returnNode;
    }

    reverse() {
        let current = this.head;
        this.tail = current;
        let nextNode = current.next;
        current.next = null;
        if (!nextNode) return this;
        while (current && nextNode) {
            let nextNextNode = nextNode.next;
            nextNode.next = current;
            current = nextNode;
            nextNode = nextNextNode;
        }
        this.head = current;
        return this;
    }   
}


let siblings = new SinglyLinkedeList();
siblings.push('Angel');
siblings.push('Erna');
siblings.push('Lisa');
siblings.push('Netty');
siblings.push('Aadi');
siblings.push('Guddi');