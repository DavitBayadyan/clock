function currentTime() {
    var date = new Date(); /* создаем объект класса Date() */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("hour").innerText = hour +":" ; 
    document.getElementById("min").innerText = min +":"; 
    document.getElementById("sec").innerText = sec + " AM"; 
    var t = setTimeout(function(){ currentTime() }, 1000); /* настраиваем таймер */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); 