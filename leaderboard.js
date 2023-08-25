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



  var playerData = [];
  console.log("D")
  const date = new Date()
  const dom = date.getDate()
  const dateString = dom.toString()
  console.log("a")
  const fetchPromise = fetch("http://localhost:5200/users");
  fetchPromise.then(response => {
      return response.json() })
      .then(list=>{
          console.log("c")
          usersForToday = []
          usersWithoutZero = []
          list.forEach(element => {
            if(!(element["guessCount"] === 0)){
                usersWithoutZero.push(element)
            }
        })
          usersWithoutZero.forEach(element => {
              if(element["dateOfLastLogin"] === dateString){
                  usersForToday.push(element)
              }
          })
          playerData = usersForToday
          run()
          console.log(playerData)
        })
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
    try{
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
  }catch{
    console.log("not enough users")
  }
    }

  async function run(){
    sortWinnersByGuessCount(playerData);
    pushWinnersToLeaderboard(winnersArray);
  }

  //run();
//readPlayers(winnersArray);
});