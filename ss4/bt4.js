const checkElement = (array, value) => {
    return array.includes(value);
};
const array = [1, 2, 3, 4, 5];
console.log(checkElement(array, 3)); 
console.log(checkElement(array, 6));