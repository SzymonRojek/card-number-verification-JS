const errorMessage = {
  message: "Luhn's algorithm does not point to the truth",
};

export default function isLuhnOK(inputValue) {
  const digitsArrayCollections = [...inputValue].map((num) => Number(num));

  return (
    digitsArrayCollections
      .reverse()
      .map((num, i) => (i % 2 === 1 ? num * 2 : num))
      .reduce((total, num) => total + (num > 9 ? sumDigits(num) : num), 0) %
      10 ===
      0 || errorMessage
  );
}

function sumDigits(num) {
  return String(num)
    .split("")
    .map((num) => Number(num))
    .reduce((total, num) => total + num, 0);
}
