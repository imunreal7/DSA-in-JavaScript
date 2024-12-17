function getPermutations(arr) {
    const results = [];

    const permute = (path, options) => {
        if (options.length === 0) {
            results.push(path);
            return;
        }
        for (let i = 0; i < options.length; i++) {
            permute([...path, options[i]], options.slice(0, i).concat(options.slice(i + 1)));
        }
    };

    permute([], arr);
    return results;
}

console.log(getPermutations(["A", "B", "C"]));

