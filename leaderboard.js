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
    //         "username": "alice_smith",
    //         "password": "secure123",
    //         "guessCount": 0,
    //         "guesses": [],
    //         "won": true,
    //         "dateOfLastLogin": "2023-08-23"
    //     },
    //     {
    //         "username": "david_wilson",
    //         "password": "p@ssword!",
    //         "guessCount": 2,
    //         "guesses": ["apple", "banana"],
    //         "won": true,
    //         "dateOfLastLogin": "2023-08-22"
    //     },
    //     {
    //         "username": "sarah_jones",
    //         "password": "passw0rd",
    //         "guessCount": 8,
    //         "guesses": ["carrot", "broccoli", "lettuce", "tomato", "cucumber", "potato", "onion", "pepper"],
    //         "won": true,
    //         "dateOfLastLogin": "2023-08-21"
    //     },
    //     {
    //         "username": "michael_davis",
    //         "password": "mypass123",
    //         "guessCount": 0,
    //         "guesses": [],
    //         "won": true,
    //         "dateOfLastLogin": "2023-08-20"
    //     },
    //     {
    //         "username": "linda_adams",
    //         "password": "lindapass",
    //         "guessCount": 4,
    //         "guesses": ["sun", "moon", "stars", "earth"],
    //         "won": true,
    //         "dateOfLastLogin": "2023-08-19"
    //     },
    //     // Additional users
    //     {
    //         "username": "john_doe",
    //         "password": "johndoepass",
    //         "guessCount": 5,
    //         "guesses": ["cat", "dog", "bird", "fish", "rabbit"],
    //         "won": true,
    //         "dateOfLastLogin": "2023-08-18"
    //     },
    //     {
    //         "username": "mary_jackson",
    //         "password": "marypass",
    //         "guessCount": 3,
    //         "guesses": ["red", "green", "blue"],
    //         "won": true,
    //         "dateOfLastLogin": "2023-08-17"
    //     },
    //     {
    //         "username": "robert_smith",
    //         "password": "robertpass",
    //         "guessCount": 6,
    //         "guesses": ["car", "bike", "bus", "train", "plane", "boat"],
    //         "won": true,
    //         "dateOfLastLogin": "2023-08-16"
    //     },
    //     {
    //         "username": "emily_jones",
    //         "password": "emilypass",
    //         "guessCount": 1,
    //         "guesses": ["pizza"],
    //         "won": true,
    //         "dateOfLastLogin": "2023-08-15"
    //     },
    //     {
    //         "username": "james_wilson",
    //         "password": "jamespass",
    //         "guessCount": 7,
    //         "guesses": ["football", "basketball", "soccer", "tennis", "golf", "baseball", "cricket"],
    //         "won": true,
    //         "dateOfLastLogin": "2023-08-14"
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
