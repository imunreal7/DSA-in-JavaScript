function merge(left, right) {
    sortedArray = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) sortedArray.push(left.shift());
        else sortedArray.push(right.shift());
    }
    return [...sortedArray, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([-6, 20, 8, -2, 4]));
// Average case - O(nlogn)

