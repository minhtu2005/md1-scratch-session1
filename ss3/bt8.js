const insertArrayAtPosition = (array1, array2, position) => {
    if (position < 0 || position > array1.length) {
        console.log("Vị trí không hợp lệ");
        return;
    }
    const newArray = [
        array1.slice(0, position),
        array2,
        array1.slice(position)
    ];
    
    return newArray;
};

const array1 = [1, 2, 3, 4];
const array2 = ['a', 'b', 'c'];
const position = 2;

const resultArray = insertArrayAtPosition(array1, array2, position);

if (resultArray) {
    console.log(resultArray);
  
}