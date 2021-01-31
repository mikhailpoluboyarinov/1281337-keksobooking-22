'use strict';

const getRandomNumber = (min, max) => {
  if (min > 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return false;
}
getRandomNumber();


const getRandomLocation = (min,max,digits) => {
  if (min > 0 && min < max) {
    return +(Math.random() * (max - min) + min).toFixed(digits);
  }
  return false;
}

getRandomLocation();

