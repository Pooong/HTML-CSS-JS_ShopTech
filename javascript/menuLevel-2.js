var bodyMenuphone=document.querySelector(".menu-phone")
var bodyMenuTaplet=document.querySelector(".menu-taplet")
var bodyMenuAccessory=document.querySelector(".menu-accessory")
function createMenuPhoneLV2(menu){
    var warpper=document.createElement("div")
    warpper.className="items-level-2"
    var content=`
    <ul class="list-menu">
    <li class="items-list-menu">
        <h5>HÃNG SẢN XUẤT</h5>
        <ul class="list-local">
            <li><a href="#">Apple</a></li>
            <li><a href="#">Samsung</a></li>
            <li><a href="#">Xiaomi</a></li>
            <li><a href="#">Nokia</a></li>
            <li><a href="#">Vivo</a></li>
            <li><a href="#">Oppo</a></li>
            <li><a href="#">realme</a></li>
            <li><a href="#">Tecno</a></li>
        </ul>
    </li>
    <li class="items-list-menu list-price">
        <h5>MỨC GIÁ</h5>
        <ul class="list-price">
            <li><a href="#">Dưới 2 triệu</a></li>
            <li><a href="#">Từ 2 đến 4 triệu</a></li>
            <li><a href="#">Từ 4 đến 7 triệu</a></li>
            <li><a href="#">Từ 7 đến 13 triệu</a></li>
            <li><a href="#">Trên 13 triệu</a></li>
        </ul>
    </li>
    <li class="items-list-menu">
        <h5>BÁN CHẠY NHẤT</h5>
        <ul class="list-product-buy">
            <li><a href="#">
                <div class="product">
                   <img src="./img/List_img_product/sp1.png" alt="" class="img-product"> 
                    <div class="product-content">
                        <h4 class="name-product">Oppo A95</h4>
                        <span class="product-price">5.600.000 <u>đ</u></span>
                    </div>
                </div>
            </a></li>
            <li><a href="#">
                <div class="product">
                    <img src="./img/List_img_product/sp2.png" alt="" class="img-product"> 
                     <div class="product-content">
                         <h4 class="name-product">Realme note 11</h4>
                         <span class="product-price">7.400.000 <u>đ</u></span>
                     </div>
                 </div>
            </a></li>
        </ul>
    </li>
    <div class="items-list-menu">
        <div class="banner-menu">
            <img src="./img/list_img_banner/banner-1.png" alt="">
        </div>
    </div>
</ul>
    `
    warpper.innerHTML=content
    menu.append(warpper)
}
function createMenuPhoneLV2_taplet(menu){
    var warpper=document.createElement("div")
    warpper.className="items-level-2"
    var content=`
    <ul class="list-menu">
    <li class="items-list-menu">
        <h5>HÃNG SẢN XUẤT</h5>
        <ul class="list-local">
            <li><a href="#">Apple</a></li>
            <li><a href="#">Samsung</a></li>
            <li><a href="#">Xiaomi</a></li>
            <li><a href="#">Nokia</a></li>
            <li><a href="#">Oppo</a></li>
            <li><a href="#">realme</a></li>
        </ul>
    </li>
    <li class="items-list-menu list-price">
        <h5>MỨC GIÁ</h5>
        <ul class="list-price">
            <li><a href="#">Từ 2 đến 4 triệu</a></li>
            <li><a href="#">Từ 4 đến 7 triệu</a></li>
            <li><a href="#">Từ 7 đến 13 triệu</a></li>
            <li><a href="#">Trên 13 triệu</a></li>
        </ul>
    </li>
    <li class="items-list-menu">
        <h5>BÁN CHẠY NHẤT</h5>
        <ul class="list-product-buy">
            <li><a href="#">
                <div class="product">
                   <img src="./img/List_img_product/sp5.png" alt="" class="img-product"> 
                    <div class="product-content">
                        <h4 class="name-product">Taplet X</h4>
                        <span class="product-price">6.600.000 <u>đ</u></span>
                    </div>
                </div>
            </a></li>
            <li><a href="#">
                <div class="product">
                    <img src="./img/List_img_product/sp6.jpg" alt="" class="img-product"> 
                     <div class="product-content">
                         <h4 class="name-product">Taplet Y</h4>
                         <span class="product-price">9.400.000 <u>đ</u></span>
                     </div>
                 </div>
            </a></li>
        </ul>
    </li>
    <div class="items-list-menu">
        <div class="banner-menu">
            <img src="./img/list_img_banner/banner2.png" alt="">
        </div>
    </div>
</ul>
    `
    warpper.innerHTML=content
    menu.append(warpper)
}
function createMenuPhoneLV2_accessory(menu){
    var warpper=document.createElement("div")
    warpper.className="items-level-2"
    var content=`
    <ul class="list-menu">
    <li class="items-list-menu">
        <h5>CÁC SẢN PHẨM</h5>
        <ul class="list-local">
            <li><a href="#">Thẻ nhớ</a></li>
            <li><a href="#">Loa</a></li>
            <li><a href="#">Tai nghe</a></li>
            <li><a href="#">USB</a></li>
            <li><a href="#">Cap sạc</a></li>
            <li><a href="#">Cóc sạc</a></li>
            <li><a href="#">Sạc dự phòng</a></li>
            <li><a href="#">Miếng dán Màng Hình</a></li>
        </ul>
    </li>
    <li class="items-list-menu list-price">
        <h5>MỨC GIÁ</h5>
        <ul class="list-price">
            <li><a href="#">Dưới 500k</a></li>
            <li><a href="#">Từ 1 đến 2 triệu</a></li>
            <li><a href="#">Từ 2 đến 5 triệu</a></li>
            <li><a href="#">Từ 5 đến 9 triệu</a></li>
        </ul>
    </li>
    <li class="items-list-menu">
        <h5>BÁN CHẠY NHẤT</h5>
        <ul class="list-product-buy">
            <li><a href="#">
                <div class="product">
                   <img src="./img/List_img_product/sp3.png" alt="" class="img-product"> 
                    <div class="product-content">
                        <h4 class="name-product">Sạc dự phòng X</h4>
                        <span class="product-price">700.000 <u>đ</u></span>
                    </div>
                </div>
            </a></li>
            <li><a href="#">
                <div class="product">
                    <img src="./img/List_img_product/sp4.png" alt="" class="img-product"> 
                     <div class="product-content">
                         <h4 class="name-product">Tai nghe x</h4>
                         <span class="product-price">300.000 <u>đ</u></span>
                     </div>
                 </div>
            </a></li>
        </ul>
    </li>
    <div class="items-list-menu">
        <div class="banner-menu">
            <img src="./img/list_img_banner/banner3.png" alt="">
        </div>
    </div>
</ul>
    `
    warpper.innerHTML=content
    menu.append(warpper)
}
createMenuPhoneLV2(bodyMenuphone)
createMenuPhoneLV2_taplet(bodyMenuTaplet)
createMenuPhoneLV2_accessory(bodyMenuAccessory)