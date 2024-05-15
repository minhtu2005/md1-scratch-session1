for (let i = 0; i <= 5; i++) {
    console.log(i); 
}

try {
    console.log(i); 
} catch (error) {
    console.log("Lỗi:", error.message); 
}