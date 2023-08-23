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


if(userData){
userData.addEventListener('click', handleInput)
}

function handleInput(evt) {
    let username = userNameData.value;
    let password = passwordData.value;    
    for(i = 0; i<usersList.length;i++){
        if(username===usersList[i]["username"] && password === usersList[i]["password"]){
            window.location= "prototype.html"
        }
    }
    if(username!= usersList["username"] || password!= usersList["password"]){
        $(document).ready(function(){
            $('.toast').toast('show');
          });
    }
}

