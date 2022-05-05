export default function findCardWithStartingNumber(inputValue, cards) {
  return cards?.filter((card) => {
    const lengthToCut = card.startingNumbers.length > 1 ? 2 : 1;
    const numberCut = Number(inputValue.slice(0, lengthToCut));

    return card.startingNumbers.includes(numberCut);
  });
}
