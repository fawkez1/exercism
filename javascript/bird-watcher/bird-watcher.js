// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let result = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (typeof birdsPerDay[i] === 'number')
    result += birdsPerDay [i]; //result = result + birdsPerDay[i]; 
  }
  return result;
  
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
 // loop erschaffen, der bei:
    // eingabe "1": objekt auf position 0 bis 6 auswaehlt:
        // array start : let start = ('2' = [7*'2']-1) also 13. 
        // array ende : start + 7
        // ergebnis return (13, 20) an neue variable (let arrayPositions)
        // 
// inhalt von dokument birdsValue summieren = result
let result = 0;
for (let i = (week * 7 - 7); i < (week * 7 ); i++){
  if (typeof birdsPerDay[i] === 'number')
  result += birdsPerDay [i];
}
return result;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  const result = [];
  for (let i = 0; i < birdsPerDay.length; i++){
    
    if (i % 2 === 0){
      birdsPerDay[i] = birdsPerDay[i] + 1;
    }
      
    }
    return birdsPerDay;
}

