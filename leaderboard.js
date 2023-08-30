document.addEventListener('DOMContentLoaded', function () {

    const topElements = [];
    const winnersArray = [];

    for (let i = 1; i <= 10; i++) {
        topElements[i] = {
            name: document.getElementById(`${i}thPlcName`),
            score: document.getElementById(`${i}thPlcScore`)
        };
    }

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


    var playerData = [];
    console.log("D")
    const date = new Date()
    const dom = date.getDate()
    const dateString = dom.toString()
    console.log("a")
    const fetchPromise = fetch("http://localhost:5200/users");
    fetchPromise.then(response => {
        return response.json()
    })
        .then(list => {
            console.log("c")
            usersForToday = []
            usersWithoutZero = []
            list.forEach(element => {
                if (!(element["guessCount"] === 0)) {
                    usersWithoutZero.push(element)
                }
            })
            usersWithoutZero.forEach(element => {
                if (element["dateOfLastLogin"] === dateString) {
                    usersForToday.push(element)
                }
            })
            avg = 0
            usersForToday.forEach(user => {
                avg = avg + user["guessCount"]
            });
            if (usersForToday.length > 0){
                avg = avg/usersForToday.length
            }
            document.getElementById('showTop').innerText = "Todays top contenders! Average Score: " + avg

            playerData = usersForToday
            run()
            console.log(playerData)
        })

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
            topElements[i + 1].score.textContent = winners[i].guessCount;
        }
    }
    async function run() {
        sortWinnersByGuessCount(playerData);
        pushWinnersToLeaderboard(winnersArray);
    }

    readArray(topElements)
    run();
});
