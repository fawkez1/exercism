1
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
    if (currentWeight + item.weight <= maximumWeight) {
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
