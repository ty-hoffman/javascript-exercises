const convertToCelsius = function(degreesFahrenheit) {
  degreesCelsius = ((degreesFahrenheit - 32) * (5/9));
  degreesCelsius = Math.round(degreesCelsius * 10) / 10;
  return degreesCelsius;
};

const convertToFahrenheit = function(degreesCelsius) {
  degreesFahrenheit = (degreesCelsius * (9/5) + 32);
  degreesFahrenheit = Math.round(degreesFahrenheit * 10) / 10;
  return degreesFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
