var listInfoProduct=[
    {   
        img:"./img/List_img_product/phone/phone-1.png",
        sale:"1.500.000",	
        nameProduct:"Xiaomi Redmi Note 11 Pro",
        newPrice:"8.490.000",
        oldPrice:"9.990.000",
        chip:"MediaTek Dimensity 920 5G (6 nm)",
        dektop:"6.67",
        ram :" 8",
        rom : "256" 
    },    
    {   
        img:"./img/List_img_product/phone/phone-2.png",
        sale : "6.000.000",	
        nameProduct : "Samsung Galaxy S22 Ultra",
        newPrice : "24.990.000",
        oldPrice : "30.990.000",
        chip: "Qualcomm Snapdragon 8 Gen 1 (4 nm)",
        dektop : "6.8",
        ram : "8",
        rom : "128"

    },    
    {   
        img:"./img/List_img_product/phone/phone-4.png",
        sale : "1.300.000",	
        nameProduct : "POCO X4 GT",
        newPrice : "7.190.000",
        oldPrice : "8.490.000",
        chip: "MediaTek Dimensity 8100",
        dektop : "6.6",
        ram : "8",
        rom : "128"


    },    
    {   
        img:"./img/List_img_product/phone/phone-5.png",
        sale : "340.000",	
        nameProduct : "Vivo Y22S",
        newPrice : "5.650.000",
        oldPrice : "5.990.000",
        chip: "Qualcomm Snapdragon 680",
        dektop : "6.55",
        ram : "8",
        rom : "128"


    },    
    {   
        img:"./img/List_img_product/phone/phone-6.png",
        sale : "800.000",	
        nameProduct : "Realme C35 4GB 64",
        newPrice : "3.490.000",
        oldPrice : "4.290.000",
        chip: "Unisoc T616 8 nhân",
        dektop : "6.6",
        ram : "4GB",
        rom : "64"


    },    
]

var listInfoProduct_2=[
  {
        img:"./img/List_img_product/taplet/taplet-1.png",
        sale : "1.100.000",	
        nameProduct : "Xiaomi Redmi Pad 3GB-64",
        newPrice : "5.190.000",
        oldPrice : "6.290.000",
        GPU : "MediaTek Helio G99",
        CPU : "Mali-G57",
        dektop : "10.61",
        ram : "3GB",
        rom : "64"
    },
    {
        img:"./img/List_img_product/taplet/taplet-3.png",
        sale : "1.000.000",	
        nameProduct : "Masstel Tab 10 Wifi",
        newPrice : "1.990.000",
        oldPrice : "2.990.000",
        GPU : "Mali-G52 2EE",
        dektop : "10.1",
        ram : "2GB",
        rom : "32GB"

    },
    {
        img:"./img/List_img_product/taplet/taplet-4.png",
        sale : "500.000",	
        nameProduct : "OPPO Pad Air",
        newPrice : "6.490.000",
        oldPrice : "6.990.000",
        GPU : "Adreno 610",
        CPU : "Snapdragon 680",
        dektop : "10.36",
        ram : "4GB",
        rom : "64"
    },
    {
        img:"./img/List_img_product/taplet/taplet-5.png",
        sale : "400.000",	
        nameProduct : "Coolpad Tab Tasker 10 Wifi",
        newPrice : "2.590.000",
        oldPrice : "2.990.000",
        GPU : "Adreno 308",
        CPU : "Snapdragon 215",
        dektop : "10.0",
        ram : "3",
        rom : "32"

    },
]


