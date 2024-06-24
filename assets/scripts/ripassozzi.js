shuffle(questionsData);

let correctCount = 0;
let incorrectCount = 0;
let unansweredCount = questionsData.length;

updateCounters();

document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('questions');
    let qIndex = 1;

    questionsData.forEach((quiz, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');

        const questionText = document.createElement('p');
        questionText.classList.add('question');
        questionText.textContent = (qIndex++) + ". " + quiz.question;
        questionText.style.marginBottom = '20px';
        questionContainer.appendChild(questionText);

        const answersContainer = document.createElement('div');
        answersContainer.classList.add('answers');

        const answers = [quiz.correctAnswer, ...quiz.otherAnswers];
        shuffleArray(answers);

        answers.forEach(answer => {
            const answerButton = document.createElement('button');
            answerButton.textContent = answer;
            answerButton.addEventListener('click', () => {
                if (answer === quiz.correctAnswer) {
                    answerButton.classList.add('correct');
                    correctCount++;
                } else {
                    answerButton.classList.add('incorrect');
                    revealCorrectAnswer(answersContainer, quiz.correctAnswer);
                    incorrectCount++;
                }
                disableAllButtons(answersContainer);
                unansweredCount--;
                updateCounters();
            });
            answersContainer.appendChild(answerButton);
        });

        questionContainer.appendChild(answersContainer);
        questionsContainer.appendChild(questionContainer);
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function disableAllButtons(container) {
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}

function revealCorrectAnswer(container, correctAnswer) {
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
    });
}

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function updateCounters() {
    document.getElementById('correct-answers').textContent = correctCount;
    document.getElementById('incorrect-answers').textContent = incorrectCount;
    document.getElementById('unanswered-questions').textContent = unansweredCount;
    document.getElementById('total-questions').textContent = questionsData.length;
}