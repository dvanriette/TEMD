people = [
    {
        "username": "us1",  
        "password": "pw1",
        "guessCount": 0,
        "guesses": [],
        "won": true,  
        "dateOfLastLogin": "18"
    },
    {
        "username": "us2",  
        "password": "pw1",
        "guessCount": 3,
        "guesses": [],
        "won": true,  
        "dateOfLastLogin": "18"
    },
    {
        "username": "us3",  
        "password": "pw1",
        "guessCount": 7,
        "guesses": [],
        "won": true,  
        "dateOfLastLogin": "18"
    },
    {
        "username": "us4",  
        "password": "pw1",
        "guessCount": 11,
        "guesses": [],
        "won": true,  
        "dateOfLastLogin": "18"
    },
    {
        "username": "us5",  
        "password": "pw1",
        "guessCount": 6,
        "guesses": [],
        "won": true,  
        "dateOfLastLogin": "18"
    },
    {
        "username": "us6",  
        "password": "pw1",
        "guessCount": 1,
        "guesses": [],
        "won": false,  
        "dateOfLastLogin": "18"
    }
]

function GetSortOrder(guesses) {    
    return function(a, b) {    
        if (a[guesses] > b[guesses]) {    
            return 1;    
        } else if (a[guesses] < b[guesses]) {    
            return -1;    
        }    
        return 0;    
    }    
}
people.sort(GetSortOrder("guessCount"))
console.log(people)