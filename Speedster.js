let time=6;
let score=0;
let isplaying;

// DOM Selectors
const inputword = document.querySelector("#input-word")
const currentword = document.querySelector("#current-word")
const timeDispaly = document.querySelector("#time")
const scoreDispaly = document.querySelector("#score")
const message = document.querySelector("#message")
const button = document.querySelector("#btn")
// Array of Words
const words = [
    'Hat',
    'River',
    'Lucky',
    'Statue',
    'Stubborn',
    'Cocktail',
    'Runaway',
    'Joke',
    'Developer',
    'Establishment',
    'Hero',
    'Javascript',
    'Nutrition',
    'Revolver',
    'Echo',
    'Siblings',
    'Investigate',
    'Horrendous',
    'Symptom',
    'Laughter',
    'Magic',
    'Master',
    'Space',
    'Defintion'
    ];

// Functionality
    function showWord(words){
    const randomIdx = Math.floor(Math.random()*words.length)
    const word = words[randomIdx]
    currentword.innerHTML= word
    }
    function matchword(){
        if(inputword.value===currentword.innerHTML){
            message.innerHTML = "Correct!!!"
            return true
        }else{
            message.innerHTML = "Incorrect!!!"
            return false
        }
    }
    function startMatch(){
        if(matchword()){
            time=6
            score++
            showWord(words)
            inputword.value=""
            isplaying = true
        }else{
            isplaying = false
        }
        scoreDispaly.innerHTML = score
    }
    function checkstatus(){
        if(!isplaying && time==0){
            message.innerHTML="Game Over!!!"
        }
    }
    function countdown(){
        if(time>0)
            time--;
            else if(time==0)
            timeDispaly= false
            timeDispaly.innerHTML=time 
    }
// Initialise The Game
function init(){
    inputword.focus();
showWord(words)
inputword.addEventListener("input",startMatch)
setInterval(countdown,1000)
setInterval(checkstatus,50)
}

// Event
button.addEventListener("click",init)