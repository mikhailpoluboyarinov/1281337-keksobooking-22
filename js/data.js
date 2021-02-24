'use strict';

import {getRandomNumber, getRandomLocation, getRandomArrayElement, getRandomUniqueArray} from './utils.js';

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

const MIN_PRICE = 4000;

const MAX_PRICE = 70000;

const MIN_ROOMS_GUESTS = 1;

const MAX_ROOMS_GUESTS = 3;

// Создание объявления

const createOffer = () => {
  return {
    author: {
      avatar: AUTHOR_AVATAR.url + getRandomNumber(1, 8).toString() + AUTHOR_AVATAR.pictureFormat,
    },
    offer: {
      title: getRandomArrayElement(OFFERS_TITLES),
      address: getRandomLocation(X.min, X.max, 5) + ', ' + getRandomLocation(Y.min, Y.max, 5),
      price: getRandomNumber(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(OFFERS_TYPES),
      rooms: getRandomNumber(MIN_ROOMS_GUESTS, MAX_ROOMS_GUESTS),
      guests: getRandomNumber(MIN_ROOMS_GUESTS, MAX_ROOMS_GUESTS),
      checkin: getRandomArrayElement(OFFERS_CHECKIN_CHECKOUT),
      checkout: getRandomArrayElement(OFFERS_CHECKIN_CHECKOUT),
      features: getRandomUniqueArray(OFFERS_FEATURES),
      description: getRandomArrayElement(OFFERS_DESCRIPTIONS),
      photos: getRandomUniqueArray(OFFERS_PHOTOS),
    },
    location: {
      x: getRandomLocation(X.min, X.max, 5),
      y: getRandomLocation(Y.min, Y.max, 5),
    },
  }
}

export {createOffer};
