function wordCounter(words) {
    const loweredCase = words.toLowerCase();
    wordMap = {};

    wordArr = words.split(" ");
    for (const word of wordArr) {
        if (wordMap[word]) wordMap[word]++;
        else wordMap[word] = 1;
    }
    return wordMap;
}

console.log(wordCounter("My name my name is Bond James Bond"));

