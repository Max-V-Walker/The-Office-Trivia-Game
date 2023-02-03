const allQuestions = [
    {
        difficulty: 'Beginner',
        question: "What does Michael's cup say?",
        options: ["Boss Of All Time", "World's Best Boss", "My Employees Love Me", "Best Boss Ever"],
        answer: "World's Best Boss",
        image: "images/bQuestion1.jpg"
    },
    {
        difficulty: 'Beginner',
        question: "Which character does Jim end up with?",
        options: ["Pam", "Angela", "Karen", "Holly"],
        answer: "Pam",
        image: "images/bQuestion2.jpg"
    },
    {
        difficulty: 'Beginner',
        question: "Which character does Michael hate?",
        options: ["Ryan", "Toby", "Oscar", "Kevin"],
        answer: "Toby",
        image: "images/bQuestion3.jpg"
    },
    {
        difficulty: 'Beginner',
        question: "Which character works in the warehouse and not the office?",
        options: ["Oscar Martinez", "Ryan Howard", "Bob Vance", "Darryl Philbin"],
        answer: "Darryl Philbin",
        image: "images/bQuestion4.jpg"
    },
    {
        difficulty: 'Beginner',
        question: "What's the name of the paper company everyone works at?",
        options: ["Dunder Mifflin", "Prince Family Paper", "Dundie Mifflin", "The Michael Scott Paper Company"],
        answer: "Dunder Mifflin",
        image: "images/bQuestion5.jpg"
    },
    {
        difficulty: 'Beginner',
        question: "According to Michael, who is the hottest employee in the office?",
        options: ["Pam", "Angela", "Ryan", "Jim"],
        answer: "Ryan",
        image: "images/bQuestion6.jpg"
    },
    {
        difficulty: 'Beginner',
        question: "For Prison Mike, what was the worst thing about jail?",
        options: ["The Dementors", "No Movies", "Bad Food", "Toby"],
        answer: "The Dementors",
        image: "images/bQuestion7.jpg"
    },
    {
        difficulty: 'Beginner',
        question: "What film is Michael working on throughout the show?",
        options: ["Race Against Time", "Bad Guys Finish Last", "Threat Level Midnight", "Get Smart"],
        answer: "Threat Level Midnight",
        image: "images/bQuestion8.jpg"
    },
    {
        difficulty: 'Beginner',
        question: "What college did Andy graduate from?",
        options: ["Yale", "Cornell", "Dartmouth", "MCC"],
        answer: "Cornell",
        image: "images/bQuestion9.jpg"
    },
    {
        difficulty: 'Beginner',
        question: "What is the name of the group of kids that Michael promised to cover their college costs?",
        options: ["Scott's Tots", "Fundle Bundle", "I Wanna Be Like Mike", "Dundies"],
        answer: "Scott's Tots",
        image: "images/bQuestion10.jpg"
    },
    {
        difficulty: 'Intermediate',
        question: "What does Michael pretend to fire Pam over in season 1?",
        options: ["Stealing Post-It notes", "Not answering the phone", "Wearing glasses", "Hanging around Jim too often"],
        answer: "Stealing Post-It notes",
        image: "images/iQuestion1.jpg"
    },
    {
        difficulty: 'Intermediate',
        question: "What is Pam's favorite flavor of yogurt?",
        options: ["Strawberry", "Mixed Berry", "Vanilla", "Oat"],
        answer: "Mixed Berry",
        image: "images/iQuestion2.jpg"
    },
    {
        difficulty: 'Intermediate',
        question: "What brand is Michael wearing on the day he accidentally wore a woman's suit?",
        options: ["MISSterious", "MISStery", "Sass Wear", "MISSter"],
        answer: "MISSterious",
        image: "images/iQuestion3.jpg"
    },
    {
        difficulty: 'Intermediate',
        question: "What is Kelly H's middle name?",
        options: ["Gary", "Rajnigandha", "Erin", "AAron"],
        answer: "Erin",
        image: "images/iQuestion4.jpg"
    },
    {
        difficulty: 'Intermediate',
        question: "What does Michael eat before running the Fun Run Rabies Awareness Marathon?",
        options: ["A Small Pizza", "Fettuccini Alfredo", "Cupcakes", "Chinese"],
        answer: "Fettuccini Alfredo",
        image: "images/iQuestion5.jpg"
    },
    {
        difficulty: 'Intermediate',
        question: "What was the total cost of Jim's Dwight ensemble?",
        options: ["$10", "$7.50", "Free", "$11"],
        answer: "$11",
        image: "images/iQuestion6.jpg"
    },
    {
        difficulty: 'Intermediate',
        question: "What radio station stickers are seen around the office?",
        options: ["Froggy101", "Hot97", "Foggy201", "Z100"],
        answer: "Froggy101",
        image: "images/iQuestion7.jpg"
    },
    {
        difficulty: 'Intermediate',
        question: "Which one of these cats does NOT belong to Angela?",
        options: ["Princess Lady", "Prinkles", "Bandit", "Comstock"],
        answer: "Prinkles",
        image: "images/iQuestion8.jpg"
    },
    {
        difficulty: 'Intermediate',
        question: "How much did Michael's beloved plasma TV cost?",
        options: ["$100", "$500", "$300", "$200"],
        answer: "$200",
        image: "images/iQuestion9.jpg"
    },
    {
        difficulty: 'Intermediate',
        question: "What is Dwight's annual salary at Hotel Hell?",
        options: ["$50,000", "$80,000", "$120,000", "$20/hr"],
        answer: "$80,000",
        image: "images/iQuestion10.jpg"
    },
    {
        difficulty: 'Difficult',
        question: "What strain of marijuana did Creed say during Dwight's investigation?",
        options: ["Northern Lights, Cannabis Sativa", "Northern Lights, Cannabis Indica", "Purple Haze, Cannabis Sativa", "Hindu Kush, Cannabis Indica"],
        answer: "Northern Lights, Cannabis Indica",
        image: "images/dQuestion1.jpg"
    },
    {
        difficulty: 'Difficult',
        question: "What is the ratio of Stanley Nickels to Schrute Bucks?",
        options: ["Ponies to zebras", "Unicorns to leprechauns", "Santa claus to the Tooth Fairy", "Rainbows to unicorns"],
        answer: "Unicorns to leprechauns",
        image: "images/dQuestion2.jpg"
    },
    {
        difficulty: 'Difficult',
        question: "What game does Angela tell Pam that she likes to play in the office?",
        options: ["Jim Ball", "Pam Pong", "Cat Charades", "Michael Monopoly"],
        answer: "Pam Pong",
        image: "images/dQuestion3.jpg"
    },
    {
        difficulty: "Difficult",
        question: "What word did Dwight have taped to his forehead in the 'Diversity Day' episode?",
        options: ["Asian", "Black", "Jewish", "Indian"],
        answer: "Asian",
        image: "images/dQuestion4.jpg"
    },
    {
        difficulty: "Difficult",
        question: "What's the full name listed on Creed's passport'?",
        options: ["William Charles Sullivan", "William Creed Stewart", "William Charles Schneider", "William Charles Smith"],
        answer: "William Charles Schneider",
        image: "images/dQuestion5.jpg"
    },
    {
        difficulty: "Difficult",
        question: "What does Creed keep in his drawer that make him smell like an old man?",
        options: ["Mung Beans", "Cigarettes", "A Dead Bird", "Diapers"],
        answer: "Mung Beans",
        image: "images/dQuestion6.jpg"
    },
    {
        difficulty: "Difficult",
        question: "What kind of sandwich does Michael have a dream about when he's head of Michael Scott Paper Company?",
        options: ["Tunafish and skitttles", "Mayo and black olives", "Peanut butter and tunafish", "Bread and mayo"],
        answer: "Peanut butter and tunafish",
        image: "images/dQuestion7.jpg"
    },
    {
        difficulty: "Difficult",
        question: "What acronym does Creed come up with during his time as manager?",
        options: ["NOBITING", "BOBODDY", "DUNDER", "BOOTOE"],
        answer: "BOBODDY",
        image: "images/dQuestion8.jpg"
    },
    {
        difficulty: "Difficult",
        question: "What's printed on the back of The Knights of the Night shirts?",
        options: ["We're Watching", "Watchers of the Night", "We Are Unarmed", "Knights of the Night"],
        answer: "We Are Unarmed",
        image: "images/dQuestion9.jpg"
    },
    {
        difficulty: "Difficult",
        question: "What kind of candy bar did Angela get from the vending machine for her and Dwight?",
        options: ["PayDay", "Almond Joy", "Baby Ruth", "Snickers"],
        answer: "Baby Ruth",
        image: "images/dQuestion10.jpg"
    },
    {
        difficulty: "Difficult",
        question: "What song is missed during Erin and Gabe's Glee viewing party?",
        options: ["Don't Stop Believing", "Walking On Sunshine", "Highway To Hell", "Blinded By The Light"],
        answer: "Blinded By The Light",
        image: "images/dQuestion11.jpg"
    }
];

