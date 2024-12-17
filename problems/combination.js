function getCombinations(arr) {
    const results = [];

    const combine = (start, path) => {
        results.push([...path]);
        for (let i = start; i < arr.length; i++) {
            combine(i + 1, [...path, arr[i]]);
        }
    };

    combine(0, []);
    let res = results.slice(1);
    console.log();
    return res.length;
}

console.log(getCombinations([1, 2, 3]));

