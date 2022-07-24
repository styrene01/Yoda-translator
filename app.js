var translateBtn = document.querySelector("#translate-btn");
var inputTxt = document.querySelector("#inputText");
var outputTxt = document.querySelector("#outputText");

function buttonClicked() {
    console.log("Button clicked");
    console.log(inputText.value);
    outputTxt.innerText = "Translated text is: " + inputTxt.value;
}

translateBtn.addEventListener("click", buttonClicked);
