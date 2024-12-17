function binarySearch(array, target) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (array[middleIndex] === target) return middleIndex;
        if (target < array[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}
console.log(binarySearch([2, 4, 5, 5, 6, 8], 6)); // Big-O(log(n))

// Recursive function for binary search
function recursiveBS(arr, target, left, right) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
        return recursiveBS(arr, target, left, mid - 1);
    } else {
        return recursiveBS(arr, target, mid + 1, right);
    }
}
arr = [-5, -2, 3, 5, 10];
target = -10;
console.log(recursiveBS(arr, target, 0, arr.length - 1)); // Big-O(log(n))

