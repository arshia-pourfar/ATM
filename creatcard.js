let cardNumber = document.getElementById("card-number");
let cardPassword = document.getElementById("card-password");
var cardNumberSave;
var cardPasswordSave;
var cardBalanceSave = 100000000;

function numberBorderCreatCard() {
    btnClear.addEventListener("click", (e) => {
        let lengthnumber = cardNumber.textContent.length;
        if (cardNumber.textContent.length < 19) {
            cardNumber.textContent = cardNumber.textContent.substring(0, lengthnumber - 1);
        }
    });
    number.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (cardNumber.textContent.length == 4) {
                cardNumber.textContent += "-";
            } else if (cardNumber.textContent.length == 9) {
                cardNumber.textContent += "-";
            } else if (cardNumber.textContent.length == 14) {
                cardNumber.textContent += "-";
            }
            if (cardNumber.textContent.length < 19) {
                cardNumber.textContent += e.target.textContent;
            }
        });
    });
    btnEnter.addEventListener("click", (e) => {
        if (cardNumber.textContent.length == 19) {
            passwordBorderCreatCard();
            cardNumber.style.boxShadow = "0px 0px black";
            cardPassword.style.boxShadow = "2px 2px black";
        }
    });
}

function passwordBorderCreatCard() {
    btnClear.addEventListener("click", (e) => {
        let lengthpassword = cardPassword.textContent.length;
        if (cardPassword.textContent.length < 4) {
            cardPassword.textContent = cardPassword.textContent.substring(0, lengthpassword - 1);
        }
    });
    number.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (cardPassword.textContent.length < 4) {
                cardPassword.textContent += e.target.textContent;
            }
        });
    });
    btnEnter.addEventListener("click", (e) => {
        if (cardNumber.textContent.length == 19 && cardPassword.textContent.length == 4) {
            cardNumberSave = cardNumber.textContent;
            cardPasswordSave = cardPassword.textContent;
            cardBorder.style.visibility = "visible";
            numberBorder.style.visibility = "visible";
            atm.style.visibility = "visible";
            startproject();
        }
    });
}