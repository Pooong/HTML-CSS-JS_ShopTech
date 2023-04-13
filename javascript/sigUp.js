var btn=document.querySelector(".btn")
var listInput=document.querySelectorAll(".input input")
var account=document.querySelector(".input .account")
var numberPhone=document.querySelector(".input .mail")
var password=document.querySelector(".input .password")
var passwordConfirm=document.querySelector(".input .passwordCf")

var dataListAccount=JSON.parse(localStorage.getItem("listAccount"))
var listAccount
dataListAccount==null?listAccount=[]:listAccount=dataListAccount

function showErorr(input,text_1){
    var line=input.parentElement.querySelector("span")
    line.style.background="red"
    alert(text_1);
    input.focus();
}
function showSuccess(input){
    var line=input.parentElement.querySelector("span")
    line.style.background="#4f0680"
}
function checkFil(listInput){
    let istrue=false;
    listInput.forEach(items=>{
        if(items.value==""){
            showErorr(items,"không được để trống !")
        }else{
            showSuccess(items)
            istrue=true;
        }
    })
    return istrue;
}
function checkMail(input){
    var istrue=false
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailReg.test(input.value)){
        showErorr(input,"sai định dạng mail !")
    }else{
        showSuccess(input)
        istrue=true
    }
    return istrue
}
function checkLength(input,max,min){
    var istrue=false;
    if(input.value.length>max){
        showErorr(input,`tối đa ${max} ký tự !`)
    }
    if(input.value.length<min){
        showErorr(input,`Ít nhất ${min} ký tự !`)
    }else{
        showSuccess(input)
        istrue=true
    }
    return istrue;
}
function checkPassword(input_1,input_2){
    var istrue=false
    if(input_1.value!=input_2.value){
        showErorr(input_2,"Mật khẩu không trùng khớp !")
    }else
    {
        showSuccess(input_2)
        istrue=true
    }
    return istrue
}
function checkSame(input){
    var istrue=false;
    var listAccount
    var dataList=JSON.parse(localStorage.getItem("listAccount"))
    dataList==null?listAccount=[]:listAccount=dataList
    var newList=listAccount.filter(items =>{
        return items.account==input.value
    })
    if(newList.length>0){
        showErorr(input,"Tài khoản đã tồn tại !")
    }else{
        istrue=true
        showSuccess(input)
    }
    return istrue;
}
btn.addEventListener("click",()=>{
    let fill=checkFil(listInput)
    let mail=checkMail(numberPhone)
    let lenth=checkLength(account,20,5)
    let same=checkSame(account)
    let lenth_password=checkLength(password,12,4)
    let passwordCf=checkPassword(password,passwordConfirm)
    if(fill==true&&mail==true&&lenth==true&&lenth_password==true&&passwordCf==true && same==true){
        alert("Đăng ký thành công")
        document.querySelector(".a-1").click()
        createList(account,numberPhone,password)
    }
})

function createList(account,email,password){
    var itemsListAccount={
        account:account.value,
        email:email.value,
        password:password.value
    }
    listAccount.push(itemsListAccount)
    localStorage.setItem("listAccount",JSON.stringify(listAccount))
}