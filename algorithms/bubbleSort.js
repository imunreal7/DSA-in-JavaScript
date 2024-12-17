function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // Reduce the range of comparison as the largest element is already sorted
    } while (swapped);
    return arr;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));
//Worst Case (O(n^2)):
//Best Case (O(n)):
//Average Case (O(n^2)):

// Space complexity O(1)- constant

