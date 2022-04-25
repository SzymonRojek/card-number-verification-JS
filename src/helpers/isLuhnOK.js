const errorMessage = {
  message: "Luhn's algorithm does not point to the truth!",
};

export default function isLuhnOK(inputValue) {
  const luhnNumbers = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  const numberPatternReg = /\d+/g;
  const onlyNumbers = inputValue.match(numberPatternReg) || [];
  const arrNumbers = onlyNumbers
    .join("")
    .split("")
    .map((el) => Number(el));

  return (
    arrNumbers.reduceRight((acc, _, i) => {
      const AUX_NUM = parseInt(inputValue.charAt(i), 10);

      return (acc += i % 2 === 0 ? AUX_NUM : luhnNumbers[AUX_NUM]);
    }, 0) %
      10 ===
      0 || errorMessage
  );
}
