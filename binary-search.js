//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const SHIFT_BY_ONE = 1;
const HALVE_THE_ARRAY = 2;
const ZEROTH_INDEX = 0;
const NOT_FOUND = 'Value not in array';

export const find = (numberArray, numberToFind) => {
    let leftPointer = ZEROTH_INDEX;
    let rightPointer = numberArray.length;

    if (rightPointer === ZEROTH_INDEX)
        throw new Error(NOT_FOUND);

    while (leftPointer <= rightPointer) {
        let midPointer = Math.floor((leftPointer + rightPointer) / HALVE_THE_ARRAY);
        if (numberArray[midPointer] === numberToFind)
            return midPointer;
        else if (numberArray[midPointer] < numberToFind) {
          leftPointer = midPointer + SHIFT_BY_ONE;
        } else {
          rightPointer = midPointer - SHIFT_BY_ONE;
        }
    }
    throw new Error(NOT_FOUND);
};
