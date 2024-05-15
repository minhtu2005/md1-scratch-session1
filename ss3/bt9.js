const zipArrays = (...arrays) => {
    if (arrays.length === 0) return [];
    const length = arrays[0].length;
    for (let array of arrays) {
        if (array.length !== length) {
            console.log("Các mảng phải có độ dài bằng nhau");
            return;
        }
    }
    const result = [];
    for (let i = 0; i < length; i++) {
        const tempArray = [];
        for (let array of arrays) {
            tempArray.push(array[i]);
        }
        result.push(tempArray);
    }

    return result;
};
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const array3 = [true, false, true];

const zippedArray = zipArrays(array1, array2, array3);

console.log(zippedArray); 