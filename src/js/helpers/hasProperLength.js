const errorMessage = {
  message: "Please write a proper length of the numbers",
};

export default function hasProperLength(inputValue, card) {
  if (!card.length) return errorMessage;

  return (
    card.find(({ length }) => length.includes(inputValue.length)) ||
    errorMessage
  );
}
