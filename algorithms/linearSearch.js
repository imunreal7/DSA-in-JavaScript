function linearSearch(array, target) {
    for (let key = 0; key < array.length; key++) {
        if (array[key] === target) {
            return key;
        }
    }
    return -1;
}

console.log(linearSearch([2, 4, 5, 5, 6, 6], 5));
//Big-O(n)

