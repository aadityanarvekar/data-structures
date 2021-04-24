class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];        
        return this;
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1].includes(vertex2)) this.adjacencyList[vertex1].push(vertex2);
        if (!this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex2].push(vertex1);
        return this;
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
        return this;
    }

    removeVertex(v1) {
        for (let v2 of this.adjacencyList[v1]) {            
            this.removeEdge(v2, v1);
        }
        delete this.adjacencyList[v1];
        return this;
    }

    dfs(v, traversedList = [], visitedList = {}) {        
        if (!v) return undefined;
        traversedList.push(v);
        visitedList[v] = true;
        for (let node of this.adjacencyList[v]) {
            if (!visitedList[node]) this.dfs(node, traversedList, visitedList);
        }
        return traversedList;
    }

    dfs_iterative(v) {
        if (!v) return undefined;

        let stack = [];
        let traversedList = [];
        let visitedList = {};

        stack.push(v);
        while(stack.length > 0) {
            let vertex = stack.pop();
            if (!visitedList[vertex]) {
                traversedList.push(vertex);
                visitedList[vertex] = true;                
            }
            for (let node of this.adjacencyList[vertex]) {
                if (!visitedList[node]) stack.push(node);            
            }
        }
        return traversedList;    
    }

    bfs(v) {
        if (!v) return undefined;
        let queue = [v];
        let traversedList = [];
        let visitedList = {};

        while(queue.length) {
            let node = queue.shift();
            if (!visitedList[node]) {
                traversedList.push(node);
                visitedList[node] = true;                
            }            
            for (let n of this.adjacencyList[node]) {
                if (!visitedList[n]) queue.push(n);
            }
        }
        return traversedList;
    }
}

let g = new Graph();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");
g.addEdge("a", "b");
g.addEdge("c", "a");
g.addEdge("d", "b");
g.addEdge("d", "e");
g.addEdge("d", "f");
g.addEdge("e", "f");
g.addEdge("e", "c");

