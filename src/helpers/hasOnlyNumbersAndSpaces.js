const errorMessage = { message: "Password has to contain only numbers!" };

function hasOnlyNumbersAndSpaces(str) {
  return /^[0-9\s]+$/.test(str) || errorMessage;
}

export default hasOnlyNumbersAndSpaces;
