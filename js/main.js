'use strict';

import {createOffer} from './data.js';

// Создание массива объектов

const OFFERS_COUNT = 10;

const createOffers = (count) => {
  return new Array(count).fill(null).map(() => createOffer());
}

createOffers(OFFERS_COUNT);

// console.log(createOffers(10));
