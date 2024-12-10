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
            correct: "has been",
            type: "fill-blank",
            hint: "Use present perfect continuous tense"
        },
        {
            question: "Fill in the blank: 'If it ___ tomorrow, I will stay home.'",
            correct: "rains",
            type: "fill-blank",
            hint: "Use simple present tense in the if-clause"
        },
        {
            question: "Complete: 'By this time next year, I ___ my degree.'",
            correct: "will have finished",
            type: "fill-blank",
            hint: "Use future perfect tense"
        },
        {
            question: "Fill in: 'I wish I ___ harder for the test yesterday.'",
            correct: "had studied",
            type: "fill-blank",
            hint: "Use past perfect tense after 'wish' for past regret"
        },
        {
            question: "Complete: 'The movie ___ by the time we arrived.'",
            correct: "had started",
            type: "fill-blank",
            hint: "Use past perfect tense for an action completed before another past action"
        },
        {
            question: "Fill in: 'This time tomorrow, we ___ on the beach.'",
            correct: "will be lying",
            type: "fill-blank",
            hint: "Use future continuous tense"
        },
        {
            question: "Complete: 'I ___ to the radio while cooking.'",
            correct: "was listening",
            type: "fill-blank",
            hint: "Use past continuous tense"
        },
        {
            question: "Fill in: 'She ___ in London since 2010.'",
            correct: "has lived",
            type: "fill-blank",
            hint: "Use present perfect tense"
        },
        {
            question: "Complete: 'By next month, they ___ in their new house.'",
            correct: "will have been living",
            type: "fill-blank",
            hint: "Use future perfect continuous tense"
        },
        {
            question: "Fill in: 'If I ___ rich, I would travel the world.'",
            correct: "were",
            type: "fill-blank",
            hint: "Use past subjunctive for hypothetical situation"
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

// DOM Elements
const quizSelection = document.getElementById('quiz-selection');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const progressBar = document.getElementById('progress');
const tryAgainButton = document.getElementById('try-again-btn');
const homeButton = document.getElementById('home-btn');

// Add event listeners to quiz type selection
document.querySelectorAll('.quiz-type').forEach(type => {
    type.addEventListener('click', () => {
        const quizType = type.dataset.type;
        startQuiz(quizType);
    });
});

function startQuiz(type) {
    currentQuiz = type;
    questions = quizData[type];
    currentQuestion = 0;
    score = 0;
    
    quizSelection.classList.add('hide');
    quizContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    
    showQuestion();
    updateProgress();
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    
    if (question.type === 'fill-blank') {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-blank-input';
        input.placeholder = 'Type your answer...';
        
        const hint = document.createElement('p');
        hint.className = 'hint';
        hint.textContent = `Hint: ${question.hint}`;
        
        optionsContainer.appendChild(input);
        optionsContainer.appendChild(hint);
    } else {
        question.options.forEach((option, index) => {
            const button = document.createElement('div');
            button.className = 'option';
            button.textContent = option;
            button.addEventListener('click', () => selectAnswer(index));
            optionsContainer.appendChild(button);
        });
    }
    
    nextButton.style.display = 'none';
}

function selectAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const options = optionsContainer.children;
    
    if (question.type === 'fill-blank') {
        const input = options[0];
        const userAnswer = input.value.trim().toLowerCase();
        const correct = question.correct.toLowerCase();
        
        if (userAnswer === correct) {
            input.style.borderBottomColor = '#34a853';
            score++;
        } else {
            input.style.borderBottomColor = '#ea4335';
        }
    } else {
        for (let i = 0; i < options.length; i++) {
            if (i === selectedIndex) {
                if (i === question.correct) {
                    options[i].classList.add('correct');
                    score++;
                } else {
                    options[i].classList.add('wrong');
                }
            }
        }
    }
    
    nextButton.style.display = 'block';
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResult() {
    quizContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
}

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        updateProgress();
    } else {
        showResult();
    }
});

tryAgainButton.addEventListener('click', () => {
    startQuiz(currentQuiz);
});

homeButton.addEventListener('click', () => {
    quizSelection.classList.remove('hide');
    resultContainer.classList.add('hide');
    currentQuiz = null;
});
