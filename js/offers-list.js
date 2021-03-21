import {createOffers} from './data.js';
import {createOfferTemplate} from './offer-template.js';

const OFFERS_COUNT = 1;

const  drawOffer = () =>  {
  const offersList = document.querySelector('.map__canvas');
  const listFragment = document.createDocumentFragment();
  const offers = createOffers(OFFERS_COUNT);
  offers.forEach((value) => {
    listFragment.appendChild(createOfferTemplate(value));
  });

  offersList.appendChild(listFragment);
}

export {drawOffer};
