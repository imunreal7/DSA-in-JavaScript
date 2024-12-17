class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class LinkedList {
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
        this.tail = newNode;
        this.length++;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        let temp = this.head;
        let prev = this.head;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
    }

    unshift(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newValue;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        if (this.length === 0);
        {
            this.tail = null;
        }
        return temp;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let temp = this.head;
        while (temp) {
            if (!temp.next) {
                return temp;
            } else temp = temp.next;
        }
        return temp;
    }

    get(index) {
        let temp = this.head;
        let counter = 0;

        while (temp) {
            if (counter === index) return temp;

            counter++;
            temp = temp.next;
        }

        return undefined;
    }

    set(index, value) {
        let temp = this.get(index);

        if (temp) {
            temp.value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index === 0) {
            return this.unshift(value);
        }

        if (index === this.length) {
            return this.push(value);
        }

        let temp = this.get(index - 1);

        let newNode = new Node(value);

        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return newNode;
    }

    size() {
        let counter = 0;
        let temp = this.head;

        while (temp) {
            temp = temp.next;
            counter++;
        }
        return counter;
    }

    clear() {
        this.head = null;
    }
}

let cities = new LinkedList("Orai");
cities.push("Indore");
// cities.pop();
cities.push("Mumbai");
// cities.shift("Mumbai");
// console.log(cities.set(1, "India"));
cities.insert(2, "China");
console.log(cities.get(2));
console.log(cities.size());

