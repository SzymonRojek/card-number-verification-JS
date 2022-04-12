const errorMessage = {
  message: "Probably you have typed wrong numbers - check them again!",
};

function isLuhnOK(str) {
  const luhnNumbers = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

  const changedIntoNumbersArr = str.split(",").map(Number);

  const resultSum = changedIntoNumbersArr.reduceRight((acc, _, i) => {
    const AUX_NUM = parseInt(modifyStr.charAt(i), 10);

    return (acc += i % 2 === 0 ? AUX_NUM : luhnNumbers[AUX_NUM]);
  }, 0);

  return resultSum % 10 === 0 ? true : errorMessage;
}

export default isLuhnOK;
