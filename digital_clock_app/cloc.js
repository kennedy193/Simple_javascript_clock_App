let clock=document.querySelector('.clock');
function update(){
    let  now= new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    //add extra zero if the number is les than 10
    hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.innerHTML=`${hours}:${minutes}:${seconds}`;

    setTimeout(update,1000);
      }
      update();
    
    
