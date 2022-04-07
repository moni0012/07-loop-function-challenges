/************
 const numbers = [2, 4, 8]

const double = val => val * 2;
const sqrt = val => Math.sqrt(val);
const triple = val => val * 3;
const takeOut = val => val - 8;


const isPositive = val => {
    if (val >= 0) return true
    else return false;
}

const newNumber = numbers

    .map(double)
    .map(sqrt)
    .map(triple)
    .map(takeOut)

    .filter(isPositive)

console.log('input numbers', numbers)
console.log('output numbers', newNumber)

// Checking .map()

const numberRandom = [2, 4, 6, 8, 14]
const num = numberRandom.map((X) => X * 2)
console.log('new array is ' + num)
****************/

/**********
 * const names = ["moni", "adina", "rohit", "dhwani"]
const newNames = names.map((name2) => {
    return "coach " + names;
})
console.log('new names are ' + newNames)

const coaches = ["Andy", "Bex"]
const newCoaches = coaches.map((coach) => {
    return "Coach " + coach;
})
console.log(newCoaches);
*****************/


// Filter Example

const names = ["moni", "rohit", "dhwani"]
const filt = names.filter((name) => name.includes("h"))
console.log(filt)

const words = ['alise', 'elsa', 'princess', 'moni', 'radhakrishna']
const res = words.filter((word) => word.length > 5)
console.log(res)


const rrnum = [12, 16, 19, 22, 3, 6]
const result = rrnum.filter((va) => va - 3)
console.log(result)

// Reduce Example --- need to check not clear

const nu = [2, 4, 6, 8, 10]

const nu1 = nu.reduce((previous, current) => {
    return previous, current;
}, 0)
console.log('sum of all should be ' + nu1);


// A function that takes an array of Booleans and then removes the false values from the given array.

const bool = [true, true, false, false, true]
function stripFalse([]) {
    //console.log('this is bool ' + bool)
    var newArray = [];
    for (let i = 0; i < bool.length; i++) {
        if (bool[i] === true) {
            newArray.push(bool[i])
        }
    }
    return (newArray)
}
var isTrueArray = stripFalse(bool)
console.log(isTrueArray)



//A function that takes an array of numbers that are between 0 - 1.

const numbersArr = [1, .5, .7, .25]
function percentage() {
    var percentage = [];
    for (let i = 0; i < numbersArr.length; i++) {
        let x = numbersArr[i] * 100;
        let y = x.toString() + "%"
        console.log(y)
        percentage.push(y)
    }
    return percentage;
}
var perce = percentage()
console.log(perce)


/**
 * A function that takes an array of possessions and a name.
 * The functions needs to create a new array with the name prefixed to each item.
 *
 * @param {string[]} possessionsArr ["shoes", "jacket", "belt"]
 * @param {string} name "disco"
 * @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
 */

const possessionsArr = ["shoes", "jacket", "belt"];
const perf = "disco";

function prefixArray() {
    let newPossesionArray = [];
    for (let i = 0; i < possessionsArr.length; i++) {
        let newPossession = perf + " " + possessionsArr[i]
        //console.log(newPossession)
        newPossesionArray.push(newPossession)
    }
    return newPossesionArray;
}
var fPref = prefixArray()
console.log(fPref)


/**
 * Have a look at the String method split()
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *
 * You may need to use it below.
 */

/**
 * A function that takes a string of numbers joined with a "+" and returns an array of those numbers.
 * The strings will need to be converted into numbers.
 * e.g 1 instead of "1"
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {number[]} [1, 2, 3, 4, 5]
 */

var numberString = "1+2+3+4+5";
function stringToNumber(str) {
    let newArrayNumber = [];
    let char = numberString.split('+')
    for (let i = 0; i < char.length; i++) {
        newArrayNumber.push(parseInt(char[i]))
    }
    return newArrayNumber;
}
var toN = stringToNumber(numberString)
console.log(toN)



/**
 * A function that takes a string of numbers joined with a "+" and creates a new array based on if the number is even or odd.
 * Every number in the string will need to checked.
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {string[]} ['odd', 'even', 'odd', 'even', 'odd']
 

export const createOddEvenArray = (numberString) => {
    return;
};
*/

function evenOdd(nus) {
    var numStat = [];
    for (let j = 0; j < nus.length; j++) {
        if (toN[j] % 2 == 0) {
            // console.log("number is even " + nus[j])
            numStat.push("even")
        } else {
            numStat.push("odd")
        }
    }
    return numStat;
}
var result1 = evenOdd(toN)
console.log(result1)


/**
 * A function that takes an array of book titles and a search term.
 * The function needs fo remove any book titles that do not include the search term.
 *
 * @param {string[]} booksArr ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"]
 * @param {string} - searchTerm - "Google"
 * @return {string[]} - ["The Google story"]
 
export const filterBooksBySearch = (booksArr, searchTerm) => {
    return;
}; */


const booksArr = ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"]
const search = "Google";

function searchResult(str1, substr1) {
    var newStr = [];
    for (let i = 0; i < str1.length; i++) {
        if (str1[i].includes(substr1)) {
            newStr.push(str1[i])
        }
    }
    return newStr;
}
var string1 = searchResult(booksArr, search)
console.log(string1)



/**
 * A function that takes a list, cleans each item and joins them with a +.
 * When it "cleans" it remove's whitespace and makes sure the string is lowercase.
 *
 * This function is failing the test's can you figure out why?
 * The bug is within the function, the test's are fine.
 * Can you get it to pass the tests?
 *
 * @param {string[]} stringArr ["  dIsco", " ShOes "]
 * @return {string} "disco+shoes"
 */

const stringArr = ["  dIsco", " ShOes "]

function toLowerConcat() {
    var newStringConcat = [];
    var outStr = "";
    for (let i = 0; i < stringArr.length; i++) {
        var lower = (stringArr[i].toLowerCase()).trim();
        //console.log(lower)
        newStringConcat.push(lower)
        //outStr = "+" + lower
    }
    outStr = newStringConcat[0] + "+" + newStringConcat[1]
    return outStr;
}
var x = toLowerConcat()
console.log(x)