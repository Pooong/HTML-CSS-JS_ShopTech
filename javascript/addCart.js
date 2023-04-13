var dataTodoList=JSON.parse(localStorage.getItem("todolist"))
var todolist
dataTodoList==null?todolist=[]:todolist=dataTodoList
var listButton=document.querySelectorAll(".product-items .buy-now")
listButton.forEach(items =>{
    items.addEventListener("click",()=>{
        var mainProduct=items.parentElement.parentElement.parentElement.parentElement
        var imgProduct=mainProduct.querySelector(".img-product img").src
        var nameProduct=mainProduct.querySelector(".content-product .product-name").innerText
        var newPriceProduct=mainProduct.querySelector(".product-price .price").innerText
        var oldPriceProduct=mainProduct.querySelector(".product-price .old-price").innerText
        updata(imgProduct,nameProduct,newPriceProduct,oldPriceProduct)
        amoutProduct()
    })
})
function updata(img,name,price,oldPrice){
    var dataProduct={
        img:img,
        name:name,
        price:price,
        oldPrice:oldPrice
    }
    todolist.push(dataProduct)
    localStorage.setItem("todolist",JSON.stringify(todolist))
}

function amoutProduct(){
    var cart=document.querySelector(".cart")
    var amout=document.createElement("div")
    var content=todolist.length 
    amout.innerHTML=content
    amout.className="amout-items"
    cart.append(amout)
    if(todolist.length==0){
    amout.style.transform="scale(0)"
    }
}
amoutProduct()