const questions = [
    {
        question: "What is one way to provide education in areas with no access to schools?",
        choices: ["Mobile Schools", "Online Courses", "Private Tutoring", "Home Schooling"],
        correctAnswer: "Mobile Schools"
    },
    {
        question: "How can local teachers be supported?",
        choices: ["By providing free resources", "By training local educators", "By offering scholarships", "By building infrastructure"],
        correctAnswer: "By training local educators"
    },
    {
        question: "What is an effective way to distribute educational materials?",
        choices: ["Selling them", "Providing free resources", "Renting them", "Donating to libraries"],
        correctAnswer: "Providing free resources"
    },
    {
        question: "What can positively impact students' retention and future academic success?",
        choices: ["Financial Support", "Community Involvement", "Collaboration", "Building Infrastructure"],
        correctAnswer: "Financial Support"
    },
    {
        question: "What is a key factor in improving educational infrastructure?",
        choices: ["Community Involvement", "Financial Support", "Collaboration", "Building and Improving Infrastructure"],
        correctAnswer: "Building and Improving Infrastructure"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => checkAnswer(choice, li));
        choicesElement.appendChild(li);
    });
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === questions.length - 1;
}

function checkAnswer(selectedChoice, li) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.correctAnswer) {
        score++;
        li.classList.add("correct");
    } else {
        li.classList.add("incorrect");
    }
    resultElement.textContent = `Score: ${score}`;
    disableChoices();
}

function disableChoices() {
    const choices = document.querySelectorAll("#choices li");
    choices.forEach(choice => {
        choice.style.pointerEvents = "none";
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        resultElement.textContent = `Quiz Over! Your final score is ${score}/${questions.length}`;
        nextButton.disabled = true;
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

nextButton.addEventListener("click", nextQuestion);
prevButton.addEventListener("click", prevQuestion);

displayQuestion();