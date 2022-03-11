let x = 0;
let xtext = "";
let result = 0;
let resulttext = "";
let resultendtext = "";
let trueorfalseenteghal = false;
let trueorfalsemain = false;
let trueorfalseenteghalpool = false;
let trueorfalsemoneychange = false;
let trueorfalsefactor = false;
let resultmoneychange = false;
let resultmoneychangelength = false;

function persianapp() {
var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
    if (isAndroid) {
        alert("hello");
    }
    text1.textContent = ". دریافت وجه";
    text2.textContent = ". پرداخت ارز";
    text3.textContent = ". انتقال وجه";
    text4.textContent = ". پرداخت قبوض";
    text5.textContent = "اعلام مانده حساب .";
    text6.textContent = "عملیات رمز .";
    text7.textContent = "صورت حساب .";
    text8.textContent = "شارژ سیم کارت .";
    help.textContent = "";
    helpE.textContent = "";
    helpText.textContent = "انتخاب نوع خدمت";
    helpText.style.fontSize = "3em";
    helpText.style.marginLeft = "300px";
    helpText.style.marginTop = "120px";
    helpText.style.width = "55%";
    helpText.style.textAlign = "left";
    btn1.addEventListener("click", (e) => {
        if (trueorfalsemain == false) {
            text1.textContent = "۱۰۰,۰۰۰";
            text2.textContent = "۲۰۰,۰۰۰";
            text3.textContent = "۵۰۰,۰۰۰";
            text4.textContent = "۱,۰۰۰,۰۰۰";
            text5.textContent = "۱,۵۰۰,۰۰۰";
            text6.textContent = "۲,۰۰۰,۰۰۰";
            text7.textContent = "۲,۵۰۰,۰۰۰";
            text8.textContent = "خروج .";
            helpText.textContent = "دریافت وجه";
            helpText.style.marginLeft = "330px";
            helpText.style.marginTop = "100px";
            دریافتوجه();
            trueorfalsemain = true;
        }
    });
    btn2.addEventListener("click", (e) => {

    });
    btn3.addEventListener("click", (e) => {
        if (trueorfalsemain == false) {
            text1.textContent = "";
            text2.textContent = "";
            text3.textContent = "";
            text4.textContent = "";
            text5.textContent = "";
            text6.textContent = "حساب اصلی کارت .";
            text7.textContent = "سایر حساب های متصل به کارت .";
            text8.textContent = "";
            helpText.textContent = "انتقال وجه از";
            helpText.style.marginLeft = "330px";
            helpText.style.marginTop = "100px";
            انتقالوجه();
            trueorfalsemain = true;
        }
    });
    btn4.addEventListener("click", (e) => {

    });
    btn5.addEventListener("click", (e) => {

    });
    btn6.addEventListener("click", (e) => {

    });
    btn7.addEventListener("click", (e) => {

    });
    btn8.addEventListener("click", (e) => {

    });
    btnCancel.addEventListener("click", (e) => {
        reset();
    });


    function دریافتوجه() {
        let trueorfalse = false;
        btn1.addEventListener("click", (e) => {
            if (trueorfalse == false) {
                text1.textContent = "";
                text2.textContent = "";
                text3.textContent = "";
                text4.textContent = "";
                text5.textContent = "";
                text6.textContent = "Yes .";
                text7.textContent = "No .";
                text8.textContent = "";
                helpText.textContent = "رسید میخواهید";
                x = 10000;
                xtext = "ریال 100,000";
                resulttext = "ریال 99,900,000";
                resultendtext = "99,700,000 ";
                فاکتوربرداشت();
                trueorfalse = true;
            }
        });
        btn2.addEventListener("click", (e) => {
            if (trueorfalse == false) {
                text1.textContent = "";
                text2.textContent = "";
                text3.textContent = "";
                text4.textContent = "";
                text5.textContent = "";
                text6.textContent = "Yes .";
                text7.textContent = "No .";
                text8.textContent = "";
                helpText.textContent = "رسید میخواهید";
                x = 20000;
                xtext = "ریال 200,000";
                resulttext = "ریال 99,800,000";
                resultendtext = "99,600,000 ";
                فاکتوربرداشت();
                trueorfalse = true;

            }
        });
        btn3.addEventListener("click", (e) => {
            if (trueorfalse == false) {
                text1.textContent = "";
                text2.textContent = "";
                text3.textContent = "";
                text4.textContent = "";
                text5.textContent = "";
                text6.textContent = "Yes .";
                text7.textContent = "No .";
                text8.textContent = "";
                helpText.textContent = "رسید میخواهید";
                x = 50000;
                xtext = "ریال 500,000";
                resulttext = "ریال 99,500,000";
                resultendtext = "99,300,000 ";
                فاکتوربرداشت();
                trueorfalse = true;
            }

        });
        btn4.addEventListener("click", (e) => {
            if (trueorfalse == false) {
                text1.textContent = "";
                text2.textContent = "";
                text3.textContent = "";
                text4.textContent = "";
                text5.textContent = "";
                text6.textContent = "Yes .";
                text7.textContent = "No .";
                text8.textContent = "";
                helpText.textContent = "رسید میخواهید";
                x = 100000;
                xtext = "ریال 1,000,000";
                resulttext = "ریال 99,000,000";
                resultendtext = "98,800,000 ";
                فاکتوربرداشت();
                trueorfalse = true;
            }

        });
        btn5.addEventListener("click", (e) => {
            if (trueorfalse == false) {

                text1.textContent = "";
                text2.textContent = "";
                text3.textContent = "";
                text4.textContent = "";
                text5.textContent = "";
                text6.textContent = "Yes .";
                text7.textContent = "No .";
                text8.textContent = "";
                helpText.textContent = "رسید میخواهید";
                x = 150000;
                xtext = "ریال 1,500,000";
                resulttext = "ریال 98,500,000";
                resultendtext = "98,300,000 ";
                فاکتوربرداشت();
                trueorfalse = true;
            }
        });
        btn6.addEventListener("click", (e) => {
            if (trueorfalse == false) {

                text1.textContent = "";
                text2.textContent = "";
                text3.textContent = "";
                text4.textContent = "";
                text5.textContent = "";
                text6.textContent = "Yes .";
                text7.textContent = "No .";
                text8.textContent = "";
                helpText.textContent = "رسید میخواهید";
                x = 200000;
                xtext = "ریال 2,000,000";
                resulttext = "ریال 98,000,000";
                resultendtext = "97,800,000 ";
                فاکتوربرداشت();
                trueorfalse = true;
            }
        });
        btn7.addEventListener("click", (e) => {
            if (trueorfalse == false) {

                text1.textContent = "";
                text2.textContent = "";
                text3.textContent = "";
                text4.textContent = "";
                text5.textContent = "";
                text6.textContent = "Yes .";
                text7.textContent = "No .";
                text8.textContent = "";
                helpText.textContent = "رسید میخواهید";
                x = 250000;
                xtext = "ریال 2,500,000 ";
                resulttext = "ریال 97,500,000";
                resultendtext = "97,300,000 ";
                فاکتوربرداشت();
                trueorfalse = true;
            }

        });
        btn8.addEventListener("click", (e) => {
            if (trueorfalse == false) {
                reset();
                trueorfalse = true;
            }
        });
    }

    function انتقالوجه() {

        btn6.addEventListener("click", (e) => {
            if (trueorfalseenteghal == false) {

                helpText.style.marginLeft = "24%";
                text1.textContent = "";
                text2.textContent = "";
                text3.textContent = "";
                text4.textContent = "";
                text5.textContent = "";
                text6.textContent = "";
                text7.textContent = "";
                text8.textContent = "";
                helpText.textContent = "انتقال از حساب اصلی کارت";
                help.textContent = "لطفا شماره کارت مورد نظر خود را جهت واریز وارد نموده و دکمه ثبت را فشار دهید";
                help.style.textAlign = "right";
                help.style.marginLeft = "11%";
                help.style.marginTop = "165px";
                help.style.fontSize = "1.6em";
                cardNumberMaghsad.style.visibility = "visible";
                trueorfalseenteghal = true;
                number.forEach((item) => {
                    item.addEventListener("click", (e) => {
                        if (cardNumberMaghsad.textContent.length == 4) {
                            cardNumberMaghsad.textContent += "-";
                        } else if (cardNumberMaghsad.textContent.length == 9) {
                            cardNumberMaghsad.textContent += "-";
                        } else if (cardNumberMaghsad.textContent.length == 14) {
                            cardNumberMaghsad.textContent += "-";
                        }
                        if (cardNumberMaghsad.textContent.length < 19) {
                            cardNumberMaghsad.textContent += e.target.textContent;
                        }
                    });
                });
            }
            btnClear.addEventListener("click", (e) => {
                let lengthcardNumberMaghsad = cardNumberMaghsad.textContent.length;
                if (cardNumberMaghsad.textContent.length != 0) {
                    cardNumberMaghsad.textContent = cardNumberMaghsad.textContent.substring(0, lengthcardNumberMaghsad - 1);
                }
            });
            btnEnter.addEventListener("click", (e) => {

                if (trueorfalseenteghalpool == false) {
                    if (cardNumberMaghsad.textContent.length == 19) {
                        let numberMaghsad;
                        let moneychange;
                        numberMaghsad = cardNumberMaghsad.textContent;
                        console.log(numberMaghsad);
                        trueorfalseenteghalpool = true;
                        مبلغانتقال();
                    } else {
                        alert("لطفا شماره کارت را درست وارد کنید");
                        trueorfalseenteghalpool = true;
                    }

                }
            });


        });
    }

    function مبلغانتقال() {
        cardNumberMaghsad.style.visibility = "hidden";
        moneyChangeMaghsad.style.visibility = "visible";
        help.style.marginLeft = "37%";
        help.textContent = "مبلغ انتقال را وارد کنید";
        if (trueorfalsemoneychange == false) {
            number.forEach((item) => {
                item.addEventListener("click", (e) => {
                    if (moneyChangeMaghsad.textContent.length < 15) {
                        moneyChangeMaghsad.textContent += e.target.textContent;
                    } else {
                        alert("مبلغ بیشتر از حد مجاز است");
                    }
                });
            });

            btnClear.addEventListener("click", (e) => {
                let lengthmoneychangemaghsad = moneyChangeMaghsad.textContent.length;
                if (moneyChangeMaghsad.textContent.length != 0) {
                    moneyChangeMaghsad.textContent = moneyChangeMaghsad.textContent.substring(0, lengthmoneychangemaghsad - 1);
                }
            });
            btnEnter.addEventListener("click", (e) => {
                if (moneyChangeMaghsad.textContent < cardBalanceSave) {
                    resultmoneychange = false;
                    trueorfalsemoneychange = true;
                    فاکتورانتقل();
                } else {
                    resultmoneychange = true;
                    فاکتورانتقل();
                }
                if (moneyChangeMaghsad.textContent.length < 4) {
                    resultmoneychangelength = true;
                    trueorfalsemoneychange = true;
                    فاکتورانتقل();
                } else {
                    resultmoneychangelength = false;
                    trueorfalsemoneychange = false;
                    فاکتورانتقل();
                }

            });
        }
    }

    function فاکتورانتقل() {
        if (trueorfalsemoneychange == false) {
            trueorfalsemoneychange = true;

            if (resultmoneychange == true) {
                alert("تراکنش ناموفق");
                alert("موجودی کافی نیست");
            }
            if (resultmoneychangelength == true) {
                alert("تراکنش ناموفق");
                alert("مبلغ قابل انتقال نیست");
            }

        } else {
            moneychange = moneyChangeMaghsad.textContent;
            moneychangebalance = cardBalanceSave - moneychange;
            console.log(moneychangebalance);
            alert("hello");
        }
    }

    function فاکتوربرداشت() {

        btn6.addEventListener("click", (e) => {
            if (trueorfalsefactor == false) {
                text1.textContent = "";
                text2.textContent = "";
                text3.textContent = "";
                text4.textContent = "";
                text5.textContent = "";
                text6.textContent = "";
                text7.textContent = "";
                text8.textContent = "";
                helpText.textContent = "";
                result = cardBalanceSave - x;
                Factor.style.visibility = "visible";
                textFactorDate.textContent = new Date();
                textFactorCardNumber.textContent = cardNumberSave + " : شماره کارت ";
                textFactorMinesMoney.textContent = " مبلغ برداشت : " + xtext;
                textFactorCardBalance.textContent = "موجودی فعلی : " + resulttext;
                textFactorEnd.textContent = " قابل برداشت : ریال " + resultendtext;
                trueorfalsefactor = true;
            }
        });
        btn7.addEventListener("click", (e) => {
            if (trueorfalsefactor == false) {
                reset();
                trueorfalsefactor = true;
            }
        });
    }
}
