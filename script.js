const quitions = [
  {
    Quition: "What Is HTML ? ",
    Answers: [
      { Text: "High Text Machine Language", correct: false },
      { Text: "Hyper Transfer Markup Language", correct: false },
      { Text: "HyperText Markup Language", correct: true },
      { Text: "Hyper Tool Markup Language", correct: false },
    ],
  },

  {
    Quition: "What Is CSS ? ",
    Answers: [
      { Text: " Coscading Style Sheet", correct: true },
      { Text: "Computer Style Sheets", correct: false },
      { Text: "Creative Style System", correct: false },
      { Text: "Cascading Sheet System", correct: false },
    ],
  },

  {
    Quition: "Which JavaScript keyword is used to declare a variable? ",
    Answers: [
      { Text: "create", correct: false },
      { Text: "define", correct: false },
      { Text: "variable", correct: false },
      { Text: "let", correct: true },
    ],
  },

  {
    Quition: "React is a ______?",
    Answers: [
      { Text: "Programming Language", correct: false },
      { Text: "Framework", correct: false },
      { Text: "Database", correct: false },
      { Text: "JavaScript Library", correct: true },
    ],
  },

  {
    Quition: "What is JSX?",
    Answers: [
      { Text: "Java Syntax Extension", correct: false },
      { Text: "JSON XML Syntax", correct: false },
      { Text: "JavaScript XML", correct: true },
      { Text: "JavaScript Extension", correct: false },
    ],
  },

  {
    Quition: "Which command creates a React app using Vite?",
    Answers: [
      { Text: "npm install react", correct: false },
      { Text: "npm create vite@latest", correct: true },
      { Text: "react new app", correct: false },
      { Text: "create-react-app", correct: false },
    ],
  },
];

const QuitionsElement = document.getElementById("quition");
const Answerbuttons = document.getElementById("Answers-Button");
const NextButton = document.getElementById("nextbtn");

let currentQutionIndex = 0;
let score = 0;

function StartQuiz() {
  currentQutionIndex = 0;
  score = 0;
  NextButton.innerHTML = "Next";
  showQuitions();
}

function showQuitions() {
  resetState();
  let currentQution = quitions[currentQutionIndex];
  let QuitionNo = currentQutionIndex + 1;
  QuitionsElement.innerHTML = QuitionNo + "." + currentQution.Quition;

  currentQution.Answers.forEach((Answer) => {
    const Button = document.createElement("button");
    Button.innerHTML = Answer.Text;
    Button.classList.add("btn");
    Answerbuttons.appendChild(Button);
    if (Answer.correct) {
      Button.dataset.correct = Answer.correct;
    }
    Button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  NextButton.style.display = "none";
  while (Answerbuttons.firstChild) {
    Answerbuttons.removeChild(Answerbuttons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(Answerbuttons.children).forEach((Button) => {
    if (Button.dataset.correct === "true") {
      Button.classList.add("correct");
    }
    Button.disabled = true;
  });
  NextButton.style.display = "block";
}
function showScore() {
  resetState();
  QuitionsElement.innerHTML = `You Scored ${score} Out of ${quitions.length}!`;
  NextButton.innerHTML = "Play Again";
  NextButton.style.display = "block";
}

function handleNextBtn() {
  currentQutionIndex++;
  if (currentQutionIndex < quitions.length) {
    showQuitions();
  } else {
    showScore();
  }
}

NextButton.addEventListener("click", () => {
  if (currentQutionIndex < quitions.length) {
    handleNextBtn();
  } else {
    StartQuiz();
  }
});
StartQuiz();
