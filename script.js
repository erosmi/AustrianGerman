const cards = [
  { prompt: 'Apricot', answer: 'Marille', accepted: ['marille', 'marillen'], hint: 'A fruit you’ll find in a Marillenknödel.' },
  { prompt: 'Tomato', answer: 'Paradeiser', accepted: ['paradeiser', 'paradeis'], hint: 'In Austria, it is not usually called a Tomate.' },
  { prompt: 'Potato', answer: 'Erdapfel', accepted: ['erdapfel', 'erdäpfel', 'erdapfel', 'erdäpfel'], hint: 'Literally, an “earth apple.”' },
  { prompt: 'Shopping bag', answer: 'Sackerl', accepted: ['sackerl'], hint: 'You might be asked whether you need one at the checkout.' },
  { prompt: 'Bread roll', answer: 'Semmel', accepted: ['semmel', 'semmeln'], hint: 'A classic breakfast roll.' },
  { prompt: 'Cottage cheese / quark', answer: 'Topfen', accepted: ['topfen'], hint: 'A fresh dairy ingredient used in sweet and savory dishes.' },
  { prompt: 'This year', answer: 'Heuer', accepted: ['heuer'], hint: 'A handy word for “this year.”' },
  { prompt: 'January', answer: 'Jänner', accepted: ['jänner', 'jaenner', 'janner'], hint: 'The Austrian name for the first month.' },
  { prompt: 'Hello (formal)', answer: 'Grüß Gott', accepted: ['grüß gott', 'gruss gott', 'grussgott', 'grüßgott'], hint: 'A common greeting in shops and with people you don’t know.' },
  { prompt: 'Hi / bye (informal)', answer: 'Servus', accepted: ['servus'], hint: 'A friendly greeting that works when arriving or leaving.' }
];

const form = document.querySelector('#answer-form');
const input = document.querySelector('#answer');
const prompt = document.querySelector('#prompt');
const hint = document.querySelector('#prompt-hint');
const feedback = document.querySelector('#feedback');
const reveal = document.querySelector('#answer-reveal');
const correctAnswer = document.querySelector('#correct-answer');
const nextButton = document.querySelector('#next-card');
const giveUpButton = document.querySelector('#give-up');
const cardCount = document.querySelector('#card-count');
const progress = document.querySelector('[role="progressbar"]');
const progressFill = document.querySelector('.progress-fill');
const correctCount = document.querySelector('#correct-count');
const missedCount = document.querySelector('#missed-count');

let currentIndex = 0;
let correctTotal = 0;
let missedTotal = 0;
let answered = false;

function normalize(value) {
  return value
    .trim()
    .toLocaleLowerCase('de-AT')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.,!?;:'"“”]/g, '')
    .replace(/\s+/g, ' ');
}

function showCard() {
  const card = cards[currentIndex];
  prompt.textContent = card.prompt;
  hint.textContent = card.hint;
  cardCount.textContent = String(currentIndex + 1).padStart(2, '0');
  progressFill.style.width = `${((currentIndex + 1) / cards.length) * 100}%`;
  progress.setAttribute('aria-valuenow', String(currentIndex + 1));
  input.value = '';
  input.disabled = false;
  feedback.textContent = '';
  feedback.className = 'feedback';
  reveal.hidden = true;
  nextButton.disabled = true;
  giveUpButton.disabled = false;
  answered = false;
  input.focus();
}

function showAnswer(wasCorrect) {
  const card = cards[currentIndex];
  answered = true;
  correctAnswer.textContent = card.answer;
  reveal.hidden = false;
  input.disabled = true;
  nextButton.disabled = false;
  giveUpButton.disabled = true;
  if (wasCorrect) {
    correctTotal += 1;
    feedback.textContent = 'That’s it! Nice work.';
    feedback.classList.add('is-correct');
  } else {
    missedTotal += 1;
    feedback.textContent = `Not quite. The answer is ${card.answer}.`;
    feedback.classList.add('is-incorrect');
  }
  correctCount.textContent = String(correctTotal);
  missedCount.textContent = String(missedTotal);
  nextButton.focus();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (answered) return;
  if (!input.value.trim()) {
    feedback.textContent = 'Type an answer first, or reveal the word.';
    feedback.classList.add('is-incorrect');
    input.focus();
    return;
  }

  const card = cards[currentIndex];
  const guess = normalize(input.value);
  const accepted = card.accepted.map(normalize);
  showAnswer(accepted.includes(guess));
});

giveUpButton.addEventListener('click', () => {
  if (!answered) showAnswer(false);
});

nextButton.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex += 1;
    showCard();
    return;
  }

  currentIndex = 0;
  showCard();
  feedback.textContent = `Deck complete! ${correctTotal} correct, ${missedTotal} to practice. Starting again.`;
  feedback.className = 'feedback is-correct';
});

showCard();