const btn = document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button,index){
    //console.log(button,index)
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H1").innerText
        var productPrice = product.querySelector("span").innerText
        addcart(productPrice, productImg,productName)
    }})   
})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var trcontent = '<tr><td style="display: flex; align-items:center;"><img style="width: 70px;" src="'+productImg+'" alt="">'+productName+'</td><td><p><span>'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 35px;outline: none;" type="number" value="36" min="36" max="47"></td><td style="cursor:pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)
    deletetCart()
    carttotal()   
}
//-----deletet cart-------//
function deletetCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
           var cartDelete = event.target
           var cartitemR = cartDelete.parentElement.parentElement
           cartitemR.remove()
        })
    }

}