//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let sum = 0;
  const numString = number.toString();
  const power = numString.length;


  for(let i = 0; i < numString.length; i++){
    const digit = parseInt(numString[i])
    sum += Math.pow(digit, power);
  }
  if(number === sum){
    return true;
  }
  else return false;
};




// number in string convertieren. let potenz = number.length
// loop schreiben der alle position des string iteriert
// dann wieder in eine zahl umwandelt
// dann potenziert
// das ergebnis in eine variable packen (sum)
// wenn die summe alle ergebnisse  = number; dann true;
