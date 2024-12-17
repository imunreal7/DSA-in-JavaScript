function merge(left, right) {
    let sortedArr = [];

    while (left.length && right.length) {
        if (left[0][0] >= right[0][0]) sortedArr.push(left.shift());
        else sortedArr.push(right.shift());
    }

    return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function knapsack(profitValues, itemsWeight, capacity) {
    let items = [];

    // Calculate profit-to-weight ratio and store with corresponding values and weights
    for (let i = 0; i < itemsWeight.length; i++) {
        items.push([profitValues[i] / itemsWeight[i], profitValues[i], itemsWeight[i]]);
    }

    // Sort items based on profit-to-weight ratio in descending order
    let sortedItems = mergeSort(items);

    let maxProfit = 0;

    for (let i = 0; i < sortedItems.length; i++) {
        let [ratio, value, weight] = sortedItems[i];

        if (capacity >= weight) {
            // Take the full item
            maxProfit += value;
            capacity -= weight;
        } else {
            // Take a fraction of the item
            maxProfit += ratio * capacity;
            break; // Knapsack is full
        }
    }

    return maxProfit;
}

// Example Usage:
const values = [25, 24, 15];
const weights = [18, 15, 10];
const capacity = 20;
console.log("Maximum Value:", knapsack(values, weights, capacity)); // Output: 31.5

