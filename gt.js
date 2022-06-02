var count = 0;
var bt1 = document.querySelector(".tang");
bt1.addEventListener("click", myClick1);
var bt2 = document.querySelector(".giam");
bt2.addEventListener("click", myClick3)
function myClick1(){
    count++;
    hienthi(count);
}
function myClick2(){
    count = 0;
    hienthi(count);
}
function myClick3(){
    count--;
    hienthi(count);
}
function hienthi(x){
    var value = document.getElementById("value");
    value.innerText = x;
    if ( x > 0){
        value.style.color = "red";
    }
    else if ( x == 0){
        value.style.color = "black";
    }else{
        value.style.color = "red";
    }

}