var listInfoProduct_3=[
    {   
        img:"./img/List_img_product/access/access-1.png",
        sale:"200.000",	
        nameProduct:"Tai nghe Bluetooth TWS",
        newPrice:"2.390.000",
        oldPrice:"2.590.000",
        chip:"MediaTek Dimensity 920 5G (6 nm)",
        dektop:"6.67",
        ram :" 8",
        rom : "256GB" 
    },
    {   
        img:"./img/List_img_product/access/access-2.png",
        sale:"300.000",	
        nameProduct:"Tai nghe Bluetooth Belkin",
        newPrice:"1.900.000",
        oldPrice:"2.2000.000",
        chip:"MediaTek Dimensity 920 5G (6 nm)",
        dektop:"6.67",
        ram :" 8",
        rom : "256GB" 
    },   
    {   
        img:"./img/List_img_product/access/access-3.png",
        sale:"200.000",	
        nameProduct:"Tai nghe gamming Corsair",
        newPrice:"890.000",
        oldPrice:"1.090.000",
        chip:"MediaTek Dimensity 920 5G (6 nm)",
        dektop:"6.67",
        ram :" 8",
        rom : "256GB" 
    }
]

var bodyProduct=document.querySelector(".body-product-3 .list-product")

function createListProduct(list,class_n){
     list.forEach(items =>{
        var warpper=document.createElement("li")
        var contentProduct=`
        <div class="img-product">
            <img src="${items.img}" alt="">
            <div class="list-sale">
                <span class="sale-buy">Trả góp 0%</span>
                <span class="sale-price">Giảm ${items.sale}<u>đ</u></span>
            </div>
        </div>
        <div class="content-product">
            <h2 class="product-name">
                ${items.nameProduct}
            </h2>
            <div class="product-price">
                <h3 class="price">${items.newPrice}<u>đ</u></h3>
                <h3 class="old-price">${items.oldPrice} <u>đ</u></h3>
            </div>
            <div class="pay">
                <div class="list-tech">
                    <span class="items-tech">
                        <ion-icon name="hardware-chip-outline"></ion-icon>
                        ${items.chip}
                    </span>
                    <span class="items-tech">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                        ${items.dektop}inch
                    </span>
                 
                    <span class="items-tech">
                        <ion-icon name="save-sharp"></ion-icon>
                       ${items.ram}GB
                    </span>
                    <span class="items-tech">
                        <ion-icon name="file-tray-full-sharp"></ion-icon>
                        ${items.rom}GB
                    </span>
                </div>
                <div class="lsit-pay">
                    <img src="./img/MoMo_Logo.png" alt="">
                    <img src="./img/MoMo_Logo.png" alt="">
                    <img src="./img/MoMo_Logo.png" alt="">
                </div>
                <div class="list-button">
                    <button class="buy-now">Mua Ngay</button>
                    <button class="add-cart">Add to cart</button>
                </div>
            </div>
        </div>
        `
        warpper.innerHTML=contentProduct;
        warpper.className="product-items"
        warpper.classList.add(class_n)
        bodyProduct.append(warpper)
    })
}
createListProduct(listInfoProduct,"type-product_phone");
createListProduct(listInfoProduct_2,"type-product_taplet");
createListProduct(listInfoProduct_3,"type-product_access");



var lsitSlect=document.querySelectorAll(".body-product-3 .list-select .select-items")
var listProduct=document.querySelectorAll(".body-product-3 .list-product .product-items")
var listProduct_1=document.querySelectorAll(".body-product-3 .list-product .product-items.type-product_phone")
var listProduct_2=document.querySelectorAll(".body-product-3 .list-product .product-items.type-product_taplet")
var listProduct_3=document.querySelectorAll(".body-product-3 .list-product .product-items.type-product_access")

lsitSlect.forEach((items,index) =>{
    items.addEventListener("click",()=>{
        lsitSlect.forEach(items_2 =>{
            items_2.classList.remove("active")
        })
        items.classList.add("active")
        listProduct.forEach(itemsProduct =>{
            itemsProduct.classList.add("active")
        })

        sort(index,0,listProduct_1,"active")
        sort(index,1,listProduct_2,"active")
        sort(index,2,listProduct_3,"active")
    })
})

function sort(idx,n,list,class_n){
    if(idx==n){
        list.forEach(items =>{
            items.classList.remove(class_n)
        })
    }
}