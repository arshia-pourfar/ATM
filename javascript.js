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
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let help = document.getElementById("help");
let helpE = document.getElementById("helpE");
let helpText = document.getElementById("help-text");
let password = document.getElementById("input-password");
let number = document.querySelectorAll(".number");
let btnClear = document.getElementById("btn-clear");
let btnEnter = document.getElementById("btn-enter");
let btnCancel = document.getElementById("btn-cancel");
let Interval;
var resultBtnCard = false;
var btntext = false;
var i = 0;

function reset() {
    window.location.reload();
}

btncard.addEventListener("click", (e) => {
    main();
    password.style.visibility = "visible";
    helpText.textContent = "\t لطفا رمز خود را وارد کنید \n please type your password";
    helpText.style.marginTop = "300px";
    helpText.style.marginLeft = "35%";
    helpText.style.fontSize = "x-large";
    numberfunction();

    function numberfunction() {
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
            if (password.textContent.length == 4) {
                start();
                help.style.visibility = "visible";
                helpE.style.visibility = "visible";
                password.style.visibility = "hidden";
                helpText.style.visibility = "hidden";
                helpE.style.marginTop = "180px";
                helpE.style.marginLeft = "35%";
                text8.textContent = "";
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
});

function start() {
    text2.textContent = ". فارسی";
    text6.textContent = "English .";
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
