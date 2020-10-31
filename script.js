// Define variabkes to ghold  time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Define variables to hold displayed values

let displayseconds = 0;
let displayminutes = 0;
let displayhours = 0;

// Define variable to hold set interval function

let interval =null;
let status = "stopped";


// Stopwatch Logic to determine when to increasment next value ete 

function stopWatch(){
   seconds++;

  //  logic to dtermine whwne to icreasement next value

   if (seconds /60 ===1) {
     seconds = 0;
     minutes++;

     if(minutes /60 ===1) {
       minutes = 0;
       hours++;
     }
   }

  //  If second/minutes/hours are only one dgit , add a leading 0 to the value

    if (seconds < 10){
      displayseconds = '0' + seconds.toString();
    }
    else{
      displayseconds = seconds;
    }

    if (minutes < 10){
      displayminutes = '0' + minutes.toString();
    }
    else{
      displayminutes = minutes;
    }

    if (hours < 10){
      displayhours = '0' + hours.toString();
    }
    else{
      displayhours = hours;
    }


  //  Display updated time values to user

  document.getElementById('display').innerHTML = displayhours +":" + displayminutes + ":" + displayseconds;

}



function startStop(){
  if (status === "stopped"){
    interval = window.setInterval(stopWatch, 100);
    document.getElementById("startStop").innerHTML = "Stop";
    status= "started";
  }
  else {
    window.clearInterval (interval);
    document.getElementById("startStop").innerHTML = "Start";
    status= "stopped";

  }

}

// Function to Reset the Stopwatch

function reset(){
window.clearInterval(interval);
seconds = 0;
minutes = 0;
hours =0;
document.getElementById("display").innerHTML = " 00:00:00";
document.getElementById("startStop").innerHTML = "Start";

}