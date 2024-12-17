class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        let lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift() {
        let firstItem = this.data[0];
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    deleteByIndex(index) {
        let deletedItem = this.data[index];
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return deletedItem;
    }
}

const fruits = new MyArray();
fruits.push("Apple");
fruits.push("Orange");
fruits.push("Mango");
console.log(fruits);
fruits.deleteByIndex(1);
console.log(fruits);

