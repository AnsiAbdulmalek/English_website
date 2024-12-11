const quizData = {
    'multiple-choice': [
        {
            question: "Which word is a synonym for 'happy'?",
            options: ["Sad", "Joyful", "Angry", "Tired"],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "Choose the correct form: 'She ___ to school every day.'",
            options: ["go", "goes", "going", "gone"],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "Select the correct word: 'The weather is ___ today.'",
            options: ["beautiful", "beautifully", "beauty", "beautify"],
            correct: 0,
            type: "multiple-choice"
        },
        {
            question: "Which is the correct spelling?",
            options: ["recieve", "receive", "receeve", "receve"],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "Choose the correct phrasal verb: 'I need to ___ this work by Friday.'",
            options: ["hand in", "hand on", "hand over", "hand out"],
            correct: 0,
            type: "multiple-choice"
        },
        {
            question: "What is the correct plural form of 'child'?",
            options: ["childs", "childes", "children", "childern"],
            correct: 2,
            type: "multiple-choice"
        },
        {
            question: "Choose the correct preposition: 'She arrived ___ the airport.'",
            options: ["in", "at", "on", "to"],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "Which word means 'to make something better'?",
            options: ["deteriorate", "worsen", "improve", "decline"],
            correct: 2,
            type: "multiple-choice"
        },
        {
            question: "Select the correct article: '___ university I attend is very old.'",
            options: ["A", "An", "The", "No article"],
            correct: 2,
            type: "multiple-choice"
        },
        {
            question: "Which sentence uses the correct form of 'there/their/they're'?",
            options: [
                "There going to the party.",
                "Their going to the party.",
                "They're going to the party.",
                "There're going to the party."
            ],
            correct: 2,
            type: "multiple-choice"
        }
    ],
    'true-false': [
        {
            question: "The past tense of 'go' is 'gone'.",
            options: ["True", "False"],
            correct: 1,
            type: "true-false",
            explanation: "The simple past tense of 'go' is 'went'. 'Gone' is the past participle."
        },
        {
            question: "We use 'a' before words that start with a consonant sound.",
            options: ["True", "False"],
            correct: 0,
            type: "true-false",
            explanation: "True! We use 'a' before consonant sounds and 'an' before vowel sounds."
        },
        {
            question: "'I' should always be capitalized when referring to yourself.",
            options: ["True", "False"],
            correct: 0,
            type: "true-false",
            explanation: "True! The pronoun 'I' is always capitalized in English."
        },
        {
            question: "You can use 'their' as a singular pronoun.",
            options: ["True", "False"],
            correct: 0,
            type: "true-false",
            explanation: "True! 'Their' can be used as a gender-neutral singular pronoun."
        },
        {
            question: "All regular verbs end in '-ed' in the past tense.",
            options: ["True", "False"],
            correct: 0,
            type: "true-false",
            explanation: "True! Regular verbs form their past tense by adding '-ed'."
        },
        {
            question: "The word 'data' can be used as both singular and plural.",
            options: ["True", "False"],
            correct: 0,
            type: "true-false",
            explanation: "True! 'Data' can be treated as singular or plural in modern English."
        },
        {
            question: "In English, adjectives must agree in number with their nouns.",
            options: ["True", "False"],
            correct: 1,
            type: "true-false",
            explanation: "False! Adjectives in English do not change form for singular or plural nouns."
        },
        {
            question: "The word 'fun' can be used as an adjective.",
            options: ["True", "False"],
            correct: 0,
            type: "true-false",
            explanation: "True! While traditionally a noun, 'fun' is now commonly used as an adjective."
        },
        {
            question: "Every sentence must have a verb.",
            options: ["True", "False"],
            correct: 0,
            type: "true-false",
            explanation: "True! A complete sentence must contain at least one verb."
        },
        {
            question: "The word 'whom' is becoming obsolete in modern English.",
            options: ["True", "False"],
            correct: 0,
            type: "true-false",
            explanation: "True! 'Whom' is increasingly rare in modern English, especially in casual speech."
        }
    ],
    'fill-blank': [
        {
            question: "Complete the sentence: 'She ___ studying English for two years.'",
            type: 'fill-blank',
            options: ['has been', 'have been', 'was', 'is'],
            correct: 0
        },
        {
            question: "Fill in: 'If I ___ rich, I would travel the world.'",
            type: 'fill-blank',
            options: ['were', 'was', 'am', 'will be'],
            correct: 0
        },
        {
            question: "Complete: 'By this time tomorrow, I ___ my homework.'",
            type: 'fill-blank',
            options: ['will have finished', 'will finish', 'have finished', 'finished'],
            correct: 0
        },
        {
            question: "Fill in: 'I wish I ___ harder for the test yesterday.'",
            type: 'fill-blank',
            options: ['had studied', 'study', 'studies', 'studying'],
            correct: 0
        },
        {
            question: "Complete: 'The movie ___ by the time we arrived.'",
            type: 'fill-blank',
            options: ['had started', 'has started', 'starts', 'start'],
            correct: 0
        },
        {
            question: "Fill in: 'This time tomorrow, we ___ on the beach.'",
            type: 'fill-blank',
            options: ['will be lying', 'will lie', 'are lying', 'lie'],
            correct: 0
        },
        {
            question: "Complete: 'I ___ to the radio while cooking.'",
            type: 'fill-blank',
            options: ['was listening', 'listen', 'listens', 'listening'],
            correct: 0
        },
        {
            question: "Fill in: 'She ___ in London since 2010.'",
            type: 'fill-blank',
            options: ['has lived', 'live', 'lives', 'living'],
            correct: 0
        },
        {
            question: "Complete: 'By next month, they ___ in their new house.'",
            type: 'fill-blank',
            options: ['will have been living', 'will live', 'live', 'lives'],
            correct: 0
        },
        {
            question: "Fill in: 'If I ___ rich, I would travel the world.'",
            type: 'fill-blank',
            options: ['were', 'was', 'am', 'will be'],
            correct: 0
        }
    ],
    'grammar': [
        {
            question: "Which sentence is grammatically correct?",
            options: [
                "They is going home.",
                "He don't like pizza.",
                "She doesn't like pizza.",
                "We is students."
            ],
            correct: 2,
            type: "multiple-choice"
        },
        {
            question: "Select the correct comparative form: 'This book is ___ than that one.'",
            options: ["more better", "more good", "better", "more best"],
            correct: 2,
            type: "multiple-choice"
        },
        {
            question: "Choose the correct relative pronoun: 'The person ___ called yesterday is my teacher.'",
            options: ["who", "which", "whose", "whom"],
            correct: 0,
            type: "multiple-choice"
        },
        {
            question: "Select the correct passive voice: 'The letter ___.'",
            options: [
                "is being written",
                "is being wrote",
                "is been written",
                "is being write"
            ],
            correct: 0,
            type: "multiple-choice"
        },
        {
            question: "Choose the correct conditional form: 'If I ___ rich, I would buy a house.'",
            options: ["am", "were", "was", "would be"],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "Select the correct verb form: 'Neither of the students ___ the answer.'",
            options: ["know", "knows", "known", "knowing"],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "Which sentence uses parallel structure correctly?",
            options: [
                "She likes swimming, dancing, and to sing.",
                "She likes swimming, dancing, and singing.",
                "She likes to swim, dancing, and sing.",
                "She likes to swim, to dance, and singing."
            ],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "Choose the correct reported speech: 'I am tired,' she said.",
            options: [
                "She said she was tired.",
                "She said she is tired.",
                "She said I was tired.",
                "She said I am tired."
            ],
            correct: 0,
            type: "multiple-choice"
        },
        {
            question: "Select the correct sentence:",
            options: [
                "The news are good.",
                "The news is good.",
                "The news were good.",
                "The news have been good."
            ],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "Choose the correct form: 'Each of the students ___ their own laptop.'",
            options: ["have", "has", "having", "had"],
            correct: 1,
            type: "multiple-choice"
        }
    ]
};

