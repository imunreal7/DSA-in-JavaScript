function cartisianProduct(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }
    return result;
}

console.log(cartisianProduct([1, 2], [3, 4, 5]));

// Big-O(mn)
// m = length of arr1
// n = length of arr2

// if m = n then Big-O(n^2)

