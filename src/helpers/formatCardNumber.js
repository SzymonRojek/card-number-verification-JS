export default function formatCardNumber(num) {
  const defaultNum = "0000000000000000";
  const copyNum = num.replace(/[^\d]/g, "");

  switch (copyNum.length) {
    case 13:
      return copyNum.replace(/(\d{2})(\d{3})(\d{4})(\d{3})/, "$1 $2 $3 $4");
    case 15:
      return copyNum.replace(/(\d{3})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
    case 16:
      return copyNum.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
    default:
      return defaultNum.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
  }
}
