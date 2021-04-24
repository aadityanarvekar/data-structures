class Node {
    constructor(val, priority = 5) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        if (this.values.length > 1) {
            let idx = this.values.length - 1;
            while (idx > 0) {
                let parentIdx = Math.floor(idx - 1) / 2;
                if (this.values[parentIdx] && this.values[parentIdx].priority > this.values[idx].priority) {
                    let temp = this.values[parentIdx];
                    this.values[parentIdx] = this.values[idx];
                    this.values[idx] = temp;
                    idx = parentIdx;
                } else {
                    break;
                }
            }
        }
        return this;
    }

    dequeue() {
        const root = this.values.shift();
        if (this.values.length > 0) this.values.unshift(this.values.pop());
        if (this.values.length > 1) {
            let idx = 0;
            const element = this.values[idx];
            while(idx < this.values.length) {
                let swap = false;
                let childIdx1 = 2 * idx + 1,
                    childIdx2 = 2 * idx + 2;
                let childElement1, childElement2;
                if (childIdx1 < this.values.length) childElement1 = this.values[childIdx1];
                if (childIdx2 < this.values.length) childElement2 = this.values[childIdx2];

                if (childElement1 && childElement1.priority < element.priority) {
                    swap = childIdx1;                    
                }

                if (
                        (!swap && childElement2 && childElement2.priority < element.priority) || 
                        (swap && childElement2 && childElement2.priority < element.priority && childElement2.priority < childElement1.priority)
                    )
                {
                    swap = childIdx2;                    
                }                

                if (!swap) break;
                
                this.values[idx] = this.values[swap];
                this.values[swap] = element;
                idx = swap;
            }
        }
        return root;
    }
}


let q = new PriorityQueue();
q.enqueue("Aadi", 5);
q.enqueue("Angel", 1);
q.enqueue("Guddi", 2);
q.enqueue("Pa", 2);
