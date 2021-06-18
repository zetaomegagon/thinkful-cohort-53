function sortWords(words) {
    words.sort((wordA, wordB) => wordA < wordB ? -1 : 1);
    return words;
}                     

function sortNumbers(numbers) {
    numbers.sort((number1, number2) => number1 < number2 ? -1 : 1);
    return numbers;
}

function largestFirst(numbers) {
    numbers.sort((number1, number2) => number1 > number2 ? -1 : 1);
    return numbers;
}

function sortFlowersByZone(flowers) {
    flowers.sort((flowerA, flowerB) => flowerA.zone < flowerB.zone ? -1 : 1);
    return flowers;
}

function sortByLength(strings) {
    strings.sort((string1, string2) => string1.length < string2.length ? -1 : 1);
    return strings;
}

module.exports = {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
};
