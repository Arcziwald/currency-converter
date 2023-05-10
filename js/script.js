let currencyOption = document.querySelector(".js-select");
let currencyConverter  = document.querySelector(".js-pln");
let rateElement = document.querySelector(".js-rate");
let formElement = document.querySelector(".js-form");

let PLN = 1;
let EUR = 4.55;
let CHF = 4.71;
let GBP = 5.14;
let USD = 4.32;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyOption.value; 
    let amount = +currencyConverter.value;
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