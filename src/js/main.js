import {
  findCardWithStartingNumber,
  hasProperLength,
  isLuhnOK,
  throwWhenNotString,
  formatCardNumber,
} from "../helpers";
import cardsData from "./cardsData";

const cardsCollection = document.querySelector(".js-cards__collection");
const cardLogo = document.querySelector(".js-card__logo");
const cardNumberInput = document.querySelector(".js-numberInput");
const messageErrorsElement = document.querySelector(".js-form__list--errors");
const cardNumberText = document.querySelector(".js-card__number");

init();

function init() {
  renderImagesCollection();

  const form = document.querySelector(".js-form");

  form.addEventListener("submit", onFormSubmit);
}

function onFormSubmit(event) {
  event.preventDefault();

  cardNumberInput.focus();
  cardNumberInput.value.trim();

  const cardType = findCardWithStartingNumber(cardNumberInput.value, cardsData);
  const errors = findErrors(cardNumberInput.value, cardType);

  render(errors, cardType);

  !errors.length ? (cardNumberInput.value = "") : 1;
}

function render(errors, cardType) {
  renderMessages(errors, cardType);
}

function renderMessages(errors, cardType) {
  const messageErrorsToHTML = errors
    .map(
      ({ message }) => `
          <li class="form__list-error">
            ${message}
          </li>
        `
    )
    .join("");

  messageErrorsElement.innerHTML = messageErrorsToHTML;

  checkAtributesOnClick(errors, cardType);
}

function findErrors(inputValue, selectedCard) {
  throwWhenNotString(inputValue);

  const errorNumberReuired = [{ message: "Card Number is required" }];
  const startingDigitsError = {
    message:
      "Card number is incorrect - only MasterCard, Visa or American Express are required",
  };

  const validationErrors = [
    hasProperLength(inputValue, selectedCard),
    isLuhnOK(inputValue),
    !selectedCard.length ? startingDigitsError : "",
  ];

  return inputValue
    ? validationErrors.filter(({ message }) => message)
    : errorNumberReuired;
}

cardNumberInput.addEventListener("input", (event) => {
  const defaultFormat = "0000 0000 0000 0000";
  cardNumberText.textContent =
    event.target.value !== ""
      ? formatCardNumber(cardNumberInput.value)
      : defaultFormat;

  messageErrorsElement.textContent = event.target.value && "";

  checkAtributesOnInputChange();
});

function checkAtributesOnClick(errors, cardType) {
  const FIRST_CARD = 0;

  if (!errors.length) {
    cardLogo.src = cardType[FIRST_CARD].imgUrl;
    cardLogo.classList.add(cardType[FIRST_CARD].imgClass);
    cardNumberText.classList.add("card__number--correct");
  } else {
    cardLogo.removeAttribute("src");
    cardNumberText.classList.remove("card__number--correct");
    cardNumberText.classList.add("card__number--uncorrect");
  }
}

function checkAtributesOnInputChange() {
  if (cardLogo.hasAttribute("src")) {
    cardLogo.removeAttribute("src");
  }

  if (cardNumberText.classList.contains("card__number--correct")) {
    cardNumberText.classList.remove("card__number--correct");
  }

  if (cardNumberText.classList.contains("card__number--uncorrect")) {
    cardNumberText.classList.remove("card__number--uncorrect");
  }

  cardsData.forEach(({ imgClass }) => {
    if (cardLogo.classList.contains(imgClass)) {
      cardLogo.classList.remove(imgClass);
    }
  });
}

function renderImagesCollection() {
  cardsData.forEach(({ imgUrl, imgClass }) => {
    const img = new Image();
    img.src = imgUrl;
    img.classList.add(imgClass);
    cardsCollection.append(img);
  });
}
