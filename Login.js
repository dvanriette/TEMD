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
const userCreate = document.getElementById('create')
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
        if(userCreate){
            userCreate.addEventListener('click', createPerson)
        }
        
        
        
    })

    function createPerson(evt) {
        let username = userNameData.value;
        let password = passwordData.value;
        const person = {
            username: username,
            password: password,
            guessCount: 0,
            guesses: [],
            won: false,
            dateOfLastLogin: ""
     };
     if(!username === "" && !password=== ""){
        addNewUser(person)
        window.location= "prototype.html"
     }
     
    }
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

