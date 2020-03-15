let enterBtn = document.getElementsByClassName("enter")[0];
// let set = enterBtn.classList;

function enter() {
  setTimeout(function (){
    enterBtn.classList = "show enter";
  }, 12000);
}

window.onload = enter();
