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

function sendNotification(email) {
  const splitText = email.split("@");
  const name = splitText[0];
  const domain = splitText[1];

  if (!email.includes("@")) {
    return "Invalid Email";
  }

  const message = `${name} sent you an email from ${domain}`;
  return message;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  const isNumberExist = name.split("");

  let isTrueFalse;

  for (let value of isNumberExist) {
    if (!isNaN(parseFloat(value)) && value !== " ") {
      isTrueFalse = true;
    } else {
      isTrueFalse = false;
    }
  }
  return isTrueFalse;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return "Invalid Input";
  }
  let calculateScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily) {
    calculateScore += 20;
  }
  return calculateScore >= 80 ? true : false;
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let totalTime = 0;

  for (let time of waitingTimes) {
    totalTime += time;
  }
  const timeAvg = Math.round(totalTime / waitingTimes.length);

  const stillWaiting = serialNumber - 1;

  const sinceWaiting = stillWaiting - waitingTimes.length;

  const waitingTimeAre = timeAvg * sinceWaiting;

  return waitingTimeAre;
}
