"use strict";

//1.
function max(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

// 2.
function maxOfThree(number1, number2, number3) {
    return max(number1, max(number2, number3));
}

// 3.
function isVowel(character) {

    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(character);
}

// 4.
function sum(arrayOfNumbers) {

    let sum = 0;
    for (let number of arrayOfNumbers) {
        sum += number;
    }
    return sum;
}

function multiply(arrayOfNumbers) {

    let prod = 1;
    for (let number of arrayOfNumbers) {
        prod *= number;
    }
    return prod;
}

// 5.
function reverse(characters) {

    let startIndex = 0;
    let endIndex = characters.length;
    let listOfCharacters = characters.split("");
    while (startIndex < endIndex) {
        let temp = listOfCharacters[startIndex];
        listOfCharacters[startIndex] = listOfCharacters[endIndex];
        listOfCharacters[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
    return listOfCharacters.join("");
}

// 6.
function findLongestWord(arrayOfWords) {

    return arrayOfWords.reduce((word1, word2) => {
        if (word1.length > word2.length) return word1;
        else return word2;
    })
}

// 7.
function filterLongWords(arrayOfWords, i) {

    return arrayOfWords.filter(word => word.length > i);
}

// 8.
function computeSumOfSquare(arrayOfNumbers) {

    return arrayOfNumbers.reduce((sum, number) => sum += number * number, 0);
}

// 9.
function printOdd(arrayOfNumbers) {

    arrayOfNumbers.forEach(element => {
        if (element % 2 !== 0) console.log(element);
    });
}

// 10.
function computeSumOfSquaresOfEvensOnly(arrayOfNumbers) {

    return arrayOfNumbers.filter(element => element % 2 === 0)
        .reduce((sum, number) => sum += number * number, 0);
}

// 11.
function functionalSum(arrayOfNumbers) {
    return arrayOfNumbers.reduce((sum, element) => sum += element, 0);
}

function functionalMultiply(arrayOfNumbers) {
    return arrayOfNumbers.reduce((prod, element) => prod *= element, 1);
}

// 12.
function printFibo(n, a, b) {
}