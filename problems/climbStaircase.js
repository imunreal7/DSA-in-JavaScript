function climbStaircase(numberOfWaysToClimb) {
    stepsCanTake = [1, 2];
    for (let i = 2; i < numberOfWaysToClimb; i++)
        stepsCanTake[i] = stepsCanTake[i - 1] + stepsCanTake[i - 2];
    return stepsCanTake[numberOfWaysToClimb - 1];
}

console.log(climbStaircase(5));

