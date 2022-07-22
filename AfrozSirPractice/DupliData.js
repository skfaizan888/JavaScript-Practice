const nums = [1, 2, 3, 2, 3, 4, 2, 5, 1];

const counts = nums.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
}, Object.create(null));

console.log(counts)