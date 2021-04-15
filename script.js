
function clearing(c) {
    document.getElementById('result').value = c;
}
function getVal(val) {
    document.getElementById('result').value += val; 
}
function delet() {
    let strSliced = document.getElementById('result').value.slice(0,-1);
    document.getElementById('result').value = strSliced;
}
function getResult() {
    try {
        clearing(eval(document.getElementById('result').value));
    } catch(getResult) {
        clearing('ERror');
    }
}

// Watch
function watch() {

function currentTime() {
    let date = new Date(); 
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM"; 
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); 
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("result").value = hour + " : " + min + " : " + sec + " " + midday; 
      let t = setTimeout(currentTime, 1000); 
  }
  /* appending 0 before time elements if less than 10 */
  function updateTime(k) { 
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();
}