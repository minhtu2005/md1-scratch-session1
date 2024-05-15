const sum = (array) => {
    let total = 0;
    for (const number of array) {
        if (number % 2 === 0) {
            total += number;
        }
    }
    return total;
};
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sum(numbers));