const beginnerQuestions = allQuestions.filter(question => question.difficulty === "Beginner")
const intermediateQuestions = allQuestions.filter((question) => question.difficulty === "Intermediate")
const difficultQuestions = allQuestions.filter((question) => question.difficulty === "Difficult")

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// Landing Page Buttons
const playBtn = document.querySelector('.playBtn')
const beginnerBtn = document.querySelector('#beginnerBtn')
const intermediateBtn = document.querySelector('#intermediateBtn')
const difficultBtn = document.querySelector('#difficultBtn')
const setLevelBtns = document.querySelectorAll('.setLevelBtn')

// Game Play Buttons
const answerBtn1 = document.querySelector('#answerBtn1')
const answerBtn2 = document.querySelector('#answerBtn2')
const answerBtn3 = document.querySelector('#answerBtn3')
const answerBtn4 = document.querySelector('#answerBtn4')
const optionBtns = document.querySelectorAll('.optionBtns')
const nextQuestionBtn = document.querySelector('#nextQuestionBtn')
const finalResultsBtn = document.querySelector('#finalResultsBtn')
const playAgainBtn = document.querySelector('#playAgainBtn')
const newNxtBtn = document.querySelector('#updatedNxtBtn')

// Containers
const startSection = document.querySelector('#startSection')
const gameSection = document.querySelector('#gameSection')
const questionContainer = document.querySelector('#questionContainer')
const wrongCorrect = document.querySelector('#wrongCorrect')
const imageContainer = document.querySelector('#imageContainer')
const scoreContainer = document.querySelector('#score')
const finalScore = document.querySelector('#finalScore')
const gameRank = document.querySelector('#gameRank')
const gameSummary = document.querySelector('#gameSummary')
const qResults = document.querySelector('.qResults')

