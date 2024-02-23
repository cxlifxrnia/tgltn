var answerCount = 0;
var expectedQuestion = "Кто бмж люти?"; // Текст вопроса, на который ожидаем ответ

function typeAndEraseText(targetElement, text, speed) {
    var i = 0;
    var isErasing = false;

    function type() {
        targetElement.innerText += text.charAt(i);
        i++;

        if (i === text.length) {
            isErasing = true;
            setTimeout(erase, 1000);
        } else {
            setTimeout(type, speed);
        }
    }

    function erase() {
        var currentText = targetElement.innerText;
        currentText = currentText.slice(0, -1);
        targetElement.innerText = currentText;

        if (currentText === "") {
            isErasing = false;
            setTimeout(function() {
                targetElement.innerText = "";
                typeAndEraseText(targetElement, "В нахабино сегодня хз", speed);
            }, 1000);
        } else {
            setTimeout(erase, speed / 2);
        }
    }

    type();
}

function getAnswer() {
    var question = document.getElementById("question").value.trim();
    var answerElement = document.getElementById("answer");
    answerElement.innerText = "";

    if (question.toLowerCase() === expectedQuestion.toLowerCase() && answerCount < 2) {
        // Простейший пример ответа на вопрос
        var answer = "Вы Владимир, бмж люти узб чотки бмж";

        typeAndEraseText(answerElement, answer, 50);
        answerCount++;
    }
}