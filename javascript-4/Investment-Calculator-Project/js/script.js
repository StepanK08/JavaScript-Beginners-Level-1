function submitData() {
    const balance = parseFloat(document.getElementById('balance').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const duration = parseInt(document.getElementById('duration').value);

    if (isNaN(balance) || isNaN(interestRate) || isNaN(duration) || balance < 0 || interestRate < 0 || duration < 0) {
      updateDOM("Please enter valid numbers for all fields and ensure they are not less than 0.", 'red');
      return;
    }

    computeFutureValue(balance, interestRate, duration);
  }

  function updateDOM(value, color) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = value;
    resultElement.style.color = color;
  }

  function computeFutureValue(balance, annualRate, months) {
    const monthlyInterestRate = annualRate / 100 / 12;
    let futureValue = balance;

    for (let i = 0; i < months; i++) {
      futureValue += futureValue * monthlyInterestRate;
    }

    updateDOM(`Your future value: ${futureValue.toFixed(2)}`, 'green');
  }