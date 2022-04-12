import {
  hasCardProperLength,
  hasOnlyNumbersAndSpaces,
  isLuhnOK,
  isStartingNumberCorrect,
  throwWhenNotString,
} from "../helpers";

{
  const cardNumberInput = document.querySelector(".js-numberInput");
  const additionalScoreElement = document.querySelector(
    ".js-additionalMessage"
  );
  const messageErrorsElement = document.querySelector(".js-errors");

  const errorNumberReuired = [{ message: "Card Number is required!" }];

  const errors = [];

  function findErrors(str) {
    throwWhenNotString(str);

    const validationErrors = [
      hasOnlyNumbersAndSpaces(str),
      hasCardProperLength(str),
      isLuhnOK(str),
    ];

    errors =
      cardNumberInput.value !== ""
        ? validationErrors.filter(({ message }) => message)
        : errorNumberReuired;
  }

  function checkCardType(str) {
    const changeToArr = str.split(",").map(Number);

    const mastercard = [51, 52, 53, 54, 55];
    const visa = [4];
    const americanExpress = [34, 37];

    switch (changeToArr) {
      case isStartingNumberCorrect(mastercard, changeToArr) &&
        !errors.length &&
        changeToArr:
        return { message: "Mastercard" };
      case (isStartingNumberCorrect(visa, changeToArr) &&
        !errors.length &&
        changeToArr) ||
        (isStartingNumberCorrect(visa, changeToArr) &&
          !errors.length &&
          changeToArr):
        return { message: "Visa" };
      case isStartingNumberCorrect(americanExpress, changeToArr) &&
        !errors.length &&
        changeToArr:
        return { message: "American Express" };
      default:
        return { message: "Not correct!" };
    }
  }

  function renderMessages(value) {
    const { message } = !errors.length ? checkCardType(value) : "";

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
    additionalScoreElement.innerHTML = !errors.length ? `${message}` : "";
  }

  function render() {
    findErrors(cardNumberInput.value);
    renderMessages(cardNumberInput.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    render();

    cardNumberInput.value.trim();
    cardNumberInput.focus();
  }

  function init() {
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  }

  // init();
}
