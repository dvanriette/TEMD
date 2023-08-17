var animalList =[
        {
            "id": 1,
            "name": "polar bear",
            "diet": "omnivore",
            "type": "mammal",
            "habitat": "tundra",
            "species": "ursidae",
            "pet" : false,
            "hint": "The largest of its species"
        },
        {
            "id": 2,
            "name": "dog",
            "diet": "omnivore",
            "type": "mammal",
            "habitat": "other",
            "species": "canine",
            "pet" : true,
            "hint": "the most common pet in the world"
        }//,
        // {
        //     "id": 3,
        //     "name": "horse",
        //     "diet": "omnivore",
        //     "type": "mammal",
        //     "habitat": "other",
        //     "species": "Artiodactyla",
        //     "pet" : true,
        //     "hint": "the most common pet in the world"
        // }
    ]
//const axios = require('axios');
guesses = 1
guessThreshold = 5
let won = false
var answer = animalList[0]
let hintBox = document.getElementById("hintbox")

const incorrectNames = []
const correctDiets = []
const incorrectDiets = []
const correctTypes = []
const incorrectTypes = []
const correctHabitats = []
const incorrectHabitats = []
const correctSpecies = []
const incorrectSpecies = [] 
const date = new Date()

let dom= date.getDate()
dt2 = {}
dateString = dom.toString()
getAnimals()
async function getAnimals(){
    //animalList = await fetch("http://localhost:5200/animals").then(console.log(animalList))
    //await fetch("http://localhost:5200/animals").then((response) =>{
    //    console.log(response.json())
    //})
    
    const fetchPromise = fetch("http://localhost:5200/animals");
    fetchPromise.then(response => {
        return response.json() })
        .then(animals=>{
            //console.log(animals)
            animalList = animals
            const datePromise = fetch("http://localhost:5200/gd");
            datePromise.then(response => {
            return response.json() })
            .then(gd=>{
                dt2 = gd
                //console.log(dt2['currentDate'])
                if(!(dateString === dt2['currentDate'])){
                    answer = animalList[Math.floor(Math.random() * animalList.length)]
                    console.log(answer)
                    postData()
                }else{
                    console.log(dateString)
                    console.log(dt2['currentDate'])
                    console.log('else')
                    const newAnimalPromise = fetch("http://localhost:5200/gd");
                    newAnimalPromise.then(response => {
                    return response.json() })
                    .then(newgd=>{
                        animalList.forEach(element => {
                            if(element["name"] == (newgd["answerName"][0])){
                                answer = element
                            }
                        })
                    
                    })
                }
            })
            button.addEventListener('click', () => {
                if(!won){
                console.log("input was")
                let val = document.querySelector('input').value;
                console.log(val)
                    ruleSystem(val,answer)
                }
            })
            
        })
    
     //answer = animalList[Math.floor(Math.random() * animalList.length)]
}
//let data = {
//    currentDate: dateString,
//    answerName: [answer['name']],
//    id: "1"
//    }
// function updateDate(){ // need to be able to send a patch request. if we can find out how to import axios its free
//     axios.patch("http://localhost:5200/gd/update", {
//         currentDate: dateString,
//         answerName: [answer['name']],
//         id: "1"
//     })

