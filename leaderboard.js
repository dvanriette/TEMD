document.addEventListener('DOMContentLoaded', function () {
const top1stName = document.getElementById('1stPlcName');
const top1stScore = document.getElementById('1stPlcScore');

const top2ndName = document.getElementById('2ndPlcName');
const top2ndScore = document.getElementById('2ndPlcScore');

const top3rdName = document.getElementById('3rdPlcName');
const top3rdScore = document.getElementById('3rdPlcScore');

const top4thName = document.getElementById('4thPlcName');
const top4thScore = document.getElementById('4thPlcScore');

const top5thName = document.getElementById('5thPlcName');
const top5thScore = document.getElementById('5thPlcScore');

const top6thName = document.getElementById('6thPlcName');
const top6thScore = document.getElementById('6thPlcScore');

const top7thName = document.getElementById('7thPlcName');
const top7thScore = document.getElementById('7thPlcScore');

const top8thName = document.getElementById('8thPlcName');
const top8thScore = document.getElementById('8thPlcScore');

const top9thName = document.getElementById('9thPlcName');
const top9thScore = document.getElementById('9thPlcScore');

const top10thName = document.getElementById('10thPlcName');
const top10thScore = document.getElementById('10thPlcScore');


const winnersArray = [];

const playerData = [ //This json would be our player data
    {
      "username": "alice_smith",
      "password": "secure123",
      "guessCount": 0,
      "guesses": [],
      "won": true,
      "dateOfLastLogin": "2023-08-23"
    },
    {
      "username": "david_wilson",
      "password": "p@ssword!",
      "guessCount": 2,
      "guesses": ["apple", "banana"],
      "won": true,
      "dateOfLastLogin": "2023-08-22"
    },
    {
      "username": "sarah_jones",
      "password": "passw0rd",
      "guessCount": 8,
      "guesses": ["carrot", "broccoli", "lettuce", "tomato", "cucumber", "potato", "onion", "pepper"],
      "won": true,
      "dateOfLastLogin": "2023-08-21"
    },
    {
      "username": "michael_davis",
      "password": "mypass123",
      "guessCount": 0,
      "guesses": [],
      "won": true,
      "dateOfLastLogin": "2023-08-20"
    },
    {
      "username": "linda_adams",
      "password": "lindapass",
      "guessCount": 4,
      "guesses": ["sun", "moon", "stars", "earth"],
      "won": true,
      "dateOfLastLogin": "2023-08-19"
    },
    // Additional users
    {
      "username": "john_doe",
      "password": "johndoepass",
      "guessCount": 5,
      "guesses": ["cat", "dog", "bird", "fish", "rabbit"],
      "won": true,
      "dateOfLastLogin": "2023-08-18"
    },
    {
      "username": "mary_jackson",
      "password": "marypass",
      "guessCount": 3,
      "guesses": ["red", "green", "blue"],
      "won": true,
      "dateOfLastLogin": "2023-08-17"
    },
    {
      "username": "robert_smith",
      "password": "robertpass",
      "guessCount": 6,
      "guesses": ["car", "bike", "bus", "train", "plane", "boat"],
      "won": true,
      "dateOfLastLogin": "2023-08-16"
    },
    {
      "username": "emily_jones",
      "password": "emilypass",
      "guessCount": 1,
      "guesses": ["pizza"],
      "won": true,
      "dateOfLastLogin": "2023-08-15"
    },
    {
      "username": "james_wilson",
      "password": "jamespass",
      "guessCount": 7,
      "guesses": ["football", "basketball", "soccer", "tennis", "golf", "baseball", "cricket"],
      "won": true,
      "dateOfLastLogin": "2023-08-14"
    }
  ];
  
function sortWinnersByGuessCount(playerData){
    let sortedData = playerData.sort((a,b) => a.guessCount - b.guessCount);

    for(i=0; i<10 && i < playerData.length; i++){
        winnersArray.push(sortedData[i]);
    }
}

  function readPlayers(topPlayers = []){
    for (i = 0; i<topPlayers.length; i++){
        console.log(winnersArray[i])
    }
  }

  function pushWinnersToLeaderboard(winners = []){
          top1stName.textContent = winners[0].username;
          top1stScore.textContent = winners[0].guessCount;

          top2ndName.textContent = winners[1].username;
          top2ndScore.textContent = winners[1].guessCount;
          
          top3rdName.textContent = winners[2].username;
          top3rdScore.textContent = winners[2].guessCount;

          top4thName.textContent = winners[3].username;
          top4thScore.textContent = winners[3].guessCount;

          top5thName.textContent = winners[4].username;
          top5thScore.textContent = winners[4].guessCount;

          top6thName.textContent = winners[5].username;
          top6thScore.textContent = winners[5].guessCount;

          top7thName.textContent = winners[6].username;
          top7thScore.textContent = winners[6].guessCount;

          top8thName.textContent = winners[7].username;
          top8thScore.textContent = winners[7].guessCount;

          top9thName.textContent = winners[8].username;
          top9thScore.textContent = winners[8].guessCount;

          top10thName.textContent = winners[9].username;
          top10thScore.textContent = winners[9].guessCount;
    }

  async function run(){
    sortWinnersByGuessCount(playerData);
    pushWinnersToLeaderboard(winnersArray);
  }

  run();
//readPlayers(winnersArray);
});