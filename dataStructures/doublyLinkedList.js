class Node {
    constructor(value) {
        this.value = value;
        this.head = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;

        this.head.prev = newNode;
        this.head = newNode;
        this.length++;

        return this;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.mext = prev;
            prev = temp;
            temp = next;
        }
    }
}

const family = new DoublyLinkedList("Ashok");
family.push("Neelam");
family.push("Aman");
family.reverse();

// family.pop();
console.log(family);

