const words = ['WATER', 'FLOWER', 'RAIN', 'BIRD', 'BEAR', 'GHOST', 'PINK', 'KIWI', 'COIN', 'RING']
let currentLetter = ['']
let tries = 0
let mistakes = 0


function position(words) {
    return Math.floor(Math.random() * words.length);
}
  

function newLetter() {
    let NewLetter = words[position(11)];
    currentLetter.push(NewLetter) 
	document.getElementById('hiddenSpace').textContent = currentLetter;
	document.getElementById('input').value = '';
	document.getElementById('result').textContent = '';
}

function verifyLetter() {
	const input = document.getElementById('input').value.toUpperCase();
	const result = document.getElementById('result');

	if (filterItems(words, input)) {
		result.textContent = 'Ganaste';
		tries++;
		document.getElementById('tries').textContent = tries;
		setTimeout(newLetter, 1000);
	} else if{
		result.textContent = 'Fallaste';
		mistakes++;
		document.getElementById('mistakes').textContent = mistakes;
	} 
}
    
function gameover(mistakes) {
    if (mistakes === 6){
        result.textContent = 'Game Over';}
}

document.getElementById('input').addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		checkWord();
	}
});


