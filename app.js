console.log("hello, world");


var promptQuestion = "Do you like rain?";

function checkUserPassword() {
     var storedPassword = "What's";    

    do {
     var passwd = prompt("What's the password?"); 
    //  console.log(promptUser);
    }while (passwd !== storedPassword);
}

var alertMessage;

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

checkUserPassword();
// promptUser();
responseInput();