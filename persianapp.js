function persianapp() {
    text1.textContent = ". دریافت وجه";
    text2.textContent = ". واریز وجه";
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
    btn3.addEventListener("click", (e) => {
        text1.textContent = "";
        text2.textContent = "";
        text3.textContent = "";
        text4.textContent = "";
        text5.textContent = "";
        text6.textContent = "حساب اصلی کارت .";
        text7.textContent = "";
        text8.textContent = "";
        helpText.textContent = "";
    });
    btnCancel.addEventListener("click", (e) => {
        reset();
    });
}