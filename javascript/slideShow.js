function slider_1(){
    var next=document.querySelector(".banner-left .next")
    var rev=document.querySelector(".banner-left .rev")
    next.addEventListener("click",()=>{
        let listImg=document.querySelectorAll(".banner-left img");
        document.querySelector(".body-slied-show").appendChild(listImg[0])
    })
    rev.addEventListener("click",()=>{
        let listImg=document.querySelectorAll(".banner-left img");
        document.querySelector(".body-slied-show").prepend(listImg[listImg.length-1])
    })
    setInterval(()=>{
        next.click();
    },2000)
}
slider_1();
function slider_2(){
var btnNext=document.querySelector(".slied-show .next")
var btnRev=document.querySelector(".slied-show .rev")
btnNext.addEventListener("click",()=>{
    let listItems=document.querySelectorAll(".items-siled")[0]
    document.querySelector(".slied-show ul").appendChild(listItems)
})
btnRev.addEventListener("click",()=>{
    let listItems=document.querySelectorAll(".items-siled")
    document.querySelector(".slied-show ul").prepend(listItems[listItems.length-1])
})
setInterval(()=>{
    btnNext.click();
},1500)
}
slider_2()
