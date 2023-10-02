//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  const stack = [];

  for (const bracket of input) {
    if (bracket === '{' || bracket === '[' || bracket === '(') {
      stack.push(bracket);
    } else if (bracket === '}' && stack.pop() !== '{') {
      return false;
    } else if (bracket === ']' && stack.pop() !== '[') {
      return false;
    } else if (bracket === ')' && stack.pop() !== '(') {
      return false;
    }
  }

  return stack.length === 0;
};
