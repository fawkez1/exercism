// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const doubledDeck = deck.map((value) => value * 2);
  return doubledDeck;
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.flatMap((value) => value === 3 ? [value, 3, 3] : [value]);
}

  //result.sort((a, b) => a - b); // Sort in ascending order
  // test didnt work when result is sorted

 

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  // use slice to delete the first 4 objects
  // use slice to delete the last 4 objects
  // then push them back into an array and return it
  const firstFour = [...deck].splice(0, 4);
  const lastFour = [...deck].splice(6, 4);
  let deckMinusFirstFour = deck.filter((item) => !firstFour.includes(item));
  let deckMinusLastFour = deckMinusFirstFour.filter((item) => !lastFour.includes(item));
  
  return deckMinusLastFour;
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  // Copy of the original deck for debugging
  const originalDeck = [...deck];

  // 1. Remove the first card from the deck.
  // the splice method gives back an array, which must me converted to a number
  let firstCardArray = deck.splice(0, 1);
  let firstCardString = firstCardArray.join('');
  let firstCard = parseInt(firstCardString, 10);

  // 2. Remove the last card from the deck.
  // the splice method gives back an array, which must me converted to a number
  let lastCardArray = deck.splice(deck.length -1, 1);
  let lastCardString = lastCardArray.join('');
  let lastCard = parseInt(lastCardString, 10);

  //debug
  console.log(`Deck without first and last: ${deck} from original: ${originalDeck}`)
  
  // Calculate the middle position ONE
  let middlePositionOne = Math.floor(deck.length / 2);

  // Calculate the middle position TWO
  let middlePositionTwo = middlePositionOne + 1;

  // Insert the last card at the first middle position
  deck.splice(middlePositionOne, 0, lastCard);
  console.log(`inserting the last card at the first middle position ${deck}`)

  // Insert the first card at the second middle position
  deck.splice(middlePositionTwo, 0, firstCard);
  console.log(`inserting the first card at the second middle position ${deck}`)

  return deck;
}




/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  let newDeck = deck.filter((number) => number === 2);
  return newDeck;
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  let shuffled = deck.sort((a,b) => a-b);
  return shuffled;
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  let reversed = deck.reverse();
  return reversed;
}