// }
async function postData() {
    let data = {
            currentDate: dateString,
            answerName: [answer['name']],
            id: "1"
        }
    //let url = "http://localhost:5200/gd/update"

    // Default options are marked with *
    const response = await fetch("http://localhost:5200/gd/update", {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    
    //console.log(response.json())
    //return response.json(); // parses JSON response into native JavaScript objects
}


const guessButton = document.getElementById("button")
const guessesDiv = document.getElementById("guesses")

// button.addEventListener('click', () => {
//     if(!won){
//     console.log("input was")
//     let val = document.querySelector('input').value;
//     console.log(val)
//         ruleSystem(val,answer)
//     }
// })
    


// button.addEventListener('click', () => {
//     checkGuess(guess,answer)
    
// })


function checkGuess(guess,answer){
    let matches = [false,false,false,false,false,false]
    if(guess["name"] === answer["name"]){
        for (let i = 0; i < matches.length; i++) {
            matches[i] = true
        }
        winGame()
        //winGame //user.setWon(true)
    }else {
        if(guesses > guessThreshold - 1 ){
            hintBox.innerHTML = answer["hint"]
            hintBox.style.backgroundColor="yellow"
        }else{
            hintBox.innerHTML = "?<br>gueses until hint: " + (guessThreshold - guesses)
        }
        if (guess["diet"] === answer["diet"]){
            matches[1] = true
            correctDiets.push(guess["diet"])
        }else{
            incorrectDiets.push(guess["diet"])
        }
        
        if (guess["type"] === answer["type"]){
            console.log("types are same")
            matches[2] = true
            correctTypes.push(guess["type"])
        }else{
            incorrectTypes.push(guess["type"])
        }
        if (guess["habitat"] === answer["habitat"]){
            matches[3] = true
            correctHabitats.push(guess["habitat"])
        }else{
            incorrectHabitats.push(guess["habitat"])
        }
        if (guess["species"] === answer["species"]){
            matches[4] = true
            correctSpecies.push(guess["species"])
        }else{
            incorrectSpecies.push(guess["species"])
        }
        if (guess["pet"] === answer["pet"]){
            matches[5] = true
        }
        //if(guesses = hintLimit){
            //displayHint(guess)
        //}

    }
    setGuessAttributes(guess,matches)  //function needs to be made that connects to the html
        //if the value is false set the corresponding box to either red if its true set to green. visual clarity
    
}

function setGuessAttributes(animal,matches){
    guesses++
    let nameBox = document.getElementById("name")
    let dietBox = document.getElementById("diet")  // finish this
    let typeBox = document.getElementById("type")
    let habitatBox = document.getElementById("habitat")
    let speciesBox = document.getElementById("species")
    let petBox = document.getElementById("pet")
        
        nameBox.innerHTML = animal["name"]
        dietBox.innerHTML = animal["diet"]
        typeBox.innerHTML = animal["type"]
        habitatBox.innerHTML = animal["habitat"]
        speciesBox.innerHTML = animal["species"]
        petBox.innerHTML = animal["pet"]

    if(matches[0] === false){
        nameBox.className = "wrong"
    }else{
        nameBox.className = "right"
    }
    if(matches[1] === false){
        dietBox.className = "wrong"
    }else{
        dietBox.className = "right"
    }
    if(matches[2] === false){
        console.log("false")
        typeBox.className = "wrong"
    }else{
        typeBox.className = "right"
    }
    if(matches[3] === false){
        habitatBox.className = "wrong"
    }else{
        habitatBox.className = "right"
    }
    if(matches[4] === false){
        speciesBox.className = "wrong"
    }else{
        speciesBox.className = "right"
    }
    if(matches[5] === false){
        petBox.className = "wrong"
    }else{
        petBox.className = "right"
    }
    nameBox.id = "used"
    dietBox.id = "used"
    typeBox.id = "used"
    habitatBox.id = "used"
    speciesBox.id = "used"
    petBox.id = "used"

    
    
    document.getElementById("current").id = guesses
    delete(nameBox)
    let newParent = document.createElement("div");
    newParent.className = "parent"
    newParent.id = "current"
    guessesDiv.appendChild(newParent)

    let newName = document.createElement("div");
    newName.id = "name";
    newName.className = "neutral"
    newParent.appendChild(newName);
    let newDiet = document.createElement("div");
    newDiet.id = "diet";
    newDiet.className = "neutral"
    newParent.appendChild(newDiet);
    let newType = document.createElement("div");
    newType.id = "type";
    newType.className = "neutral"
    newParent.appendChild(newType);
    let newHabitat = document.createElement("div");
    newHabitat.id = "habitat";
    newHabitat.className = "neutral"
    newParent.appendChild(newHabitat);
    let newSpecies = document.createElement("div");
    newSpecies.id = "species";
    newSpecies.className = "neutral"
    newParent.appendChild(newSpecies);
    let newPet = document.createElement("div");
    newPet.id = "pet";
    newPet.className = "neutral"
    newParent.appendChild(newPet);
    
}

function ruleSystem(quess,CorrectAnswer){
    let intNum = 0
    
    for (i = 0; i<animalList.length;i++){
        if(quess===animalList[i]["name"]){
            trueQuess = animalList[i]
            intNum++;
            checkGuess(trueQuess,CorrectAnswer)
            continue;
            
        }        
        console.log("guess:" +quess)
    }
    if(intNum==0){
        console.log("guess:" +quess)
        console.log("answer:"+animalList["name"])
        console.log("incorrect")
    }
    
}

function winGame(){
    won = true
    let winText = document.createElement("div")
    winText.className = "parent"
    winText.id = "current"
    winText.innerHTML = "Congrats! You guessed it in " + guesses + " tries"
    document.body.appendChild(winText)
    }