window.addEventListener('load', init);

//Available Lavels
const levels = {
    easy:5,
    medium:3,
    hard:2
};
const currentLevel = levels.easy;


// Globals
let time =currentLevel;
let score = 0;
let isPlaying;

// Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = ['hat', 'river', 'book', 'good', 'statue', 'stubborn', 'joke', 'runaway', 'revolver', 'siblings', 'investigate', 'sympton', 'space', 'horrendous'];

// Initialize Game
function init(){
    // Showumber of seconds
    seconds.innerHTML =currentLevel;
    // Load word from Array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input',startMatch);
    // Call countDown every Second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus);
}

// Start Match
function startMatch(){
if (matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
}
    if(score === -1){
       scoreDisplay.innerHTML = 0;
       }else{
       scoreDisplay.innerHTML = score;
       }
}

//Match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

// Pick and show random word
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

// CountDown Timer
function countdown(){
    // Make sure time is not ran out
    if(time > 0){
        time--;
       }else if(time === 0){
           isPlaying = false;
       }
    // Show Time
    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}