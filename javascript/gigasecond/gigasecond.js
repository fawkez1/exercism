//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const gigasecond = 1e9; 
  const milliseconds = date.getTime();
  return new Date(milliseconds + gigasecond * 1000);


  // datum format = (2023, 8, 27)
  // (2023 * year) + (8 * month) + (27 * day)
  // year = 31536000000 ms
  // month = 2628000000 ms
  // day = 86400000 ms
  // gigasecond = 1000000000 ms
  // 
};
