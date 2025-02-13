const words = ['WATER', 'FLOWER', 'RAIN', 'BIRD', 'BEAR', 'GHOST', 'PINK', 'KIWI', 'COIN', 'RING'];
let selectedWord = '';
let hiddenWord = [];
let tries = 0;
let mistakes = 0;
let guessedLetters = [];

function getRandomWord() {
	selectedWord = words[Math.floor(Math.random() * words.length)];
	hiddenWord = Array(selectedWord.length).fill('_');
	guessedLetters = [];
	tries = 0;
	mistakes = 0;
	game();
}

function game() {
	document.getElementById('hiddenSpace').textContent = hiddenWord.join(' ');
	document.getElementById('tries').textContent = `Tries: ${tries}`;
	document.getElementById('mistakes').textContent = `Mistakes: ${mistakes}`;
	document.getElementById('result').textContent = '';
	document.getElementById('input').value = '';
}

function checkLetter() {
	const input = document.getElementById('input').value.toUpperCase();
	if (input.length === 0 || guessedLetters.includes(input)) return;

	guessedLetters.push(input);

	if (selectedWord.includes(input)) {
		for (let i = 0; i < selectedWord.length; i++) {
			if (selectedWord[i] === input) {
				hiddenWord[i] = input;
			}
		}
	} else {
		mistakes++;
	}

	tries++;

	if (hiddenWord.join('') === selectedWord) {
		document.getElementById('result').textContent = '🎉 Ganaste!';
		setTimeout(getRandomWord, 2000);
	} else if (mistakes === 6) {
		document.getElementById('result').textContent = '💀 Game Over';
		setTimeout(getRandomWord, 2000);
	}

	game();
}

document.getElementById('verifybutton').addEventListener('click', checkLetter);
document.getElementById('randombutton').addEventListener('click', getRandomWord);
document.getElementById('input').addEventListener('keypress', function (e) {
	if (e.key === 'Enter') checkLetter();
});

getRandomWord();
