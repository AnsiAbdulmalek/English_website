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
let questions = [];
let hasAnswered = false;

// DOM Elements
const quizSelection = document.getElementById('quiz-selection');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const progressBar = document.getElementById('progress');
const endQuizBtn = document.getElementById('end-quiz-btn');
const newQuizBtn = document.getElementById('new-quiz-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const chooseNewBtn = document.getElementById('choose-new-btn');
const hintContainer = document.getElementById('hint-container');
const possibleAnswers = document.getElementById('possible-answers');

// Initialize quiz type selection
document.querySelectorAll('.quiz-type').forEach(button => {
    button.addEventListener('click', () => {
        const type = button.getAttribute('data-type');
        startQuiz(type);
    });
});

// Quiz control buttons
endQuizBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to end this quiz? Your progress will be lost.')) {
        showResult();
    }
});

tryAgainBtn.addEventListener('click', () => {
    startQuiz(currentQuiz);
});

chooseNewBtn.addEventListener('click', () => {
    resetQuiz();
});

function resetQuiz() {
    quizContainer.classList.add('hide');
    resultContainer.classList.add('hide');
    quizSelection.classList.remove('hide');
    currentQuiz = null;
    currentQuestion = 0;
    score = 0;
}

function startQuiz(type) {
    currentQuiz = type;
    currentQuestion = 0;
    score = 0;
    questions = quizData[type];
    
    quizSelection.classList.add('hide');
    quizContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.innerHTML = question.question;
    optionsContainer.innerHTML = '';
    hasAnswered = false;
    nextButton.classList.add('hide');

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerHTML = option;
        button.classList.add('option');
        button.addEventListener('click', () => {
            if (!hasAnswered) {
                checkAnswer(index, button);
            }
        });
        optionsContainer.appendChild(button);
    });

    updateProgress();
}

function checkAnswer(selectedIndex, selectedButton) {
    if (hasAnswered) return;
    hasAnswered = true;

    const question = questions[currentQuestion];
    const isCorrect = selectedIndex === question.correct;

    // Disable all options
    const allOptions = optionsContainer.querySelectorAll('.option');
    allOptions.forEach(option => {
        option.disabled = true;
        option.classList.add('disabled');
    });

    // Mark selected answer
    selectedButton.classList.add(isCorrect ? 'correct' : 'wrong');
    
    if (isCorrect) {
        score++;
    }

    nextButton.classList.remove('hide');
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

nextButton.addEventListener('click', () => {
    if (!hasAnswered) return;
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    
    const percentage = (score / questions.length) * 100;
    const resultMessage = `You scored ${score} out of ${questions.length} (${percentage.toFixed(1)}%)`;
    
    document.getElementById('final-score').textContent = resultMessage;
}
