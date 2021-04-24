class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let childIndex = this.values.length - 1;
        let parentIndex = Math.floor((childIndex - 1)/ 2);
        while (parentIndex >= 0 && this.values[childIndex] > this.values[parentIndex]) {
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[childIndex];
            this.values[childIndex] = temp;
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex- 1)/ 2);
        }
        return this;
    }

    extractMax() {
        const root = this.values.shift();
        this.values.unshift(this.values.pop());
        let  parentIdx = 0;
                
        while (true) {
            let leftChildIdx = 2 * parentIdx + 1;
            let rightChildIdx = leftChildIdx + 1;
            let parent = this.values[parentIdx];
            
            if (leftChildIdx < this.values.length && rightChildIdx < this.values.length && this.values[parentIdx] < this.values[leftChildIdx] &&  this.values[parentIdx] < this.values[rightChildIdx]) {                
                if (this.values[leftChildIdx] > this.values[rightChildIdx]) {
                    this.values[parentIdx] = this.values[leftChildIdx];
                    this.values[leftChildIdx] = parent;                    
                    parentIdx = leftChildIdx;
                } else {
                    this.values[parentIdx] = this.values[rightChildIdx];
                    this.values[rightChildIdx] = parent;
                    parentIdx = rightChildIdx;
                }                
            } else if (leftChildIdx < this.values.length && this.values[parentIdx] < this.values[leftChildIdx]) {
                this.values[parentIdx] = this.values[leftChildIdx];
                this.values[leftChildIdx] = parent;                    
                parentIdx = leftChildIdx;                
            }  else if (rightChildIdx < this.values.length && this.values[parentIdx] < this.values[rightChildIdx]) {
                this.values[parentIdx] = this.values[rightChildIdx];
                this.values[rightChildIdx] = parent;
                parentIdx = rightChildIdx;                
            } else {
                break;
            }
        }
        return root;        
    }
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(10);
maxHeap.insert(7);
maxHeap.insert(5);
maxHeap.insert(15);