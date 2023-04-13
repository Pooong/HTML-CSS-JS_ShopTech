var nameProfile=document.querySelector(".accout span")
console.log(nameProfile)
var dataProfile=localStorage.getItem("account")
console.log(dataProfile)
dataProfile==null?nameProfile.innerHTML="Tài khoản":nameProfile.innerHTML=dataProfile