let gameQuestions = [];

// CSS Purposes
const body = document.querySelector('body')

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// Play button
function playGame(){
    playBtn.style.display="none";
    for(let levelBtn of setLevelBtns){
        levelBtn.style.display="inline-block"
    }
}

function setDifficulty(e){
    if(e.target.innerText === 'Beginner'){
        startSection.style.display="none"
        gameSection.style.display="block"
        gameQuestions.push(beginnerQuestions)
    } else if(e.target.innerText === 'Intermediate'){
        startSection.style.display="none"
        gameSection.style.display="block"
        gameQuestions.push(intermediateQuestions)
    } else if(e.target.innerText === 'Difficult'){
        startSection.style.display="none"
        gameSection.style.display="block"
        gameQuestions.push(difficultQuestions)
    }
}

let q = 0

function setQuestion(){
    scoreContainer.innerText = `Score: ${score}`;
    questionContainer.innerText = gameQuestions[0][ranNums[q]].question;
    answerBtn1.innerText = gameQuestions[0][ranNums[q]].options[0];
    answerBtn2.innerText = gameQuestions[0][ranNums[q]].options[1];
    answerBtn3.innerText = gameQuestions[0][ranNums[q]].options[2];
    answerBtn4.innerText = gameQuestions[0][ranNums[q]].options[3];
    
    imageContainer.setAttribute('src', gameQuestions[0][ranNums[q]].image)
    currentQAnswered = false
    
    answerBtn1.style.background="#ffffbf"
    answerBtn2.style.background="#ffffbf"
    answerBtn3.style.background="#ffffbf"
    answerBtn4.style.background="#ffffbf"
    
    body.style.backgroundImage = "url('images/questionsPageBackground.jpg')"
    nextQuestionBtn.style.display="none"
    wrongCorrect.style.display="none"
    imageContainer.style.display="none"
}

