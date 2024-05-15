const myNumber = 10;
const myArray = [1, 2, 3];

try {
 
    myNumber = 20;
} catch (error) {
    console.log("Lỗi khi gán lại giá trị cho biến số nguyên:", error.message);
}
myArray.push(4);

console.log("Giá trị của myArray sau khi thêm phần tử:", myArray);