const checkStartString = (longString, shortString) => {
    return longString.startsWith(shortString);
};
console.log(checkStartString("hello world", "hello")); 
console.log(checkStartString("hello world", "world"));