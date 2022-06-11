var body = document.getElementById("body");
var numbersChoose = document.querySelector(".dropdown_num");
var operatorsCont = document.querySelector(".operators_cont");
var selectNumsBtn = document.getElementById("select_nums");
var selectOperatorBtn = document.getElementById("select_operator");

let userFirstNumber = document.getElementById("userFirstNum");
let userSecondNumber = document.getElementById("userSecondNum");
let chooseBtn = document.getElementById("chooseBtn");
let numbersErr = document.getElementById("numbers_err");
let operatorHeading = document.getElementById("operatorHeading");

let addition = document.getElementById("Add");
let subtraction = document.getElementById("Subt");
let multiplication = document.getElementById("Multi");
let division = document.getElementById("Div");

let operatorInTask = document.getElementById("opInTask");
let userResult = document.getElementById("user_result");

var tools = {
    firstNumber: 0,
    secondNumber: 0,
    operator: "&#43;"
};

//------------------------------------------------------------------------------------------

selectNumsBtn.addEventListener("click", (e) => {
    numbersChoose.style.display = "block";
    operatorsCont.style.display = "none";
    userFirstNumber.focus();
    e.stopPropagation();
});
selectOperatorBtn.addEventListener("click", (e) => {
    operatorsCont.style.display = "block";
    numbersChoose.style.display = "none";
    e.stopPropagation();
});
body.addEventListener("click", () => {
    operatorsCont.style.display = "none";
    numbersChoose.style.display = "none";
});
numbersChoose.addEventListener("click", (e) => {
    numbersChoose.style.display = "block";
    e.stopPropagation();
});
operatorsCont.addEventListener("click", (e) => {
    operatorsCont.style.display = "block";
    e.stopPropagation();
});

//------------------------------------------------------------------------------------------

chooseBtn.addEventListener("click", (e) => {
    if (userFirstNumber.value === "" || userSecondNumber.value === "") {
        numbersErr.innerHTML = "You must fill in both fields !";
    } else if (parseInt(userFirstNumber.value) > parseInt(userSecondNumber.value)) {
        numbersErr.innerHTML = "The first number must be smaller than second !";
    } else {
        tools.firstNumber = userFirstNumber.value;
        tools.secondNumber = userSecondNumber.value;
        document.getElementById("fNumHeading").innerHTML = tools.firstNumber;
        document.getElementById("sNumHeading").innerHTML = tools.secondNumber;
        document.getElementById("next_task").disabled = false;
        userFirstNumber.value = "";
        userSecondNumber.value = "";
        numbersErr.innerHTML = "";
        numbersChoose.style.display = "none";
        e.stopPropagation();
    }
});

//------------------------------------------------------------------------------------------

addition.addEventListener("click", (e) => {
    tools.operator = "&#43;";
    operatorHeading.innerHTML = tools.operator;
    operatorInTask.innerHTML = tools.operator;
    operatorsCont.style.display = "none";
    e.stopPropagation();
});
subtraction.addEventListener("click", (e) => {
    tools.operator = "&#8722;";
    operatorHeading.innerHTML = tools.operator;
    operatorInTask.innerHTML = tools.operator;
    operatorsCont.style.display = "none";
    e.stopPropagation();
});
multiplication.addEventListener("click", (e) => {
    tools.operator = "&#215;";
    operatorHeading.innerHTML = tools.operator;
    operatorInTask.innerHTML = tools.operator;
    operatorsCont.style.display = "none";
    e.stopPropagation();
});
division.addEventListener("click", (e) => {
    tools.operator = "&#247;";
    operatorHeading.innerHTML = tools.operator;
    operatorInTask.innerHTML = tools.operator;
    operatorsCont.style.display = "none";
    e.stopPropagation();
});

//------------------------------------------------------------------------------------------

function nextTask() {
    document.getElementById("final_result").innerHTML = "";
    document.getElementById("corAnsw").innerHTML = "";
    userResult.value = "";
    userResult.disabled = false;
    userResult.focus();
    let min = parseInt(tools.firstNumber);
    let max = parseInt(tools.secondNumber);
    let randF = Math.floor(Math.random() * (max - min + 1)) + min;
    let randS = Math.floor(Math.random() * (max - min + 1)) + min;
    let divRes = randF / randS;
    document.getElementById("first_number_task").innerHTML = randF;
    document.getElementById("second_number_task").innerHTML = randS;
    if (tools.operator === "&#8722;" && randF < randS) {
        nextTask();
    }
    if (tools.operator === "&#247;" && divRes != parseInt(divRes)) {
        nextTask();
    }
};

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && tools.firstNumber != 0 && tools.secondNumber != 0) {
        nextTask();
    }
});

