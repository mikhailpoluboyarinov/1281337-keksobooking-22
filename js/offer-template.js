const convertType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createOfferTemplate = (obj) => {
  const offerElement = offerTemplate.cloneNode(true);
  const {author, offer} = obj;

  offerElement.querySelector('.popup__title').textContent = offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.address;
  offerElement.querySelector('.popup__text--price').textContent = offer.price + '₽/ночь';
  offerElement.querySelector('.popup__type').textContent = convertType[offer.type];
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const featureFragment = document.createDocumentFragment();
  offer.features.forEach((value) => {
    const featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature', 'popup__feature--' + value);
    featureFragment.appendChild(featureElement);
  });
  offerElement.querySelector('.popup__features').textContent = '';
  offerElement.querySelector('.popup__features').appendChild(featureFragment);

  offerElement.querySelector('.popup__description').textContent = offer.description;

  const photoFragment = document.createDocumentFragment();
  const photoTemplate = offerElement.querySelector('.popup__photo');
  offer.photos.forEach((value) => {
    const photoElement = photoTemplate.cloneNode();
    photoElement.src = value;
    photoFragment.appendChild(photoElement);
  });
  offerElement.querySelector('.popup__photos').textContent = '';
  offerElement.querySelector('.popup__photos').appendChild(photoFragment);

  offerElement.querySelector('.popup__avatar').src = author.avatar;

  return offerElement;
};

export {createOfferTemplate};
