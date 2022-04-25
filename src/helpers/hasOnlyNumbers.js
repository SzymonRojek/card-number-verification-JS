const errorMessage = { message: "Password has to contain only numbers!" };

export default function hasOnlyNumbers(inputValue) {
  return /^\d+$/.test(inputValue) || errorMessage;
}
