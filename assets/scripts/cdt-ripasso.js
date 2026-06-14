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
    const randomMode = document.getElementById('random-mode');
    const jumpForm = document.getElementById('jump-form');
    const questionNumber = document.getElementById('question-number');

    let questions = [];
    let deck = [];
    let currentQuestion = null;
    let currentQuestionIndex = null;
    let sequenceIndex = 0;

    document.addEventListener('DOMContentLoaded', loadQuestions);
    submitButton.addEventListener('click', revealAnswer);
    nextButton.addEventListener('click', showNextQuestion);
    randomMode.addEventListener('change', handleModeChange);
    jumpForm.addEventListener('submit', jumpToQuestion);
    userAnswer.addEventListener('keydown', (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            revealAnswer();
        }
    });

    async function loadQuestions() {
        try {
            const response = await fetch(reviewRoot.dataset.source, { cache: 'no-store' });
            if (!response.ok) {
                throw new Error('Impossibile caricare le domande');
            }

            if (reviewRoot.dataset.sourceFormat === 'json') {
                questions = await response.json();
            } else {
                questions = parseCdtMarkdown(await response.text());
            }

            if (questions.length === 0) {
                throw new Error('Nessuna domanda trovata');
            }

            refreshQuestionSet(0);
        } catch (error) {
            questionText.textContent = 'Errore nel caricamento delle domande.';
            submitButton.disabled = true;
            userAnswer.disabled = true;
        }
    }

    function parseCdtMarkdown(markdown) {
        const parsedQuestions = [];
        const lines = markdown.replace(/\r\n/g, '\n').split('\n');
        let currentSection = '';
        let currentQuestion = null;
        let answerLines = [];
        let readingAnswer = false;

        function saveCurrentQuestion() {
            if (!currentQuestion) {
                return;
            }

            parsedQuestions.push({
                section: currentSection,
                question: currentQuestion.trim(),
                answer: answerLines.join('\n').trim()
            });
        }

        lines.forEach((line) => {
            const sectionMatch = line.match(/^##\s+(.+)$/);
            const questionMatch = line.match(/^###\s+(.+)$/);
            const answerMatch = line.match(/^Risposta:\s*(.*)$/);

            if (sectionMatch && !questionMatch) {
                saveCurrentQuestion();
                currentSection = sectionMatch[1].trim();
                currentQuestion = null;
                answerLines = [];
                readingAnswer = false;
                return;
            }

            if (questionMatch) {
                saveCurrentQuestion();
                currentQuestion = questionMatch[1].trim();
                answerLines = [];
                readingAnswer = false;
                return;
            }

            if (!currentQuestion) {
                return;
            }

            if (answerMatch) {
                readingAnswer = true;
                answerLines.push(answerMatch[1]);
                return;
            }

            if (readingAnswer) {
                answerLines.push(line);
            }
        });

        saveCurrentQuestion();
        return parsedQuestions.filter((question) => question.answer.length > 0);
    }

    function refreshQuestionSet(preferredIndex) {
        totalCount.textContent = questions.length;
        questionNumber.max = questions.length;
        currentQuestionIndex = null;
        sequenceIndex = 0;
        resetDeck();
        displayQuestion(Math.min(preferredIndex, questions.length - 1));
    }

    function resetDeck() {
        deck = questions.map((question, index) => index);
        shuffle(deck);
        if (currentQuestionIndex !== null) {
            deck = deck.filter((questionIndex) => questionIndex !== currentQuestionIndex);
        }
    }

    function showNextQuestion() {
        if (randomMode.checked) {
            if (deck.length === 0) {
                resetDeck();
            }

            displayQuestion(deck.pop());
            return;
        }

        if (sequenceIndex >= questions.length) {
            sequenceIndex = 0;
        }

        displayQuestion(sequenceIndex);
        sequenceIndex += 1;
    }

    function displayQuestion(questionIndex) {
        currentQuestionIndex = questionIndex;
        currentQuestion = questions[questionIndex];
        questionText.textContent = currentQuestion.question;
        sectionName.textContent = currentQuestion.section || '';
        currentCount.textContent = questionIndex + 1;
        questionNumber.value = questionIndex + 1;
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

    function handleModeChange() {
        if (randomMode.checked) {
            resetDeck();
            return;
        }

        sequenceIndex = currentQuestionIndex === null ? 0 : currentQuestionIndex + 1;
    }

    function jumpToQuestion(event) {
        event.preventDefault();

        questionNumber.setCustomValidity('');
        const requestedNumber = Number.parseInt(questionNumber.value, 10);
        if (!Number.isInteger(requestedNumber) || requestedNumber < 1 || requestedNumber > questions.length) {
            questionNumber.setCustomValidity(`Inserisci un numero tra 1 e ${questions.length}.`);
            questionNumber.reportValidity();
            return;
        }

        const questionIndex = requestedNumber - 1;
        displayQuestion(questionIndex);
        sequenceIndex = questionIndex + 1;
        deck = deck.filter((deckIndex) => deckIndex !== questionIndex);
    }

    function shuffle(array) {
        for (let index = array.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
        }
    }
}());
