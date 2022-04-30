const errorMessage = { message: "Please, type only numbers!" };

export default function hasOnlyNumbers(inputValue) {
  return /^\d+$/.test(inputValue) || errorMessage;
}
