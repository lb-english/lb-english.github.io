

var sourceElement = document.getElementById('dwnnotif');
var targetElement = document.getElementById('spacer-1');
  
var sourceHeight = window.getComputedStyle(sourceElement, null).getPropertyValue('height');
targetElement.style.height = sourceHeight;

function closeNotif(){
    document.getElementById("dwnnotif").remove();
    document.getElementById("spacer-1").style.display = "none";
}