const incorrectNames = []
const correctDiets = []
const incorrectDiets = []
const correctTypes = []
const incorrectTypes = []
const correctHabitats = []
const incorrectHabitats = []
const correctSpecies = []
const incorrectSpecies = [] 


function checkGuess(guess,answer){
    let matches = [false,false,false,false,false,false]
    if(guess["name"] === answer["name"]){
        for (let i = 0; i < matches.length; i++) {
            matches[i] = true
        }
        //winGame //user.setWon(true)
    }else {
        if (guess["diet"] === answer["diet"]){
            matches[1] = true
            correctDiets.push(guess["diet"])
        }else{
            incorrectDiets.push(guess["diet"])
        }
        if (guess["type"] === answer["type"]){
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
            correct.push(guess["diet"])
        }
        //if(guesses = hintLimit){
            //displayHint(guess)
        //}

    }
    //setGuessAttributes(guess,matches)  //function needs to be made that connects to the html
        //if the value is false set the corresponding box to either red if its true set to green. visual clarity
    
}