// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let result = 0;
  stack.forEach(function(element){
    if (element === card){
      result ++;
    }
  });
  return result;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let straightNumbers = 0;
  let oddNumbers = 0;
  for (const cards of stack){
    if (type === true){
      stack.forEach(function(element){
        if (element % 2 === 0){
          straightNumbers++;
        }
      })
      return straightNumbers;
    }
    else if (type === false){
      stack.forEach(function(element){
        if (element % 2 !== 0){
          oddNumbers++;
        }
      })
      return oddNumbers;
    }
  }
}
