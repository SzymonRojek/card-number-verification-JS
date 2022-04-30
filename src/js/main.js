import {
  getSingleOrDoubleDigits,
  hasCardProperLength,
  hasOnlyNumbers,
  isLuhnOK,
  throwWhenNotString,
  displayFormatNumbersOnChange,
} from "../helpers";
import cardsData from "./cardsData";

const cardsCollection = document.querySelector(".js-cards__collection");
const cardInformation = document.querySelector(".js-card__header-information");
const cardLogo = document.querySelector(".js-card__logo");
const cardNumberInput = document.querySelector(".js-numberInput");
const messageErrorsElement = document.querySelector(".js-form__list--errors");
const cardNumberText = document.querySelector(".js-card__number");

const errorNumberReuired = [{ message: "Card Number is required!" }];

cardsData.forEach((card) => {
  const img = new Image();
  img.src = card.imgUrl;
  img.classList.add(card.atr);
  cardsCollection.append(img);
});

function init() {
  const form = document.querySelector(".js-form");

  form.addEventListener("submit", onFormSubmit);
}

function onFormSubmit(event) {
  event.preventDefault();

  cardNumberInput.focus();
  cardNumberInput.value.trim();

  const cardType = getCardType(cardNumberInput.value, cardsData);
  const errors = findErrors(cardNumberInput.value, cardType);

  render(errors, cardType);
}

function render(errors, cardType) {
  renderMessages(errors, cardType);
}

function renderMessages(errors, cardType) {
  const FIRST_CARD = 0;

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

  if (!errors.length) {
    cardLogo.src = cardType[FIRST_CARD].imgUrl;
    cardLogo.classList.add(cardType[FIRST_CARD].atr);
    cardNumberText.classList.add("card__number--correct");
    cardInformation.textContent = "Card";
  } else {
    cardLogo.removeAttribute("src");

    cardNumberText.classList.remove("card__number--correct");
    cardInformation.textContent = "Card unknown";
  }
}

function findErrors(inputValue, selectedCard) {
  throwWhenNotString(inputValue);

  const validationErrors = [
    hasOnlyNumbers(inputValue),
    hasCardProperLength(inputValue, selectedCard),
    isLuhnOK(inputValue),
    selectedCard,
  ];

  return inputValue
    ? validationErrors.filter(({ message }) => message)
    : errorNumberReuired;
}

function getCardType(inputValue, cards) {
  const startingDigitsError = {
    message: "The beginning of the bank card number is incorrect!",
  };

  const filteredCard =
    cards &&
    cards.filter(({ startingNumbers }) => {
      const cutLength = !!startingNumbers.find((num) => num >>> 0 === num % 10)
        ? 1
        : 2;

      const cutNumber = getSingleOrDoubleDigits(inputValue, cutLength);

      return startingNumbers.includes(cutNumber);
    });

  return filteredCard.length ? filteredCard : startingDigitsError;
}

cardNumberInput.addEventListener("input", ({ target: value }) => {
  const defaultFormat = "0000 0000 0000 0000";
  cardNumberText.textContent =
    value !== ""
      ? displayFormatNumbersOnChange(cardNumberInput.value)
      : defaultFormat;

  checkAtributesOnInputChange();
});

function checkAtributesOnInputChange() {
  if (cardLogo.hasAttribute("src")) {
    cardLogo.removeAttribute("src");
  }

  if (cardNumberText.classList.contains("card__number--correct")) {
    cardNumberText.classList.remove("card__number--correct");
  }

  cardsData.forEach(({ atr }) => {
    if (cardLogo.classList.contains(atr)) {
      cardLogo.classList.remove(atr);
    }
  });
}

init();
