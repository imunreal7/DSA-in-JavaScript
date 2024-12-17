class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        let newNode = new Node(value);
        this.first = newNode;
        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
        }
        newNode.next = this.first;
        this.first = newNode;
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    min() {
        if (this.length === 0) {
            return undefined;
        }

        let current = this.first;
        let minValue = current.value;

        while (current.next) {
            current = current.next;
            if (current.value < minValue) minValue = current.value;
        }

        return minValue;
    }
}

let groseryBag = new Stack(1);

groseryBag.push(-9);
groseryBag.push(100);

console.log(groseryBag.min());

