const currencyOption = document.querySelector(".js-select");
const currencyConverter  = document.querySelector(".js-pln");
const rateElement = document.querySelector(".js-rate");
const formElement = document.querySelector(".js-form");

const PLN = 1;
const EUR = 4.55;
const CHF = 4.71;
const GBP = 5.14;
const USD = 4.32;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const currency = currencyOption.value; 
    const amount = +currencyConverter.value;
    let rate;

    switch (currency) {
        case "EUR":
            rate = amount / EUR ;
            break;
        case "CHF":
            rate = amount / CHF ;
            break;
        case "GBP":
            rate = amount / GBP;
            break;
        case "USD":
            rate = amount / USD; 
            break
        
    }   
    
    rateElement.innerHTML =`${amount.toFixed(2)} PLN =<strong> ${rate.toFixed(2)} ${currency}</strong>`;
});