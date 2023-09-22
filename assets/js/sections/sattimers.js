function update(i) {

  var now = new Date();
  if (dateArray[i] == 0) {
    var element = document.getElementById("tevel"+i+"Timer");
    element.innerHTML = "NOT FUNCTIONAL";
    element.classList.add("nonfunctional");
    element = document.getElementById("emoji"+i);
    element.innerHTML = "&#x1F480;";
  } else {

     var distance = parseInt(dateArray[i]) - new Date(now.getTime());
     var satDate = new Date(parseInt(dateArray[i]));

     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     if (distance < 0) {
       clearInterval(x);
       var element = document.getElementById("tevel"+i+"Timer");
       element.innerHTML = "TIMED OUT";
       element.classList.add("timedout");
       element = document.getElementById("emoji"+i);
       element.innerHTML = "&#x274C;";
       element = document.getElementById("tevel"+i+"Timeout");
       element.className = "expired";
       element.innerHTML = "(timed-out: "+satDate.toLocaleDateString()+" "+satDate.toLocaleTimeString()+")";
     } else {
       var element = document.getElementById("tevel"+i+"Timer");
       element.innerHTML = days + "d " + hours + "h " + minutes.toString().padStart(2, '0') + "m " + seconds.toString().padStart(2, '0') + "s";
       element.classList.add("active");
       element = document.getElementById("emoji"+i);
       element.innerHTML = "&#x2705;";
       element = document.getElementById("tevel"+i+"Timeout");
       element.innerHTML = "(until: "+satDate.toLocaleDateString()+" "+satDate.toLocaleTimeString()+")";
     }
  }
}

for (let i=1; i<=12; i++) {
      var x = setInterval(function() {
               update(i);
            }, 1000);
}
