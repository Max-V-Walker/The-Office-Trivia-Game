// Assign variables to html elements & questions array
let questionContainer = document.getElementById("questionContainer");
let nextQuestionButton = document.getElementById("nextQuestionButton");
let updateScore = document.getElementById("score");

let groupButtons = document.querySelectorAll(".optionButtons");
let answerButton1 = document.querySelector("#answerButton1");
let answerButton2 = document.querySelector("#answerButton2");
let answerButton3 = document.querySelector("#answerButton3");
let answerButton4 = document.querySelector("#answerButton4");

const resultsBtn = document.getElementById('resultsBtn');
const resultsModal = document.getElementById('resultsModal');
const h2 = document.getElementById('h2');
const secondH2 = document.getElementById('secondH2');


const questions = [
    {
        question: "What is the ratio of Stanley Nickels to Schrute Bucks?",
        options: ["Ponies to zebras", "Unicorns to leprechauns", "Santa claus to the Tooth Fairy", "Rainbows to unicorns"],
        answer: "Unicorns to leprechauns"
    },
    {
        question: "What strain of marijuana did Creed say during Dwight's investigation?",
        options: ["Northern Lights, Cannabis Sativa", "Northern Lights, Cannabis Indica", "Purple Haze, Cannabis Sativa", "Hindu Kush, Cannabis Indica"],
        answer: "Northern Lights, Cannabis Indica"
    },
    {
        question: "What game does Angela tell Pam that she likes to play in the office?",
        options: ["Jim Ball", "Pam Pong", "Cat Charades", "Michael Monopoly"],
        answer: "Pam Pong"
    },
    {
        question: "What was the name of the show that Michael was on as a kid?",
        options: ["Puppet Street", "Funtown", "Fun Run", "Fundle Bundle"],
        answer: "Fundle Bundle"
    },
    {
        question: "What kind of candy bar did Angela get from the vending machine for her and Dwight?",
        options: ["PayDay", "Almond Joy", "Baby Ruth", "Snickers"],
        answer: "Baby Ruth"
    },
    {
        question: "What word did Dwight have taped to his forehead in the 'Diversity Day' episode?",
        options: ["Asian", "Black", "Jewish", "Indian"],
        answer: "Asian"
    },
    {
        question: "What's the name of the porcupine that quilled Dwight?",
        options: ["Henry", "Lizzy", "Henrietta", "Olivia"],
        answer: "Henrietta"
    },
    {
        question: "According to David Wallace, how much did the CPR dummy cost?",
        options: ["$2,500", "$3,000", "$3,500", "$5,300"],
        answer: "$3,500"
    },
    {
        question: "Fill in the bank: 'Fool me once, strike one. But fool me twice .. strike ___.'",
        options: ["One", "Two", "Three", "Four"],
        answer: "Three"
    },
    {
        question: "What brand is Michael wearing on the day he accidentally wore a woman's suit?",
        options: ["MISSterious", "MISStery", "Sass Wear", "MISSter"],
        answer: "MISSterious"
    },
    {
        question: "In the season finale, what does Meredith reveal that she's been persuing, that was never shown on camera?",
        options: ["Graphic Design", "PH.D in School Psychology", "Addiction Counselor", "Bachelors in Customer Relations"],
        answer: "PH.D in School Psychology"
    },
    {
        question: "What is Phyllis's perfume made from?",
        options: ["Real Oak", "Cedar", "Real Pine", "Sandalwood"],
        answer: "Real Pine"
    },
    {
        question: "What is Kelly H's middle name?",
        options: ["Gary", "Rajnigandha", "Erin", "AAron"],
        answer: "Erin"
    },
    {
        question: "When Phyllis suggests that Michael go out with her friend, Sandy, who's a professional softball player, what's one of the questions he asks about her?",
        options: ["Is she beautiful?", "Could we share a rowboat?", "What's her shoe size?", "How tall is she?"],
        answer: "Could we share a rowboat?"
    },
    {
        question: "Who has two thumbs and hates Todd Packer?",
        options: ["Michael", "Oscar", "Jim", "Stanley"],
        answer: "Jim"
    },
]

// All the functions

//global varables
let q = 0;
let currentQuestionAnswered = false

function setQuestion() {
  questionContainer.innerText = questions[q].question;
  answerButton1.innerText = questions[q].options[0];
  answerButton2.innerText = questions[q].options[1];
  answerButton3.innerText = questions[q].options[2];
  answerButton4.innerText = questions[q].options[3];

  currentQuestionAnswered = false

  answerButton1.style.background="white"
  answerButton2.style.background="white"
  answerButton3.style.background="white"
  answerButton4.style.background="white"
}

let score = 0
updateScore.innerHTML = `Score: ${score}`

function validate(e) {
    if(!currentQuestionAnswered){
        if(e.target.innerText === questions[q].answer){
            score = score + 5
            updateScore.innerHTML = `Score: ${score}`
            e.target.style.background="#00FF00";
        } else{
            e.target.style.background="#FF4D50";
        }
    }

    if(!currentQuestionAnswered) q++;
    currentQuestionAnswered = true

    if(q === 15){
        nextQuestionButton.style.display="none";
        resultsBtn.style.display = 'block';
    }
}

// Create event listeners
window.addEventListener("load", setQuestion)
nextQuestionButton.addEventListener("click", setQuestion)

// Looping through groupButtons array, adding event listener & calling validate function for each index.
groupButtons.forEach(button => {
    button.addEventListener("click", validate)
})

resultsBtn.addEventListener('click', displayResults)
function displayResults() {
    resultsModal.style.display = 'block';
    h2.innerText=`Congratulations! Your final score is ${score}!`;
    console.log(score)

    if(score <= 15){
        scoreResult = "Did you even watch The Office?"
    } else if (score >= 20 && score <= 30){
        scoreResult = "We think you may need to watch the series another few times.."
    } else if (score >= 35 && score <= 45){
        scoreResult = "You're on your way to being a true Office fan!"
    } else if (score >= 50 && score <= 60){
        scoreResult = "We can tell you've re-watched the series many times!"
    } else {
        scoreResult = "Wow, you're an Office pro!!"
    }
    secondH2.innerText = `${scoreResult}`
}