export default function displayFormatNumbersOnChange(number) {
  const formatZeros = "0000000000000000";

  let newFormat = "";
  for (let i = 0; i < formatZeros.length; i++) {
    const el = formatZeros[i];

    newFormat += number[i] || el;
  }

  const slicedFormatZeros = newFormat.slice(
    0,
    -(formatZeros.length - number.length)
  );

  switch (number.length) {
    case 1:
      return slicedFormatZeros.replace(/(\d{1})/, "$1");
    case 2:
      return slicedFormatZeros.replace(/(\d{2})/, "$1");
    case 3:
      return slicedFormatZeros.replace(/(\d{3})/, "$1");
    case 4:
      return slicedFormatZeros.replace(/(\d{4})/, "$1");
    case 5:
      return slicedFormatZeros.replace(/(\d{4})(\d{1})/, "$1 $2");
    case 6:
      return slicedFormatZeros.replace(/(\d{4})(\d{2})/, "$1 $2");
    case 7:
      return slicedFormatZeros.replace(/(\d{4})(\d{3})/, "$1 $2");
    case 8:
      return slicedFormatZeros.replace(/(\d{4})(\d{4})/, "$1 $2");
    case 9:
      return slicedFormatZeros.replace(/(\d{4})(\d{4})(\d{1})/, "$1 $2 $3");
    case 10:
      return slicedFormatZeros.replace(/(\d{4})(\d{4})(\d{2})/, "$1 $2 $3");
    case 11:
      return slicedFormatZeros.replace(/(\d{4})(\d{4})(\d{3})/, "$1 $2 $3");
    case 12:
      return slicedFormatZeros.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3");
    case 13:
      return slicedFormatZeros.replace(
        /(\d{4})(\d{4})(\d{4})(\d{1})/,
        "$1 $2 $3 $4"
      );
    case 14:
      return slicedFormatZeros.replace(
        /(\d{4})(\d{4})(\d{4})(\d{2})/,
        "$1 $2 $3 $4"
      );
    case 15:
      return slicedFormatZeros.replace(
        /(\d{4})(\d{4})(\d{4})(\d{3})/,
        "$1 $2 $3 $4"
      );
    default:
      return newFormat.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
  }
}
