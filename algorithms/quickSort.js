function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (pivot > arr[i]) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([-6, 20, 8, -2, 4]));
//Worst case - O(n^2)
// Average case - O(nlogg)
