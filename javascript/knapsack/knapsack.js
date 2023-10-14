/* my code, that was not able to calculate correctly:

export const knapsack = (maximumWeight, items) => {
  // Creates an array to track items in backpack
  const selectedItems = [];

  // sorts items (Value-to-Weight Ratio)
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);

  // initializing weight and value to 0
  let currentWeight = 0;
  let totalValue = 0;

  // iterate through items
  for (const item of items) {
    // check if item fits in backpack
    if (currentWeight + item.weight <= maximumWeight && !selectedItems.includes(item))
 {
      // check if item is already in backpack
      if (!selectedItems.includes(item)){
      // add item to backpack
      selectedItems.push(item);
      currentWeight += item.weight;
      totalValue += item.value;
      }
    }
  }
  // return value
  return totalValue;
  
};
*/

// with the help of chatgpt, a dynamic-programming (dp) solution:
export const knapsack = (maximumWeight, items) => {
  // Ein Array, um ausgewählte Gegenstände zu speichern
  const selectedItems = [];

  // Sortiere die Gegenstände nach ihrem Wert-zu-Gewicht-Verhältnis absteigend
  items.sort((a, b) => b.value / b.weight - a.value / b.weight);

  // Die Anzahl der Gegenstände
  const n = items.length;

  // Ein zweidimensionales Array dp zum Speichern von Zwischenergebnissen
  const dp = new Array(n + 1).fill(0).map(() => new Array(maximumWeight + 1).fill(0));

  // Schleife über alle Gegenstände
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= maximumWeight; w++) {
      if (i === 0 || w === 0) {
        dp[i][w] = 0;
      } else if (items[i - 1].weight <= w) {
        dp[i][w] = Math.max(
          items[i - 1].value + dp[i - 1][w - items[i - 1].weight],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // Rekonstruiere die ausgewählten Gegenstände
  let w = maximumWeight;
  for (let i = n; i > 0 && dp[i][w] > dp[i - 1][w]; i--) {
    selectedItems.push(items[i - 1]);
    w -= items[i - 1].weight;
  }

  // Der maximale Gesamtwert, der erreicht werden kann
  const totalValue = dp[n][maximumWeight];

  // Gibt den Gesamtwert zurück
  return totalValue;
};
