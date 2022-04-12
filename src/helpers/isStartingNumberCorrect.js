function isStartingNumberCorrect(card, data) {
  const sliceCondition = card.length === 1 ? 1 : 2;
  const slicedNumber = +data.slice(0, sliceCondition).join("");

  return card.includes(slicedNumber);
}

export default isStartingNumberCorrect;
