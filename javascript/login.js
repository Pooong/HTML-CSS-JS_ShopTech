var btn=document.querySelector(".btn")
var listInput=document.querySelectorAll(".input input")
var password=document.querySelector(".input .password")
var account=document.querySelector(".input .account")

function showErorr(input,text){
    var line=input.parentElement.querySelector("span")
    line.style.background="red"
    alert(text);
    input.focus();
}
function showSuccess(input){
    var line=input.parentElement.querySelector("span")
    line.style.background="#4f0680"
}
function checkAccount(input,password){
    var istrue=false
    var listAccount
    var dataList=JSON.parse(localStorage.getItem("listAccount"))
    dataList==null?listAccount=[]:listAccount=dataList
    var newlist=listAccount.filter(list =>{
       return list.account==input.value 
    })
    if(newlist.length==0){
        showErorr(input,"Sai tài khoản đăng nhập !")
    }
    else{
        newlist.forEach(items =>{
            items.password==password.value?
               (showSuccess(password),
                localStorage.setItem("account",account.value),
                localStorage.setItem("password",password.value),
                istrue=true):
                showErorr(password,"Mật khẩu đăng nhập không chính sát !")
        })
    }
    return istrue;
}

btn.addEventListener("click",()=>{
    let check=checkAccount(account,password)
    check==true?(document.querySelector(".a-2").click()):""
})

function createBodyForgetPassword(){
    var mainBody=document.querySelector("main")
        var bodyForget=document.createElement("div")
        bodyForget.className="main-input"
        var content=`
            <input class="forget forget-account" type="text" placeholder="Nhap tai khoan">
            <input class="forget forget-password" type="text" placeholder="Nhap Gmail">
            <button class="btn-forget">Lấy lại mật khẩu</button>
            <span class="point-2">X</span>
        `
        bodyForget.innerHTML=content
        mainBody.append(bodyForget)
        document.querySelector(".forget").addEventListener("click",()=>{
            bodyForget.classList.toggle("active")
        })
        document.querySelector(".point-2").addEventListener("click",()=>{
            bodyForget.classList.toggle("active")
        })

        var btnForget=document.querySelector(".btn-forget")
        var input=document.querySelector(".forget-account")
        var password=document.querySelector(".forget-password")
        btnForget.addEventListener("click",()=>{
            forgetPassword(input,password)
        })
}

createBodyForgetPassword()

function forgetPassword(input,mail){
    var listAccount
    var dataList=JSON.parse(localStorage.getItem("listAccount"))
    dataList==null?listAccount=[]:listAccount=dataList
    var newList= listAccount.filter(items=>{
        return(items.account==input.value && items.email==mail.value)
    })
    if(newList.length==0){
        showErorr(input,"sai tai khoan hoac email dang ky !")
    }
    else{
        newList.forEach(items=>{
            alert(`Mật khẩu của bạn là: ${items.password}`)
        })
    }
}