console.log("hello, world");

var promptQuestion = "Do you like rain?";
var response = prompt(promptQuestion);
console.log(response);

var alertMessage;

function responseInput() {
    if (response === "yes") {
        alertMessage = "The PNW is for you!";
    } else if (response === "Yes") {
        alertMessage = "The PNW is for you!";
    } else if (response === "no") {
        alertMessage = "Here's an umbrella ☂️"
    } else if (response === "No") {
        alertMessage = "Here's an umbrella ☂️"
    }
    alert (alertMessage)
}

responseInput ();

