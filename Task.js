/* Simple Hello World in Node.js */
const arr = [1, 2, 3, 1, 1, 3];
const countPairs = (arr = []) => {
    const { length } = arr;
    let count = 0;
    const copy = arr.slice();
    copy.sort((a, b) => a - b);
    for (let i = 0; i < length; i++) {
        if (copy[i] === copy[i + 1]) {
            i++;
            count++;
        }
    }
    return count;
};
console.log(countPairs(arr));