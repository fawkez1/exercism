//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { parse } from "path";

export const age = (planet, age) => {
  const ageInYears = age / 31557600;
  const planets = {
    Mercury : 0.2408467,
    Venus : 0.61519726,
    Earth : 1,
    Mars : 1.8808158,
    Jupiter : 1.862615,
    Saturn : 29.447498,
    Uranus : 84.016846,
    Neptune : 164.79132,
  }
  switch(planet){
    case 'earth' :
      return parseFloat(ageInYears.toFixed(2))
    case 'mercury' :
      return parseFloat((ageInYears * planets[Mercury]).toFixed(2))
    case 'venus' :
      return ageInYears * planets[Venus];
    case 'mars' :
      return ageInYears * planets[Mars];
    case 'jupiter' :
      return ageInYears * planets[Jupiter];
    case 'saturn' :
      return ageInYears * planets[Saturn];
    case 'uranus' :
      return ageInYears * planets[Uranus];
    case 'neptune' :
      return ageInYears * planets[Neptune];
    default :
    return "NaP - Not a Planet"

  }
  
};
