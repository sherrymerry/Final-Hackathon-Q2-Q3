
// Q1:

function CountCharacters(inputString) {
    let charCount = {};
    for (let char of inputString) {
        if (charCount[char]) {
            charCount[char]++;
        } 
        else {
            charCount[char] = 1;
        }
    }
    return charCount;
}
let result = CountCharacters("hello world");
console.log(result);

// Q2:

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    let next;

    for (let i = 2; i <= n; i++) {
        next = a + b; 
        a = b;       
        b = next;    
    }

    return next;
}

let result = fibonacci(10);
console.log(result);

// Q3:

function sortNumbers(numbersArray) {
    let sortedArray = numbersArray.slice();
    
    sortedArray.sort((a, b) => a - b);

    return sortedArray;
}

let numbers = [5, 2, 9, 1, 5, 6];
let sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);  
