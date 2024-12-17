function insertionSort(unsortedArry) {
    let sortedArray = [unsortedArry[0]];
    for (let i = 1; i < unsortedArry.length; i++) {
        let numberToInsert = unsortedArry[i];
        let inserted = false;
        for (let j = sortedArray.length - 1; j >= 0; j--) {
            if (numberToInsert < sortedArray[j]) {
                sortedArray[j + 1] = sortedArray[j];
            } else {
                sortedArray[j + 1] = numberToInsert;
                inserted = true;
                break;
            }
        }

        // If the number is smaller than all elements in the sorted array
        if (!inserted) {
            sortedArray[0] = numberToInsert;
        }
    }
    return sortedArray;
}

console.log(insertionSort([-6, 20, 8, -2, 4]));
//Worst Case (O(n^2)):
//Best Case (O(n)):
//Average Case (O(n^2)):
// Space complexity O(n)

//ALTERNATE with same complexity
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numToInsert = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than numToInsert one position ahead
        while (j >= 0 && arr[j] > numToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the numToInsert in its correct position
        arr[j + 1] = numToInsert;
    }
    return arr;
}

//Average Case (O(n^2)):
// Space complexity O(1)

