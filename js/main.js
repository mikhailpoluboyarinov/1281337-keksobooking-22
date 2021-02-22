'use strict';

const AUTHOR_AVATAR = {
  url: 'img/avatars/user0',
  pictureFormat: '.png',
};

const OFFERS_TITLES = [
  '1-комнатная квартира в аренду',
  '2-комнатная квартар в аренду',
  'Дом на берегу реки',
  'Коттедж в аренду посуточно',
];

const OFFERS_TYPES = [
  'palace',
  'flat',
  'house ',
  'bungalow',
];

const OFFERS_CHECKIN_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFERS_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const OFFERS_DESCRIPTIONS = [
  'На берегу реки',
  'С балконом',
  'По-суточно',
  'Можно с животными',
  'Пять минут от метро',
];

const OFFERS_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const X = {
  min: 35.65000,
  max: 35.70000,
};

const Y = {
  min: 139.70000,
  max: 139.80000,
};

const OFFERS_COUNT = 10;

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

// Массив случайной длины из значений

const getRandomArray = (array) => {
  return new Array(getRandomNumber(1, 5)).fill(null).map(() => {
    return getRandomArrayElement(array);
  });
}

// Создание объявления

const createOffer = () => {
  return {
    author: {
      avatar: AUTHOR_AVATAR.url + getRandomNumber(1, 8).toString() + AUTHOR_AVATAR.pictureFormat,
    },
    offer: {
      title: getRandomArrayElement(OFFERS_TITLES),
      address: getRandomLocation(X.min, X.max, 5).toString() + ', ' + getRandomLocation(Y.min, Y.max, 5).toString(),
      price: getRandomNumber(1, 70000),
      type: getRandomArrayElement(OFFERS_TYPES),
      rooms: getRandomNumber(1, 3),
      guests: getRandomNumber(1, 3),
      checkin: getRandomArrayElement(OFFERS_CHECKIN_CHECKOUT),
      checkout: getRandomArrayElement(OFFERS_CHECKIN_CHECKOUT),
      features: getRandomUniqueArray(OFFERS_FEATURES),
      description: getRandomArrayElement(OFFERS_DESCRIPTIONS),
      photos: getRandomArray(OFFERS_PHOTOS),
    },
    location: {
      x: getRandomLocation(X.min, X.max, 5),
      y: getRandomLocation(Y.min, Y.max, 5),
    },
  }
}

// console.log(createOffer());

// Создание массива объектов

const createOffers = (count) => {
  return new Array(count).fill(null).map(() => createOffer())
}

createOffers(OFFERS_COUNT);

// console.log(createOffers(10));
