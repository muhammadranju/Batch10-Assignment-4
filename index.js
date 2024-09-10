function calculateTax(income, expenses) {
  if (income <= 0 || expenses <= 0) {
    return "Invalid Input";
  }

  if (income < expenses) {
    return "Invalid Input";
  }
  const total = income - expenses;
  const totalIncome = total * 0.2;
  return totalIncome;
}

//-------

function sendNotification(email) {
  const splitText = email.split("@");
  const [name, domain] = splitText;

  if (!email.includes("@")) {
    return "Invalid Email";
  }

  const message = `${name} sent you an email from ${domain}`;
  return message;
}
