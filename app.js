const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},{

    question : "What is actually electricity?",
    a: "A flow of water",
    b: " A flow of air",
    c: "A flow of electrons",
    d: "A flow of atoms",
    correct: "c",
},{
    question : "Which of the following is not an international organisation?",
    a: "FIFA",
    b: " NATO",
    c: "ASEAN",
    d: "FBI",
    correct: "d",
},
{
    question : "Which of the following disorders is the fear of being alone?",
    a: "Agoraphobia",
    b: "Aerophobia ",
    c: "Acrophobia",
    d: "Arachnophobia",
    correct: "a",
},
{
    question : "What is the speed of sound?",
    a: "120 km/h",
    b: "1,200 km/h ",
    c: " 400 km/h",
    d: " 700 km/h",
    correct: "b",
},
{
    question : "Which is the easiest way to tell the age of many trees?",
    a: "To measure the width of the tree",
    b: "To count the rings on the trunk ",
    c: "To count the number of leaves",
    d: "To measure the height of the tree",
    correct: "b",
},
{
    question : "In which continent are Chile, Argentina and Brazil?",
    a: "North America",
    b: "South America ",
    c: "Europe",
    d: "Australasia",
    correct: "b",
},
{
    question : "The human body is made up of approximately how much water?",
    a: "40%",
    b: "50% ",
    c: "70%",
    d: "80%",
    correct: "c",
},
{
    question : "What is the world’s fastest species of bird?",
    a: "Golden eagle",
    b: "Peregrine falcon ",
    c: "Frigatebird",
    d: "Penguin",
    correct: "b",
},
{
    question : "Which did Viking people use as money?",
    a: "Rune stones",
    b: "Jewellery ",
    c: "Seal skins",
    d: "Wool",
    correct: "b",
},
{
    question : "What was the first country to use tanks in combat during World War I?",
    a: " France",
    b: "Japan ",
    c: "Britain",
    d: "Germany",
    correct: "c",
},
{
    question : "What is the rarest type of blood in the human body?",
    a: "AB negative",
    b: "O positive ",
    c: "B negative",
    d: "A positive",
    correct: "b",
},
{
    question : "",
    a: "",
    b: " ",
    c: "",
    d: "",
    correct: "a",
},
{
    question : "",
    a: "",
    b: " ",
    c: "",
    d: "",
    correct: "a",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);