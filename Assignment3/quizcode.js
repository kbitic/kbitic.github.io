const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', ()=> {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  startButton.classList.add('hide')
  shuffleQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
  {
    question: 'Javascript files should be separate from the HTML',
    answers: [
      { text: 'True', correct: true},
      { text: 'False', correct: false}
    ]
  },

  {
    question: 'How do you declare a variable?',
    answers: [
      { text: 'create VARIABLE is  5', correct: false},
      { text: 'var x = 3', correct: true}
    ]
  },

  {
    question: 'The <body> tag comes before the <head> tag.',
    answers: [
      { text: 'True', correct: false},
      { text: 'False', correct: true}
    ]
  },

  {
    question: 'How do you declare a button?',
    answers: [
      { text: '<button> Button text </button>', correct: true},
      { text: 'var button = clickable', correct: false}
    ]
  },

  {
    question: 'To code successfully, the correct syntax must be used.',
    answers: [
      { text: 'True', correct: true},
      { text: 'False', correct: false}
    ]
  },

  {
    question: 'Created web pages can only be one color.',
    answers: [
      { text: 'True', correct: false},
      { text: 'False', correct: true}
    ]
  },

  {
    question: 'Learning HTML skills is important.',
    answers: [
      { text: 'True', correct: true},
      { text: 'False', correct: false}
    ]
  },

  {
    question: 'Anyone can learn how to program.',
    answers: [
      { text: 'True', correct: true},
      { text: 'False', correct: false}
    ]
  },

  {
    question: '',
    answers: [
      { text: 'True', correct: true},
      { text: 'False', correct: false}
    ]
  },

  {
    question: 'How do you declare a container?',
    answers: [
      { text: '<declare> Box </declare>', correct: false},
      { text: '<div class="container">', correct: true}
    ]
  },

  {
    question: 'Organization is key when working on multiple projects.',
    answers: [
      { text: 'True', correct: true},
      { text: 'False', correct: false}
    ]
  },

  {
    question: 'How many required tags are there in HTML?',
    answers: [
      { text: '4', correct: true},
      { text: '7', correct: false}
    ]
  },

  {
    question: 'How do we link a CSS stylesheet?',
    answers: [
      { text: '<link href="style.css" rel="stylesheet">', correct: true},
      { text: '<script href="style.css" rel = "stylesheet">', correct: false}
    ]
  },

  {
    question: 'The symbol for a class selector is &',
    answers: [
      { text: 'True', correct: false},
      { text: 'False', correct: true}
    ]
  },

  {
    question: 'Inline style has the highest priority among CSS.',
    answers: [
      { text: 'True', correct: true},
      { text: 'False', correct: false}
    ]
  },

  {
    question: 'How many types of CSS are there?',
    answers: [
      { text: '1', correct: false},
      { text: '3', correct: true}
    ]
  },

  {
    question: 'h3 is larger compared to h1.',
    answers: [
      { text: 'True', correct: false},
      { text: 'False', correct: true}
    ]
  },

  {
    question: 'How do you close a HTML tag?',
    answers: [
      { text: '</body>', correct: true},
      { text: 'close body.', correct: false}
    ]
  },

  {
    question: 'How do you declare the head tag?',
    answers: [
      { text: 'create head.', correct: false},
      { text: '<head>', correct: True}
    ]
  },

  {
    question: 'You can inspect any web page using the inspect button',
    answers: [
      { text: 'True', correct: true},
      { text: 'False', correct: false}
    ]
  },

]
