var dataList=JSON.parse(localStorage.getItem("todolist"))
var listProductCart;
dataList==null?listProductCart=[]:listProductCart=dataList;
function createListCart(){
    var mainBody=document.querySelector(".list-cart")
    listProductCart.forEach(items =>{
        var warpper=document.createElement("div")
        var itemsContent=`<img src="${items.img}" alt="">
        <div class="cart-content">
            <h3 class="name mgb">${items.name}</h3>
            <div class="color"><span></span> red</div>
        </div>
        <div class="amout">
            <input type="number" min="1" value="1" class="mgb">
            <span><ion-icon name="trash-outline"></ion-icon>xóa</span>
        </div>
        <div class="price">
            <div class="new-price mgb">${items.price}</div>
            <div class="old-price">${items.oldPrice}</div>
        </div>`
        warpper.className="cart-items"
        warpper.innerHTML=itemsContent
        mainBody.append(warpper)
    })
}
createListCart();
function removeItems(){
    var listItems=document.querySelectorAll(".amout span")
    listItems.forEach((items,index) =>{
        items.addEventListener("click",()=>{
            var listdata=listProductCart;
            listProductCart.splice(index,1)
            localStorage.setItem("todolist",JSON.stringify(listdata))
            createListCart();
            document.querySelector(".reload").click()
        })
    })
}
removeItems()
var imgCart=document.querySelector(".img-cart")
var pay=document.querySelector(".pay-now")
window.onload=function(){
    if(listProductCart.length>0){
        pay.classList.add("active")
    }
    if(listProductCart.length==0){
        imgCart.classList.remove("active")
    }
}