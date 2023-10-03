
export const knapsack = (maximumWeight, items) => {
  // Erstellt ein Array zur Verfolgung der ausgewählten Gegenstände
  const selectedItems = [];

  // Sortiert die Gegenstände nach dem Verhältnis von Wert zu Gewicht (Value-to-Weight Ratio)
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);

  // Initialisiert das aktuelle Gewicht und den Gesamtwert auf 0
  let currentWeight = 0;
  let totalValue = 0;

  // Durchlaufe die sortierten Gegenstände
  for (const item of items) {
    // Überprüfe, ob der Gegenstand noch in den Rucksack passt
    if (currentWeight + item.weight <= maximumWeight) {
      if (!selectedItems.includes(item)){
      // Füge den Gegenstand dem Rucksack hinzu
      selectedItems.push(item);
      currentWeight += item.weight;
      totalValue += item.value;
      }
    }
  }
  // Rückgabe des Gesamtwerts
  return totalValue;
  
};
