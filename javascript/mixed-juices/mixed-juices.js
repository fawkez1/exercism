// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { time } from "console";

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name){
case "Pure Strawberry Joy":
  return 0.5; 
case "Energizer":
  return 1.5;
case "Green Garden":
  return 1.5;
case "Tropical Island":
  return 3;
case "All or Nothing":
  return 5;
default:
   return 2.5;
}
  }

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {

let i = 0;
let wedges = 0;
let totalWedges = 0;

while ((i < limes.length) && (totalWedges <= wedgesNeeded) && (wedgesNeeded > 0)){

switch (limes[i]) {
  case 'small':
    wedges = 6;
    break;
  case 'medium':
    wedges = 8;
    break;
  case 'large':
    wedges = 10;
    break;
  default:
    wedges = 0;
}
totalWedges += wedges;
i++;
}
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
let i = 0;
let totalOrdersInMinutes = 0;


while (i < orders.length && totalOrdersInMinutes < timeLeft) {
  let orderTime = 0;

  switch (orders[i]) {
    case 'Pure Strawberry Joy':
      orderTime = 0.5;
      break;

      case 'Energizer':
      case 'Green Garden':
      orderTime = 1.5;
      break;

      case 'Tropical Island':
      orderTime = 3;
      break;

      case 'All or Nothing':
      orderTime = 5;
      break;

      default: 
      orderTime =  2.5;
      
}
if (totalOrdersInMinutes <= timeLeft){
  totalOrdersInMinutes += orderTime;
  i++;
} else {
  
  break;
} 
}
const ordersLeft = orders.slice(i);
return ordersLeft;
}


