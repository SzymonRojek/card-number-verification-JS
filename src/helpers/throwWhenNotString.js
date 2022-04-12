function throwWhenNotString(input) {
  if (typeof input !== "string") {
    throw new Error("Given parameter is not a number!");
  }
}

export default throwWhenNotString;