function shuffle(numsArr) {
    let i = numsArr.length;
    let j = 0;
    let temp;
    
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        
        // swap randomly chosen element with current element
        temp = numsArr[i];
        numsArr[i] = numsArr[j];
        numsArr[j] = temp;
    }
    return numsArr;
}

// ranNums largest # must be one less than total questions per difficulty. Difficulties must have same amount of questions!
let ranNums = shuffle([0,1,2,3,4,5,6,7,8,9]);
let score = 0

function validate(e) {
    if(!currentQAnswered){
        if(e.target.innerText === gameQuestions[0][ranNums[q]].answer){
            score += 5
            scoreContainer.innerHTML = `Score: ${score}`
            e.target.style.background="#00FF00";
            wrongCorrect.innerText="Correct!"
        } else{
            e.target.style.background="#FF4D50";
            wrongCorrect.innerText="Wrong!"
        }
    }

    qResults.style.display="block"
    wrongCorrect.style.display="block"
    imageContainer.style.display="block"
    nextQuestionBtn.style.display="block"

    q++

    if(q === 10){
        nextQuestionBtn.style.display="none"
        finalResultsBtn.style.display="block"
    }
    currentQAnswered = true
}

function nextQuestion(){
    setQuestion()
    qResults.style.display="none"
}

function displayResults(){
    gameSection.style.display="none"
    body.style.backgroundImage="url(images/landingPageBackground.jpg)"
    gameSummary.style.display="block"
    gameSummary.style.backgroundColor="rgba(255,255,255,.85)"
    gameSummary.style.border="5px solid #e2aeb4"
    gameSummary.style.boxShadow="-.1em .8em .8em -4.5px #296e01"

    finalScore.style.display="block"
    finalScore.innerHTML=`Congratulations! <br> Your final score is ${score}!`;

    if(score <= 15){
        scoreResult = "Umm.. did you even watch The Office?"
    } else if (score >= 20 && score <= 30){
        scoreResult = "We think you may need to watch the series another few times.."
    } else if (score >= 35 && score <= 45){
        scoreResult = "You're on your way to being a true Office fan!"
    } else if (score >= 50 && score <= 60){
        scoreResult = "We can tell you've re-watched the series many times!"
    } else {
        scoreResult = "Wow, you're an Office pro!!"
    }

    gameRank.innerText = `${scoreResult}`
    gameRank.style.display="block"
    gameRank.style.margin="0 auto"
    gameRank.style.width="75%"

    playAgainBtn.style.display="block"
}


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

playBtn.addEventListener('click', playGame);

for(let levelBtn of setLevelBtns){
    levelBtn.addEventListener('click', setDifficulty)
    levelBtn.addEventListener('click', setQuestion)
}

for(let answerChoice of optionBtns){
    answerChoice.addEventListener('click', validate)
}

nextQuestionBtn.addEventListener('click', nextQuestion)
finalResultsBtn.addEventListener('click', displayResults)

playAgainBtn.addEventListener('click', () => {
    location.reload()
})

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// CSS Animations

const portraitModeCoverUp = document.querySelector('.portraitModeCoverUp')
const questionsBox = document.querySelector('#questionsBox')

window.addEventListener('load', () => {
    setInterval(() => {
        portraitModeCoverUp.classList.toggle('jsUpdatePortaitMode')
    }, 300)
})

window.addEventListener('load', () => {
    setInterval(() => {
        playBtn.classList.toggle('likeHoverEffect')
        for(let btn of setLevelBtns){
            btn.classList.toggle('likeHoverEffect')
        }
    }, 800)
})

