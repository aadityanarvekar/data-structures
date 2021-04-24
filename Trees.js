class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (!this.root) this.root = new Node(val);
        else {
            let node = this.root;
            while (node) {
                if (val === node.val) return undefined;
                if (val < node.val) {
                    if (node.left) node = node.left                    
                    else {
                        node.left = new Node(val);
                        return this;
                    }
                } else {
                    if (node.right) node = node.right
                    else {
                        node.right = new Node(val);
                        return this;
                    }
                }
            }
        }        
    }

    contains(val) {
        let node = this.root;
        while (node) {
            if (node.val === val) return true;
            if (val < node.val) node = node.left
            else node = node.right
        }
        return false;
    }

    bfs() {
        let queue = [];
        let visited = [];
        if (this.root) queue.push(this.root);
        while(queue.length) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            visited.push(node.val);
        }
        return visited;
    }

    dfs_pre() {
        let node = this.root, 
            visited = [];
        if (node) this.dfs_pre_helper(node, visited);
        return visited;
    }

    dfs_pre_helper(node, visited) {
        visited.push(node.val);
        if (node.left) this.dfs_pre_helper(node.left, visited);
        if (node.right) this.dfs_pre_helper(node.right, visited);
    }

    dfs_post() {
        let node = this.root,
            visited = [];
        if (node) this.dfs_post_helper(node, visited);
        return visited;
    }

    dfs_post_helper(node, visited) {
        if (node.left) this.dfs_post_helper(node.left, visited);
        if (node.right) this.dfs_post_helper(node.right, visited);
        visited.push(node.val);
    }

    dfs_inorder() {
        let node = this.root,
            visited = [];
        if (node) this.dfs_inorder_helper(node, visited);
        return visited;
    }

    dfs_inorder_helper(node, visited) {
        if (node.left) this.dfs_inorder_helper(node.left, visited);
        visited.push(node.val);
        if (node.right) this.dfs_inorder_helper(node.right, visited);
    }

}

let tree = new BST();
tree.insert(5);
tree.insert(3);
tree.insert(2);
tree.insert(7);
tree.insert(10);
tree.insert(-4);
tree.insert(1);
tree.insert(23);
tree.insert(40);
tree.insert(4);
tree.insert(8);