let currentQuiz = null;
let currentQuestion = 0;
let score = 0;
let hasAnswered = false;
let timer = null;
let timeLeft = 40;
let userAnswers = [];
let currentQuizType = null;

// DOM Elements
const quizSelection = document.getElementById('quiz-selection');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const progress = document.getElementById('progress');
const endQuizBtn = document.getElementById('end-quiz-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const chooseNewBtn = document.getElementById('choose-new-btn');
const finalScore = document.getElementById('final-score');
const performanceMessage = document.getElementById('performance-message');
const questionReview = document.getElementById('question-review');

// Update timer circle animation
function updateTimerAnimation(timeLeft) {
    const circle = document.getElementById('timer-circle');
    const totalLength = 220; // Circumference of the circle
    const timePercentage = timeLeft / 40;
    const dashOffset = totalLength * (1 - timePercentage);
    circle.style.strokeDashoffset = dashOffset;
    
    if (timeLeft <= 10) {
        circle.classList.add('warning');
        document.getElementById('timer-display').classList.add('timer-warning');
    } else {
        circle.classList.remove('warning');
        document.getElementById('timer-display').classList.remove('timer-warning');
    }
}

function startTimer() {
    timeLeft = 40;
    updateTimerDisplay();
    updateTimerAnimation(timeLeft);
    
    if (timer) clearInterval(timer);
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        updateTimerAnimation(timeLeft);
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResult();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timer-display').textContent = timeLeft;
}

function updateQuestionCounter() {
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = currentQuiz.length;
}

function resetQuiz() {
    currentQuiz = null;
    currentQuestion = 0;
    score = 0;
    hasAnswered = false;
    userAnswers = [];
    if (timer) clearInterval(timer);
    
    quizContainer.classList.add('hide');
    resultContainer.classList.add('hide');
    quizSelection.classList.remove('hide');
}

function startQuiz(type) {
    currentQuizType = type;
    currentQuiz = quizData[type];
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    
    quizSelection.classList.add('hide');
    quizContainer.classList.remove('hide');
    updateQuestionCounter();
    startTimer();
    showQuestion();
}

// Modify try again button to restart same quiz type
document.getElementById('try-again-btn').addEventListener('click', () => {
    if (currentQuizType) {
        startQuiz(currentQuizType);
    }
});

// Choose new quiz button goes back to quiz selection
document.getElementById('choose-new-btn').addEventListener('click', resetQuiz);

// End quiz button shows results
document.getElementById('end-quiz-btn').addEventListener('click', showResult);

function showQuestion() {
    const questionData = currentQuiz[currentQuestion];
    questionElement.textContent = questionData.question;
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => checkAnswer(index, button));
        optionsContainer.appendChild(button);
    });
    
    updateQuestionCounter();
}

