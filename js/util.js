'use strict';

// Случайное число из диапазона

const getRandomNumber = (min, max) => {
  if (min > max && max >=0 && min > 0) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  } else  if (min >= 0 && max > 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return false;
}

// Случайное число c плавающей точкой из диапазона

const getRandomLocation = (min,max,digits) => {
  if (min > max && max >=0 && min > 0) {
    return +(Math.random() * (min - max) + max).toFixed(digits);
  } else  if (min >= 0 && max > 0) {
    return +(Math.random() * (max - min) + min).toFixed(digits);
  }
  return false;
}

// Случайный элемент массива

const getRandomArrayElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
}

// Массив случайной длины из значений (без повторений)

const getRandomUniqueArray = (array) => {
  const arrayLength = getRandomNumber(1, array.length);
  const newArray = [getRandomArrayElement(array)];

  for (let i = 1; i < arrayLength; i++) {
    const item = getRandomArrayElement(array);
    const isEveryElementUnique = newArray.every((value) => {
      return value !== item;
    });

    if (isEveryElementUnique) {
      newArray[i] = item;
    } else {
      i--;
    }
  }

  return newArray;
}

export {getRandomNumber, getRandomLocation, getRandomArrayElement, getRandomUniqueArray};
