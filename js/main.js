'use strict';

const getRandomNumber = (min, max) => {
  if (min > max && max >=0 && min > 0) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  } else  if (min >= 0 && max > 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return false;
}
getRandomNumber();


const getRandomLocation = (min,max,digits) => {
  if (min > max && max >=0 && min > 0) {
    return +(Math.random() * (min - max) + max).toFixed(digits);
  } else  if (min > 0 && max > 0) {
    return +(Math.random() * (max - min) + min).toFixed(digits);
  }
  return false;
}

getRandomLocation();

