const typeConsole = (type = "log") => {
    const message = `Đây là type: ${type}`;
    
    if (type === "log") {
        console.log(message);
    } else if (type === "warn") {
        console.warn(message);
    } else if (type === "error") {
        console.error(message);
    } else {
        console.log(`Type "${type}" không được hỗ trợ. Mặc định sử dụng console.log: ${message}`);
    }
};
typeConsole(); 
typeConsole("warn"); 
typeConsole("error"); 
typeConsole("info"); 