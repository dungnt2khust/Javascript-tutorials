var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100
    },
    {
        id: 2,
        name: 'Javascript',
        coin: 100
    },
    {
        id: 3,
        name: 'Javascript',
        coin: 100
    },
    {
        id: 4,
        name: 'Javascript',
        coin: 100
    },
    {
        id: 5,
        name: 'Javascript',
        coin: 100
    }
];

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);
sumCoin = courses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0);

// console.log(sumCoin);