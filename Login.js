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

    async function createPerson(evt) {
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
    console.log('here')
    if(username != "" & password != ""){
        if(checkIsUnique(username,password)){
            let newPerson = {
                id:"1",
                username:username,
                firstLI: true
            }
            addNewUser(person)
            await setTheCurrentUser(newPerson).then(
            window.location= "prototype.html"
            )
        }
    }
    
    }
function checkIsUnique(username,password){
    let isuniqe = true
    usersList.forEach(element => {
        if(element["username"] === username || element["password"] === password){
            isuniqe = false
        }
    }
    )
    return isuniqe
}
async function setTheCurrentUser(pso){
    const response = await fetch("http://localhost:5200/liu/update", {
        method: "PATCH",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
        "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(pso),
    })
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


async function handleInput(evt) {
    console.log("hello")
    let username = userNameData.value;
    let password = passwordData.value;    
    let person = {
        id:"1",
        username:username,
        firstLI: true
    }
    for(i = 0; i<usersList.length;i++){
        if(username===usersList[i]["username"] && password === usersList[i]["password"]){
            await setTheCurrentUser(person).then(
                window.location= "prototype.html"
            )
            //window.location= "prototype.html"
        }
    }
}

