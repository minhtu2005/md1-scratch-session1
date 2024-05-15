const mergeObjects = (...objects) => {
    return objects.reduce((acc, obj) => {
        return { ...acc, ...obj };
    }, {});
};
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };
const mergedObject = mergeObjects(obj1, obj2, obj3);
console.log(mergedObject); 