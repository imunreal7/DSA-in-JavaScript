class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size);
    }

    _hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.keyMap.length;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hashFunction(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        return this.keyMap;
    }

    get(key) {
        const index = this._hashFunction(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
    }

    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    }

    getAllValues() {
        const values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    }
}

const hashTable = new HashTable();
hashTable.set("Aman", "90391-31234");
hashTable.set("Aradhan", "90808-90877");
hashTable.set("city", "New York");
console.log(hashTable.get("Aman"));
console.log(hashTable.getAllKeys());
console.log(hashTable.getAllValues());

