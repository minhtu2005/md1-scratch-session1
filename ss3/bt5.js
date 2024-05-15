const printArguments = (...args) => {
    args.forEach(arg => console.log(arg));
};
printArguments(1, 2, 3);
printArguments('a', 'b', 'c', 'd');