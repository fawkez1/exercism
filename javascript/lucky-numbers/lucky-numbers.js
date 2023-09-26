// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sumOne = '';
  let sumTwo = '';
  let result = 0;

  for (let i = 0; (i < array1.length); i++){
    sumOne += +array1[i];
  }
  for (let i = 0; (i < array2.length); i++){
    sumTwo += +array2[i];
    }

  result = parseInt(sumOne) + parseInt(sumTwo);
  return result;

}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let stringNumber = String(value); //'1337'
  let reversedString = stringNumber.split("").reverse().join("");
if (stringNumber === reversedString){
  return true;
}
else return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  throw new Error('Implement the errorMessage function');
}
