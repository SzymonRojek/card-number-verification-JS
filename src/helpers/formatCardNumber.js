export default function formatCardNumber(num) {
  const chunkNumberReg = /.{1,4}/g;

  return num.match(chunkNumberReg).join(" ");
}
