const errorMessage = {
  message: "Please write a proper length of the numbers!",
};

function hasCardProperLength(str) {
  const removedSpaces = str.replace(/\s/g, "");
  const indicatedLengths = [13, 15, 16];

  return indicatedLengths.includes(removedSpaces.length) || errorMessage;
}

export default hasCardProperLength;
