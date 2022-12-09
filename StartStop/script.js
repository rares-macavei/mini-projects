window.onload = function () {
  
  var minutes = 00; 
  var seconds = 00; 
  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 1000);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    seconds = "00";
  	minutes = "00";
    appendSeconds.innerHTML = seconds;
  	appendMinutes.innerHTML = minutes;
  }
  
   
  
  function startTimer () {
    seconds++; 
    
    if(seconds <= 6){
      appendSeconds.innerHTML = "0" + seconds;
    }
    
    if (seconds > 6){
      appendSeconds.innerHTML = seconds;
      
    } 
    
    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
    
    if (minutes > 9){
      appendMinutes.innerHTML = minutes;
    }
  
  }
  

}