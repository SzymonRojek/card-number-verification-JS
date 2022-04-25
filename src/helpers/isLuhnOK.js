const errorMessage = {
  message: "Probably you have typed wrong numbers - check them again!",
};

export default function isLuhnOK(str) {
  const luhnNumbers = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  const numberPatternReg = /\d+/g;
  const onlyNumbers = str.match(numberPatternReg) || [];
  const arrNumbers = onlyNumbers
    .join("")
    .split("")
    .map((el) => Number(el));

  return (
    arrNumbers.reduceRight((acc, _, i) => {
      const AUX_NUM = parseInt(str.charAt(i), 10);

      return (acc += i % 2 === 0 ? AUX_NUM : luhnNumbers[AUX_NUM]);
    }, 0) %
      10 ===
      0 || errorMessage
  );
}
