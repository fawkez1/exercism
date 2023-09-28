//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { parse } from "path";

export const age = (planet, age) => {
  const ageInYears = age / 31557600;
  const planets = {
    mercury : 0.2408467,
    venus : 0.61519726,
    earth : 1,
    mars : 1.8808158,
    jupiter : 11.862615,
    saturn : 29.447498,
    uranus : 84.016846,
    neptune : 164.79132,
  }
  switch(planet){
    case 'earth' :
      return parseFloat(ageInYears.toFixed(2))
    case 'mercury' :
      return parseFloat((ageInYears / planets['mercury']).toFixed(2));
    case 'venus' :
      return parseFloat((ageInYears / planets['venus']).toFixed(2));
    case 'mars' :
      return parseFloat((ageInYears / planets['mars']).toFixed(2));
    case 'jupiter' :
      return parseFloat((ageInYears / planets['jupiter']).toFixed(2));
    case 'saturn' :
      return parseFloat((ageInYears / planets['saturn']).toFixed(2));
    case 'uranus' :
      return parseFloat((ageInYears / planets['uranus']).toFixed(2));
    case 'neptune' :
      return parseFloat((ageInYears / planets['neptune']).toFixed(2));


    default :
    return "NaP - Not a Planet"

  }
  
};
