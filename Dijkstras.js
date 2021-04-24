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

class WeightedGraph {
    constructor() {        
        this.adjacencyList = {};
    }

    addVertex(v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = []
    }

    addEdge(v1, v2, w) {
        this.adjacencyList[v1].push({node: v2, weight: w});
        this.adjacencyList[v2].push({node: v1, weight: w});
    }

    shortestPath(start) {        
        const dist = {};
        const visited = {};
                            
        let nodeQueue = new PriorityQueue();
        nodeQueue.enqueue(start, 0);         
        dist[start] = 0;

        for (let n in this.adjacencyList) {
            if (n !== start) {                
                dist[n] = Number.POSITIVE_INFINITY;                
            }
        }        

        while(nodeQueue.values.length) {
            let parentNode = nodeQueue.dequeue();                        
            let {val, priority} = parentNode;
            if (visited[val]) continue;
            dist[val] = priority;
            visited[val] = true;
            for (let neighbor of this.adjacencyList[val]) {
                const distToNeighbor = priority + neighbor.weight;
                if (distToNeighbor < dist[neighbor.node]) {
                    nodeQueue.enqueue(neighbor.node, distToNeighbor);
                } 
                else {
                    nodeQueue.enqueue(neighbor.node, dist[neighbor.node]);
                }
            }
        }

        return dist;
    }
}

let g = new WeightedGraph();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");

g.addEdge("a", "b", 4);
g.addEdge("a", "c", 2);
g.addEdge("c", "d", 2);
g.addEdge("c", "f", 4);
g.addEdge("d", "f", 1);
g.addEdge("d", "e", 3);
g.addEdge("f", "e", 1);
g.addEdge("b", "e", 3);