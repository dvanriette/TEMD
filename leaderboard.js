document.addEventListener('DOMContentLoaded', function () {

    const topElements = [];

    for (let i = 1; i <= 10; i++) {
        topElements[i] = {
            name: document.getElementById(`${i}thPlcName`),
            score: document.getElementById(`${i}thPlcScore`)
        };
    }

    const winnersArray = [];

    // const playerData = [ //This json would be our player data. This is for testing
    //     {
    //         "username": "Example Name",
    //         "password": "secure123",
    //         "guessCount": 3,
    //         "guesses": [],
    //         "won": true,
    //         "dateOfLastLogin": "2023-08-23"
    //     }
    // ];

    function sortWinnersByGuessCount(playerData) {
        let sortedData = playerData.sort((a, b) => a.guessCount - b.guessCount);

        for (i = 0; i < 10 && i < playerData.length; i++) {
            winnersArray.push(sortedData[i]);
        }
    }

    function readArray(array = []) {
        for (i = 0; i < array.length; i++) {
            console.log(array[i])
        }
    }

    function pushWinnersToLeaderboard(winners = []) {
        for (let i = 0; i < winners.length && i < topElements.length; i++) {
            topElements[i + 1].name.textContent = winners[i].username;
            topElements[i+ 1].score.textContent = winners[i].guessCount;
        }
    }
    async function run() {
        sortWinnersByGuessCount(playerData);
        pushWinnersToLeaderboard(winnersArray);
    }
    topElements.name = playerData[0].username;

    readArray(topElements)
    run();
});
