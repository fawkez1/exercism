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
  let result = [];

  deck.forEach((value) => {
    result.push(value);
    if (value === 3) {
      result.push(3);
      result.push(3);
    }
  });

  //result.sort((a, b) => a - b); // Sort in ascending order
  // test didnt work when result is sorted

  return result;
}

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
  // copy of original deck debugging
  const originalDeck = [...deck];
  // 1. Remove the first card from the deck.
  let firstCard = deck.shift();
  //console.log(`first card: ${firstCard} of ${originalDeck}`)

  // 2. Remove the last card from the deck.
  let lastCard = deck.pop();

  // Calculate the middle positions.
  let middlePositionOne = Math.floor(deck.length / 2);
  let middlePositionTwo = Math.floor(deck.length / 2 +1);
  console.log(`middleOne: ${middlePositionOne} in ${deck}`);
  console.log(`middleTwo: ${middlePositionTwo} in ${deck}`);

  // 3. Create a deck without the first and last cards.
  let deckWithoutFirstAndLast = deck.filter((item) => item !== firstCard && item !== lastCard);
  let originalDeckWithoutFirstAndLast = [...deckWithoutFirstAndLast]
  //console.log(`Deck without first and last: ${deckWithoutFirstAndLast} from ${originalDeck}`)

  // 4. Insert first card at second middle position
  deckWithoutFirstAndLast.splice(middlePositionTwo, 0, originalDeck[0]);
  //console.log(`Insert first card at second middle:${deckWithoutFirstAndLast} from ${originalDeckWithoutFirstAndLast} `)
  

  // 5. Insert last card at first middle position
  deckWithoutFirstAndLast.splice(middlePositionOne, 0, originalDeck[originalDeck.length - 1]);
  

  return deckWithoutFirstAndLast;

}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  throw new Error('Implement the twoIsSpecial function');
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  throw new Error('Implement the perfectlyOrdered function');
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  throw new Error('Implement the reorder function');
}
