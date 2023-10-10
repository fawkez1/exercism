// this is not my code. i was not able to solve the exercise on my own :'(

export const transpose = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const longest = Math.max(...arr.slice(i).map((element) => element.length));
    for (let j = 0; j < longest; j++) {
      const count = result[j] || '';
      result[j] = count + (arr[i][j] ? arr[i][j] : ' ');
    }
  }

  return result;
};