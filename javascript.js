let color = document.querySelector("#color");
let display = document.querySelector(".display");
let btncard = document.querySelector("#btn-card");
let text1 = document.querySelector("#text-cont1");
let text2 = document.querySelector("#text-cont2");
let text3 = document.querySelector("#text-cont3");
let text4 = document.querySelector("#text-cont4");
let text5 = document.querySelector("#text-cont5");
let text6 = document.querySelector("#text-cont6");
let text7 = document.querySelector("#text-cont7");
let text8 = document.querySelector("#text-cont8");

var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var btn8 = document.querySelector("#btn8");

let help = document.getElementById("help");
let helpE = document.getElementById("helpE");
let helpText = document.getElementById("help-text");
let password = document.getElementById("input-password");
let number = document.querySelectorAll(".number");
let btnClear = document.getElementById("btn-clear");
let btnEnter = document.getElementById("btn-enter");
let btnCancel = document.getElementById("btn-cancel");
let cardBorder = document.getElementById("card-border");
let numberBorder = document.getElementById("num-border");

let textFactorDate = document.getElementById("text-factor-date");
let textFactorTime = document.getElementById("text-factor-time");
let textFactorTerminal = document.getElementById("text-factor-terminal");
let textFactorMarja = document.getElementById("text-factor-marja");
let textFactorCardNumber = document.getElementById("text-factor-card-number");
let textFactorMinesMoney = document.getElementById("text-factor-mines-money");
let textFactorCardBalance = document.getElementById("text-factor-card-balance");
let textFactorEnd = document.getElementById("text-factor-end");

let cardNumberMaghsad = document.getElementById("card-number-maghsad");
let moneyChangeMaghsad = document.getElementById("money-change-maghsad");

let Factor = document.getElementById("factor");
let atm = document.getElementById("atm");
let Interval;
var resultBtnCard = false;
var btntext = false;
var i = 0;

function reset() {
    window.location.reload();
}


function startproject() {

    btncard.addEventListener("click", (e) => {
        main();
        password.style.visibility = "visible";
        helpText.textContent = "\t لطفا رمز خود را وارد کنید \n please type your password";
        helpText.style.marginTop = "300px";
        helpText.style.marginLeft = "35%";
        helpText.style.fontSize = "x-large";
        numberfunction();

        function numberfunction() {
            btnCancel.addEventListener("click", (e) => {
                reset();
            });
            btnClear.addEventListener("click", (e) => {
                let length = password.textContent.length;
                if (password.textContent.length != 0) {
                    password.textContent = password.textContent.substring(0, length - 1);
                }
            });
            number.forEach((item) => {
                item.addEventListener("click", (e) => {
                    if (password.textContent.length < 4) {
                        password.textContent += e.target.textContent;
                    }
                });
            });
            btnEnter.addEventListener("click", (e) => {
                if (password.textContent.length == 4 && password.textContent == cardPasswordSave) {
                    start();
                } else if (password.textContent.length != 4 ||
                    password.textContent != cardPasswordSave &&
                    btntext == false) {
                    alert("password is not correct" + "\n" + "رمز عبور اشتباه است");
                    password.textContent = "";
                }
            });
        }

        function main() {
            clearInterval(Interval);
            Interval = setInterval(main, 500);
            if (i == 7 && resultBtnCard == false) {
                clearInterval(Interval);
                color.style.backgroundColor = "#adadad";
                resultBtnCard = true;
            }
            if (resultBtnCard == false && i < 7) {
                color.style.backgroundColor = "#29a729";
                resultBtnCard = true;
                i++;
            } else {
                color.style.backgroundColor = "#adadad";
                resultBtnCard = false;
                i++;
            }
        }

        display.style.backgroundColor = "#bedead";
        btncard.style.visibility = "hidden";
        console.log(cardNumberSave);
        console.log(cardPasswordSave);
        console.log(cardBalanceSave);
    });

    function start() {
        if (btntext == false) {
            text2.textContent = ". فارسی";
            text6.textContent = "English .";
            help.style.visibility = "visible";
            helpE.style.visibility = "visible";
            password.style.visibility = "hidden";
            helpE.style.marginTop = "180px";
            helpE.style.marginLeft = "35%";
            helpText.style.visibility = "hidden";
            text8.textContent = "";
        }
        btn6.addEventListener("click", (e) => {
            if (btntext == false) {
                helpText.style.visibility = "visible";
                englishapp();
                btntext = true;
            }
        });
        btn2.addEventListener("click", (e) => {
            if (btntext == false) {
                helpText.style.marginLeft = "40%";
                helpText.style.visibility = "visible";
                persianapp();
                btntext = true;
            }
        });
        btnCancel.addEventListener("click", (e) => {
            reset();
        });
    }
}