var listInfoProduct=[
    {   
        img:"./img/List_img_product/access/img-1.png",
        sale:"1.000.000",	
        nameProduct:"Tai Nghe Airpods Pro 2021",
        newPrice:"4.490.000",
        oldPrice:"5.990.000",
        loai: "Tai nghe không dây",
        connect:"BlueTooth"
    }, 
    {   
        img:"./img/List_img_product/access/img-2.png",
        sale:"200.000",	
        nameProduct:"Loa BlueTooth I.value BS03",
        newPrice:"590.000",
        oldPrice:"790.000",
        loai: "Loa BlueTooth",
        connect:"BlueTooth"
    }, 
    {   
        img:"./img/List_img_product/access/img-2.png",
        sale:"200.000",	
        nameProduct:"Loa BlueTooth I.value BS03",
        newPrice:"590.000",
        oldPrice:"790.000",
        loai: "Loa BlueTooth",
        connect:"BlueTooth"
    }, 
    {   
        img:"./img/List_img_product/access/img-3.png",
        sale:"200.000",	
        nameProduct:"Tai nghe Beats Fit Pro True Wireless Earbuds",
        newPrice:"4.590.000",
        oldPrice:"4.790.000",
        loai: "Tai nghe không dây",
        connect:"BlueTooth"
    }, 
    {   
        img:"./img/List_img_product/access/img-4.png",
        sale:"100.000",	
        nameProduct:"Củ sạc Apple Power Adapter 67W Type-C",
        newPrice:"1.899.000",
        oldPrice:"1.999.000",
        loai: "Adapter Sạc",
        connect:"LapTop, Máy tính để bàn"
    }, 
    {   
        img:"./img/List_img_product/access/img-5.png",
        sale:"1.000.000",	
        nameProduct:"Tai nghe AirPods Max",
        newPrice:"12.990.000",
        oldPrice:"13.990.000",
        loai: "Tai nghe chụp tai",
        connect:"BlueTooth"
    }, 
    {   
        img:"./img/List_img_product/access/img-6.png",
        sale:"1.000.000",	
        nameProduct:"Bàn di chuột Magic Trackpad 2 2021",
        newPrice:"3.590.000",
        oldPrice:"3.990.000",
        loai: "Chuột không dây",
        connect:"BlueTooth"
    }, 
    {   
        img:"./img/List_img_product/access/img-6.png",
        sale:"1.000.000",	
        nameProduct:"Bàn di chuột Magic Trackpad 2 2021",
        newPrice:"3.590.000",
        oldPrice:"3.990.000",
        loai: "Chuột không dây",
        connect:"BlueTooth"
    }, 
    {   
        img:"./img/List_img_product/access/img-7.png",
        sale:"300.000",	
        nameProduct:"Chuột Magic Mouse 2 2022",
        newPrice:"2.690.000",
        oldPrice:"2.990.000",
        loai: "Chuột không dây",
        connect:"BlueTooth"
    }, 
    {   
        img:"./img/List_img_product/access/img-8.png",
        sale:"200.000",	
        nameProduct:"Tai nghe AirPods 3 2021",
        newPrice:"4.790.000",
        oldPrice:"4.990.000",
        loai: "Tai nghe không dây",
        connect:"BlueTooth"
    }, 
    {   
        img:"./img/List_img_product/access/img-8.png",
        sale:"200.000",	
        nameProduct:"Tai nghe AirPods 3 2021",
        newPrice:"4.790.000",
        oldPrice:"4.990.000",
        loai: "Tai nghe không dây",
        connect:"BlueTooth"
    }, 
    {   
        img:"./img/List_img_product/access/img-9.png",
        sale:"100.000",	
        nameProduct:"Dây sạc Apple Magsafe Charger to USB-C Cable 1m",
        newPrice:"1.790.000",
        oldPrice:"1.890.000",
        loai: "Cáp sạc",
        connect:"Điện Thoại"
    }, 
    {   
        img:"./img/List_img_product/access/img-10.png",
        sale:"100.000",	
        nameProduct:"Bàn phím Apple Magic Keyboard 2021 Touch ID and Numeric Keypadm",
        newPrice:"1.790.000",
        oldPrice:"1.890.000",
        loai: "Bàn phím không dây",
        connect:"BlueTooth"
    }, 
    {   
        img:"./img/List_img_product/access/img-11.png",
        sale:"1.000.000",	
        nameProduct:"Sạc dự phòng MagSafe Battery Pack",
        newPrice:"1.990.000",
        oldPrice:"2.990.000",
        loai: "Sạc dự phòng Không dây",
        connect:"Iphone"
    }, 
    {   
        img:"./img/List_img_product/access/img-12.png",
        sale:"40.000",	
        nameProduct:"Thẻ nhớ Toshiba 32GB Class 10 UHS-1 M203 ",
        newPrice:"210.000",
        oldPrice:"250.000",
        DungLuong : "32GB",
        connect:"Máy tính bảng, điện thoại"
    }, 
    {   
        img:"./img/List_img_product/access/img-13.png",
        sale:"300.000",	
        nameProduct:"Thẻ nhớ Sandisk 200GB Class 10 100 MB/s",
        newPrice:"1.090.000",
        oldPrice:"1.390.000",
        DungLuong : "100GB",
        connect:"Máy tính bảng, điện thoại"
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
                      <span class="sale-price">Giảm ${items.sale}<u>đ</u></span>
             </div>
         </div>
         <div class="content-product">
             <h2 class="product-name">
                     ${items.nameProduct} 
                  <div class="product-price">
                  <h3 class="price">${items.newPrice}<u>đ</u></h3>
                 <h3 class="old-price">${items.oldPrice}<u>đ</u></h3>
              </div>
             <div class="pay">
                 <div class="list-tech">
                      <span class="items-tech">
                          <ion-icon name="headset-outline"></ion-icon>
                         ${items.loai}
                      </span>
                     <span class="items-tech">
                          <ion-icon name="bluetooth-outline"></ion-icon>
                         ${items.connect}
                      </span>
                  </div>
                  <div class="lsit-pay">
                      <img src="./img/MoMo_Logo.png" alt="">
                      <img src="./img/MoMo_Logo.png" alt="">
                      <img src="./img/MoMo_Logo.png" alt="">
                  </div>
                  <div class="list-button button-accessory">
                      <button class="buy-now">Mua Ngay</button>
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