answer = {
    name: "bear",
    diet: "omnivore",
    type: "mammal",
    habitat: "forest",
    species: "ursidae",
    pet: false
}
guess = {
    name: "dog",
    diet: "omnivore",
    type: "mammal",
    habitat: "other",
    species: "canine",
    pet: true
}
guesses = 1
let won = false

const incorrectNames = []
const correctDiets = []
const incorrectDiets = []
const correctTypes = []
const incorrectTypes = []
const correctHabitats = []
const incorrectHabitats = []
const correctSpecies = []
const incorrectSpecies = [] 



const guessButton = document.getElementById("button")
const guessesDiv = document.getElementById("guesses")

button.addEventListener('click', () => {
    if(!won){
    console.log("input was")
    let val = document.querySelector('input').value;
    console.log(val)
    if(val === "bear"){
        checkGuess(answer,answer)
    }else if(val === "dog"){
        checkGuess(guess,answer)
    }
}
    
})

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

function winGame(){
    won = true
    let winText = document.createElement("div")
    winText.className = "parent"
    winText.id = "current"
    winText.innerHTML = "Congrats! You guessed it in" + guesses + " tries"
    document.body.appendChild(winText)
    }