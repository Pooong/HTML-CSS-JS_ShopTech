var listInfoProduct=[
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
          img:"./img/List_img_product/taplet/taplet-2.png",
          sale : "1.000.000",	
          nameProduct : "Masstel Tab 10M 4G",
          newPrice : "2.990.000",
          oldPrice : "3.990.000",
          GPU : "PowerVR GE8300",
          CPU : "SCT310",
          dektop : "10.1",
          ram : "3",
          rom : "32"
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