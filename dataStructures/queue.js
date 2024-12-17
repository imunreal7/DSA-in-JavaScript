class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        let newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }

        this.last.next = newNode;
        this.next = newNode;

        this.length++;
        return newNode;
    }

    dequeue(value) {
        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        }
        let temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

let rationCardQueue = new Queue("Aman");
rationCardQueue.enqueue("Sunita");
rationCardQueue.enqueue("Kaka");
rationCardQueue.dequeue();
console.log(rationCardQueue);

