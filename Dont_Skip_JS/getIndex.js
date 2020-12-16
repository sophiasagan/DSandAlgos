/*
Given an unsorted array of numbers and another number, you are required to find the index at which the number would be placed if it were to be inserted in a sorted version of the array of numbers.

function getIndex(arr, number){

}

*/
const getIndex = (arr, number) =>
  arr.reduce((counter, curr) => (number > curr ? ++counter : counter), 0);

const inputsA = [
  [10, 5, 1, 3],
  [16, 4, 5],
];
const inputsB = [2, 13];
console.log(getIndex(inputsA[0], inputsB[0]));
