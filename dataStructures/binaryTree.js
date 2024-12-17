class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            } else {
                // value already exists. don't duplicate and return
                return;
            }
        }
    }

    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return current;
            } else if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            }
        }
        return false;
    }

    breadthFirstTree() {
        if (!this.root) return [];

        const queue = [this.root];
        const result = [];

        while (queue.length) {
            const currentNode = queue.shift();
            result.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return result;
    }

    dfsPreorder() {
        let result = [];

        function traverse(node) {
            if (!node) return;
            result.push(node.value);
            console.log("result:", result);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    dfsIneorder() {
        let result = [];

        function traverse(node) {
            if (!node) return;
            traverse(node.left);
            result.push(node.value);

            traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    dfsPostorder() {
        let result = [];

        function traverse(node) {
            if (!node) return;
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }
}

let bst = new BinaryTree();
bst.insert(5);
bst.insert(8);
bst.insert(3);
bst.insert(1);
bst.insert(7);
bst.insert(9);
console.log(bst);
console.log(bst.search(9));
console.log(bst.breadthFirstTree());
console.log(bst.dfsPreorder());
console.log(bst.dfsIneorder());
console.log(bst.dfsPostorder());

