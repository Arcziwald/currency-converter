{
  const calculateRate = (amount, currency) => {
    const EUR = 4.55;
    const CHF = 4.71;
    const GBP = 5.14;
    const USD = 4.32;

    switch (currency) {
      case "EUR":
        return amount / EUR;

      case "CHF":
        return amount / CHF;

      case "GBP":
        return amount / GBP;

      case "USD":
        return amount / USD;
    }
  };

  const updateResultText = (amount, rate, currency) => {
    const rateElement = document.querySelector(".js-rate");
    rateElement.innerHTML = `${amount.toFixed(2)} PLN =<strong> ${rate.toFixed(
      2
    )} ${currency}</strong>`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const currencyOption = document.querySelector(".js-select");
    const amountElement = document.querySelector(".js-amount");
    const currency = currencyOption.value;
    const amount = +amountElement.value;
    const rate = calculateRate(amount, currency);

    updateResultText(amount, rate, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
