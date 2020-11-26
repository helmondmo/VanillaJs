let userScore = 0;
let  computerScore = 0;

//caching html elements 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')


function convertToWord(choice) {
    if (choice === "r") return "Rock"
    if (choice === "p") return "Paper"
    if (choice === "s") return "Scissors"
}


function win(userChoice, computerChoice) {
 userScore++;
 userScore_span.innerHTML = userScore
 computerScore_span.innerHTML = computerScore
 result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + " , user is the WINNER!"
 document.getElementById(userChoice).classList.add("green-glow")
 setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 1000)

 
}

function lose(userChoice, computerChoice) {
computerScore++
 userScore_span.innerHTML = userScore
 computerScore_span.innerHTML = computerScore
 result_div.innerHTML = convertToWord(userChoice) + " loses  to " + convertToWord(computerChoice) + " ,  computer is the WINNER!"
 document.getElementById(userChoice).classList.add("red-glow")
 setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 1000)
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = convertToWord(userChoice) + " is the same as " + convertToWord(computerChoice) + " , draw!"
    document.getElementById(userChoice).classList.add("amber-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("amber-glow"), 1000)
}



function getComputerChoice(){
    const choices = ["r", "p", "s"]
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber]
}


function game(userChoice){
 const computerChoice = getComputerChoice()
switch(userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice)
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice)
        break;
    case "rr":
    case "pp":
    case "ss":
       draw(userChoice, computerChoice)
        break;
}
}
  



//adding event listeners 
function main () {
    rock_div.addEventListener('click', () => game("r"))
    paper_div.addEventListener('click', () => game("p"))
    scissors_div.addEventListener('click',() => game("s"))
}

main ()
