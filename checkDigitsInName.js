function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  const isNumberExist = name.split("");

  for (let value of isNumberExist) {
    if (!isNaN(parseInt(value)) && value !== " ") {
      console.log(typeof value);
      return true;
    }
  }
  return false;
}

const result = checkDigitsInName("n9ayeem");
console.log(result);
