import {
  getSingleOrDoubleDigits,
  hasCardProperLength,
  hasOnlyNumbers,
  isLuhnOK,
  throwWhenNotString,
} from "../helpers";
import cardsData from "./cardsData";

const cardNumberInput = document.querySelector(".js-numberInput");
const mainMessageElement = document.querySelector(".js-additionalMessage");
const messageErrorsElement = document.querySelector(".js-errors");
const errorNumberReuired = [{ message: "Card Number is required!" }];

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
  const information = "Card is uncorrect!";
  const FIRST_ITEM = 0;

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

  mainMessageElement.innerHTML =
    `${cardType.length ? cardType[FIRST_ITEM]?.name : ""}` || `${information}`;
}

function findErrors(inputValue, selectedCard) {
  throwWhenNotString(inputValue);

  const validationErrors = [
    hasOnlyNumbers(inputValue),
    hasCardProperLength(inputValue, selectedCard),
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

init();

// 5193080150954111
