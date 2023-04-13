window.onscroll= function(){myFunction()}

var valueTop=document.querySelector(".main-body")
var header=document.querySelector(".headline")
var sticky=valueTop.offsetTop
function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      valueTop.classList.add("sticky")
    } else {
      header.classList.remove("sticky");
      valueTop.classList.remove("sticky")
    }
  }