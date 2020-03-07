function button1(){
  document.getElementById("charity1").style.display = "flex";
  document.getElementById("charity2").style.display = "flex";
  document.getElementById("charity3").style.display = "flex";
  document.getElementById("charity4").style.display = "flex";
}

function button2(){
  document.getElementById("charity1").style.display = "none";
  document.getElementById("charity2").style.display = "none";
  document.getElementById("charity3").style.display = "flex";
  document.getElementById("charity4").style.display = "none";
}

function button3(){
  document.getElementById("charity1").style.display = "flex";
  document.getElementById("charity2").style.display = "flex";
  document.getElementById("charity3").style.display = "none";
  document.getElementById("charity4").style.display = "none";
}

function button4(){
  document.getElementById("charity1").style.display = "none";
  document.getElementById("charity2").style.display = "none";
  document.getElementById("charity3").style.display = "none";
  document.getElementById("charity4").style.display = "flex";
}
