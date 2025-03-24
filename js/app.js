// console.log("Hello World!");

// # Homework-6:

console.log("1-masala:");

const addElement = (arr, element) => {
    arr.push(element);
    return arr;
}

console.log(addElement([1, 2, 3, 4], 5));



console.log("2-masala:");

const removeLastElement = (arr) => {
    arr.pop();
    return arr;
}

console.log(removeLastElement([1, 2, 3, 4]));



console.log("3-masala:");


const getEvenNumbers = (arr) => {
    let newArray = [];
    arr.forEach(elem => {
        if (elem % 2 === 0) {
            newArray.push(elem);
        }
    });
    return newArray;
}

console.log(getEvenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));



console.log("4-masala:");

const doubleNumbers = (arr) => {
    let newArray = [];
    arr.forEach(elem => {
        elem = elem * 2;
        newArray.push(elem);
    });
    return newArray;
}

console.log(doubleNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));



console.log("5-masala:");

const containsElement = (arr, element) => {
    if (arr.includes(element)) {
        return true;
    } else {
        return false;
    }
}

console.log(containsElement([1, 2, 3, 4, 5, 6, 7], 12));
console.log(containsElement([1, 2, 3, 4, 5, 6, 7], 3));



console.log("6-masala:");

const findIndexx = (arr, element) => arr.indexOf(element);


console.log(findIndexx([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(findIndexx([1, 2, 3, 4, 5, 6, 7, 8], 7));



console.log("7-masala:");

const removeFirstElement = (arr) => {
    arr.shift();
    return arr;
}

console.log(removeFirstElement([1, 2, 3, 4]));



console.log("8-masala:");

const addElementToStart = (arr, element) => {
    arr.unshift(element);
    return arr;
}

console.log(addElementToStart([1, 2, 3, 4], 0));



console.log("9-masala:");

const isLaylo = (arr) => {
    if (arr.includes("Laylo")) {
        return true;
    } else {
        return false;
    }
}

console.log(isLaylo(["Nozima", "Lola", "Qodir"]));
console.log(isLaylo(["Nozima", "Laylo", "Qodir"]));



console.log("10-masala:");

const getOddAmount = (arr) => {
    let sum = 0;
    arr.forEach(elem => {
        if (elem % 2 === 1) {
            sum += elem;
        }
    });
    return sum;
}

console.log(getOddAmount([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(getOddAmount([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13]));



