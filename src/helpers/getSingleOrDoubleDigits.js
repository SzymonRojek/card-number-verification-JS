export default function getSingleOrDoubleDigits(card, lengthToCut) {
  return Number([...card].slice(0, lengthToCut).join(""));
}
