const errorMessage = { message: "Password has to contain only numbers!" };

export default function hasOnlyNumbers(str) {
  return /^\d+$/.test(str) || errorMessage;
}
