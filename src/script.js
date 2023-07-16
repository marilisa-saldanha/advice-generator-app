const adviceId = document.getElementById('adviceId');
const adviceContent = document.getElementById('advice');
const diceButton = document.getElementById('diceBtn');

diceButton.addEventListener('click', searchAdvice);

async function searchAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice');
  const {slip:{id, advice}} = await res.json();
  adviceId.innerText = id;
  adviceContent.innerText = advice;
}

