(function () {
    const reviewRoot = document.querySelector('.cdt-review');
    const questionText = document.getElementById('question-text');
    const userAnswer = document.getElementById('user-answer');
    const submitButton = document.getElementById('submit-answer');
    const nextButton = document.getElementById('next-question');
    const answerPanel = document.getElementById('correct-answer-panel');
    const correctAnswer = document.getElementById('correct-answer');
    const currentCount = document.getElementById('current-count');
    const totalCount = document.getElementById('total-count');
    const sectionName = document.getElementById('section-name');

    let questions = [];
    let deck = [];
    let currentQuestion = null;
    let shownCount = 0;

    document.addEventListener('DOMContentLoaded', loadQuestions);
    submitButton.addEventListener('click', revealAnswer);
    nextButton.addEventListener('click', showNextQuestion);
    userAnswer.addEventListener('keydown', (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            revealAnswer();
        }
    });

    async function loadQuestions() {
        try {
            const response = await fetch(reviewRoot.dataset.source);
            if (!response.ok) {
                throw new Error('Impossibile caricare le domande');
            }

            questions = await response.json();
            totalCount.textContent = questions.length;
            resetDeck();
            showNextQuestion();
        } catch (error) {
            questionText.textContent = 'Errore nel caricamento delle domande.';
            submitButton.disabled = true;
            userAnswer.disabled = true;
        }
    }

    function resetDeck() {
        deck = [...questions];
        shuffle(deck);
        shownCount = 0;
    }

    function showNextQuestion() {
        if (deck.length === 0) {
            resetDeck();
        }

        currentQuestion = deck.pop();
        shownCount += 1;

        questionText.textContent = currentQuestion.question;
        sectionName.textContent = currentQuestion.section || '';
        currentCount.textContent = shownCount;
        userAnswer.value = '';
        userAnswer.disabled = false;
        submitButton.disabled = false;
        submitButton.hidden = false;
        nextButton.hidden = true;
        answerPanel.hidden = true;
        correctAnswer.textContent = '';
        userAnswer.focus();
    }

    function revealAnswer() {
        if (!currentQuestion || answerPanel.hidden === false) {
            return;
        }

        correctAnswer.textContent = currentQuestion.answer;
        answerPanel.hidden = false;
        userAnswer.disabled = true;
        submitButton.disabled = true;
        submitButton.hidden = true;
        nextButton.hidden = false;
        nextButton.focus();
    }

    function shuffle(array) {
        for (let index = array.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
        }
    }
}());
