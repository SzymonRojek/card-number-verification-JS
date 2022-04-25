export default function isStartingNumberCorrect(card, data) {
  const sliceCondition = card.length ? 1 : 2;
  const slicedNumber = Number(data.slice(0, sliceCondition).join(""));

  return card.includes(slicedNumber);
}
