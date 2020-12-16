console.log("hello, world");

function checkUserPassword() {
     var storedPassword = "What";    

    do {
     var passwd = prompt("What is the password?"); 
    //  console.log(promptUser);
    }while (passwd !== storedPassword);
}

function responseInput() {
    var response = prompt(promptQuestion);
    response = response.toLowerCase();
    if (response === "yes") {
        alertMessage = "The PNW is for you!";
    } else if (response === "no") {
        alertMessage = "Here's an umbrella ☂️"
    } else {
        alertMessage = "It's a yes or no, really"
    }
    alert (alertMessage)
}

function addAnimalsToDocument() {
    var numberOfAnimals = prompt("How many animal pictures can you handle?");
    
    for(var i = 0; i <numberOfAnimals; i++) 
    console.log(i);
    addAnimalsToDocument(numberOfAnimals);
    document.write("<section> \
                        <img src=http://placeimg.com/640/480/animals> \
                        </section>");
}

var promptQuestion = "Do you like rain?";
var alertMessage;

checkUserPassword();
responseInput();
// addAnimalsToDocument();