function checkAnswer(selectedIndex, selectedButton) {
    if (hasAnswered) return;
    
    hasAnswered = true;
    const correct = currentQuiz[currentQuestion].correct === selectedIndex;
    userAnswers[currentQuestion] = selectedIndex;
    
    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
        optionsContainer.children[currentQuiz[currentQuestion].correct].classList.add('correct');
    }
    
    if (timeLeft > 0) {
        setTimeout(moveToNextQuestion, 1500);
    }
}

function moveToNextQuestion() {
    if (!hasAnswered) {
        userAnswers[currentQuestion] = undefined;
    }
    
    currentQuestion++;
    hasAnswered = false;
    
    if (currentQuestion < currentQuiz.length && timeLeft > 0) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    if (timer) clearInterval(timer);
    quizContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    
    const percentage = (score / currentQuiz.length) * 100;
    finalScore.textContent = `Your Score: ${score}/${currentQuiz.length} (${percentage.toFixed(1)}%)`;
    
    // Add performance message
    if (percentage >= 90) {
        performanceMessage.textContent = "Excellent! You've mastered this topic!";
    } else if (percentage >= 70) {
        performanceMessage.textContent = "Good job! Keep practicing to improve further.";
    } else if (percentage >= 50) {
        performanceMessage.textContent = "Not bad! More practice will help you improve.";
    } else {
        performanceMessage.textContent = "Keep practicing! You'll get better with time.";
    }

    // Create question review
    questionReview.innerHTML = '<h3>Question Review:</h3>';
    
    currentQuiz.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'question-review-item';
        
        // Add correct/wrong indicator
        const isCorrect = userAnswers[index] === question.correct;
        reviewItem.classList.add(isCorrect ? 'correct' : 'wrong');
        
        // Question number and text
        const questionText = document.createElement('p');
        questionText.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.question}`;
        reviewItem.appendChild(questionText);
        
        // User's answer and correct answer
        const answerText = document.createElement('p');
        if (userAnswers[index] === undefined) {
            answerText.textContent = `Time ran out. Correct answer: ${question.options[question.correct]}`;
        } else {
            answerText.innerHTML = `Your answer: ${question.options[userAnswers[index]]}` +
                (isCorrect ? ' ✓' : ` ✗ (Correct: ${question.options[question.correct]})`);
        }
        reviewItem.appendChild(answerText);
        
        questionReview.appendChild(reviewItem);
    });
}

// Event listeners
document.querySelectorAll('.quiz-type').forEach(button => {
    button.addEventListener('click', () => startQuiz(button.dataset.type));
});
