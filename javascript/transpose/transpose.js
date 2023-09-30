//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (text) => {
  let fullString = [];
  const row = text.length;
  const column = text[0].length;
  let result = [];
  for (let i = 0; i < text.length - 1; i ++) {
    fullString.push(text[i] + text[i + 1]);
  }
  for (let i = 0; i < row; i++){
  result = fullString[i + 0] + fullString[i + row]
  }
  return result;
};


// zeilen: ganze woerter sind zeilen
// spalte: der anfang eines wortes ist eine spalte

// input = ['ABC', '123']                 "ABC"
//                                        "123"

// output = ['A1', 'B2', 'C3']            "A1"
//                                        "B2"
//                                        "C3"
