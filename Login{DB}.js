var usersList = [{
    "username": "dvanriette",  
    "password": "dvanriette03!",  
    "guessCount": 0, 
    "guesses": [],  
    "won": false,  
    "dateOfLastLogin": "" 

},
{
    "username": "eliSpek",  
    "password": "eliSpekTest32!",  
    "guessCount": 0, 
    "guesses": [],  
    "won": false,  
    "dateOfLastLogin": "" 
}
]

const userData = document.getElementById('submit');
const userNameData = document.getElementById('userName');
const passwordData = document.getElementById('passWord');
const fetchPromise = fetch("http://localhost:5200/users");
fetchPromise.then(response => {
    return response.json() })
    .then(users=>{
        //console.log(animals)
        usersList = users
        console.log(usersList)
        if(userData){
            userData.addEventListener('click', handleInput)
            }
        newUser = {
            "username": "dvanriette",  
            "password": "dvanriette03!",  
            "guessCount": 0, 
            "guesses": [],  
            "won": false,  
            "dateOfLastLogin": "" 
        }
        addNewUser(newUser)
        
    })

async function addNewUser(userJson){
    const response = await fetch("http://localhost:5200/users/insert", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
        "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(userJson),
    })
}


function handleInput(evt) {
    console.log("hello")
    let username = userNameData.value;
    let password = passwordData.value;    
    for(i = 0; i<usersList.length;i++){
        if(username===usersList[i]["username"] && password === usersList[i]["password"]){
            window.location= "prototype.html"
        }
    }
}

