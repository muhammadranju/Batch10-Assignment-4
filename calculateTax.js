function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0) {
    return "Invalid Input";
  }

  if (income < expenses) {
    return "Invalid Input";
  }
  const total = income - expenses;
  const totalIncome = total * 0.2;
  return totalIncome;
}

const result = calculateTax(10, 10);
console.log(result);
