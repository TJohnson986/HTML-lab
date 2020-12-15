console.log("hello, world");


var promptQuestion = "Do you like rain?";
var response = prompt(promptQuestion);
console.log(response);

var alertMessage;

function responseInput() {
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

responseInput();
