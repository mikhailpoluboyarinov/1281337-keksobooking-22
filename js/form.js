const TypeMinPrice = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 10000,
};

const userForm = document.querySelector('.ad-form');
const userFormType = userForm.querySelector('#type');
const userFormPrice = userForm.querySelector('#price');
const userFormTimein = userForm.querySelector('#timein');
const userFormTimeout = userForm.querySelector('#timeout');

const changeType = (evt) => {
  userFormPrice.placeholder = TypeMinPrice[evt.target.value.toUpperCase()];
  userFormPrice.min = TypeMinPrice[evt.target.value.toUpperCase()];
};

const changeTimeInOut = (evt) => {
  switch (evt.target.name) {
    case userFormTimein.name:
      userFormTimeout.value = evt.target.value;
      break;
    case userFormTimeout.name:
      userFormTimein.value = evt.target.value;
      break;
  }
};

userFormType.addEventListener('change', changeType);
userFormTimein.addEventListener('change', changeTimeInOut);
userFormTimeout.addEventListener('change', changeTimeInOut);
