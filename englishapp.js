function englishapp() {
    text1.textContent = ". Receive money";
    text2.textContent = ". Deposit money";
    text3.textContent = ". Money transfer";
    text4.textContent = ". Pay bills";
    text5.textContent = "Announce account balance .";
    text6.textContent = "Password operation .";
    text7.textContent = "Bill .";
    text8.textContent = "Sim card Charge .";
    help.textContent = "";
    helpE.textContent = "";
    helpText.textContent = "Select the type of service";
    helpText.style.fontSize = "2.5em";
    helpText.style.marginLeft = "210px";
    helpText.style.marginTop = "120px";
    helpText.style.width = "55%";

    btn3.addEventListener("click", (e) => {
        text1.textContent = "";
        text2.textContent = "";
        text3.textContent = "";
        text4.textContent = "";
        text5.textContent = "";
        text6.textContent = "";
        text7.textContent = "";
        text8.textContent = "";
        helpText.textContent = "";
    });
    btnCancel.addEventListener("click", (e) => {
        reset();
    });
}