//------------------------------------------------------------------------------------------

let correctAnswCount = 0;
let incorrectAnswCount = 0;
let funcContainer = {
    additionFunc() {
        let leftNum = parseInt(document.getElementById("first_number_task").textContent);
        let rightNum = parseInt(document.getElementById("second_number_task").textContent);
        let correctRes = leftNum + rightNum;
        if (correctRes === parseInt(userResult.value)) {
            document.getElementById("final_result").innerHTML = "Correct !";
            document.getElementById("final_result").style.color = "#f0c33c";
            correctAnswCount++;
            document.getElementById("correct_answ_count").innerHTML = correctAnswCount;
        } else {
            document.getElementById("final_result").innerHTML = "Incorrect";
            document.getElementById("final_result").style.color = "red"
            incorrectAnswCount++;
            document.getElementById("incorrect_answ_count").innerHTML = incorrectAnswCount;
            document.getElementById("corAnsw").innerHTML = correctRes;
        }
    },
    subtractionFunc() {
        let leftNum = parseInt(document.getElementById("first_number_task").textContent);
        let rightNum = parseInt(document.getElementById("second_number_task").textContent);
        let correctRes = leftNum - rightNum;
        if (correctRes === parseInt(userResult.value)) {
            document.getElementById("final_result").innerHTML = "Correct !";
            document.getElementById("final_result").style.color = "#f0c33c";
            correctAnswCount++;
            document.getElementById("correct_answ_count").innerHTML = correctAnswCount;
        } else {
            document.getElementById("final_result").innerHTML = "Incorrect";
            document.getElementById("final_result").style.color = "red";
            incorrectAnswCount++;
            document.getElementById("incorrect_answ_count").innerHTML = incorrectAnswCount;
            document.getElementById("corAnsw").innerHTML = correctRes;
        }
    },
    multiplicationFunc() {
        let leftNum = parseInt(document.getElementById("first_number_task").textContent);
        let rightNum = parseInt(document.getElementById("second_number_task").textContent);
        let correctRes = leftNum * rightNum;
        if (correctRes === parseInt(userResult.value)) {
            document.getElementById("final_result").innerHTML = "Correct !";
            document.getElementById("final_result").style.color = "#f0c33c";
            correctAnswCount++;
            document.getElementById("correct_answ_count").innerHTML = correctAnswCount;
        } else {
            document.getElementById("final_result").innerHTML = "Incorrect";
            document.getElementById("final_result").style.color = "red";
            incorrectAnswCount++;
            document.getElementById("incorrect_answ_count").innerHTML = incorrectAnswCount;
            document.getElementById("corAnsw").innerHTML = correctRes;
        }
    },
    divisionFunc() {
        let leftNum = parseInt(document.getElementById("first_number_task").textContent);
        let rightNum = parseInt(document.getElementById("second_number_task").textContent);
        let correctRes = leftNum / rightNum;
        if (correctRes === parseInt(userResult.value)) {
            document.getElementById("final_result").innerHTML = "Correct !";
            document.getElementById("final_result").style.color = "#f0c33c";
            correctAnswCount++;
            document.getElementById("correct_answ_count").innerHTML = correctAnswCount;
        } else {
            document.getElementById("final_result").innerHTML = "Incorrect";
            document.getElementById("final_result").style.color = "red";
            incorrectAnswCount++;
            document.getElementById("incorrect_answ_count").innerHTML = incorrectAnswCount;
            document.getElementById("corAnsw").innerHTML = correctRes;
        }
    }
};

function calculateTask() {
    if (userResult.value === "") {
        return false;
    }
    if (tools.operator === "&#43;") {
        funcContainer.additionFunc();
    } else if (tools.operator === "&#8722;") {
        funcContainer.subtractionFunc();
    } else if (tools.operator === "&#215;") {
        funcContainer.multiplicationFunc();
    } else if (tools.operator === "&#247;") {
        funcContainer.divisionFunc();
    }
};

userResult.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && userResult.value != "") {
        calculateTask();
    }
});






