document.addEventListener('DOMContentLoaded', (event) => {
    const image1 = document.getElementById("suboption1.1");
    const image2 = document.getElementById("suboption1.2");
    const image4 = document.getElementById("suboption2.2");
    const image5 = document.getElementById("suboption2.3");
    image1.addEventListener("click", function(){
        alert("click here for coupons!")
    })
    image2.addEventListener("click", function(){
        alert("click here for coupons!")
    })
    image4.addEventListener("click", function(){
        alert("click here for coupons!")
    })
    image5.addEventListener("click", function(){
        alert("click here for coupons!")
    })
});
/*i was trying to do a much more complicated event where i click an invisble image,
it appears, then clicked again to make it disapear. 

const image1 = document.getElementById("suboption1.1");
image1.addEventListener("click", function changeSrc1 (){
    if (image1.src') === "") {
    image1.src = "/Applications/Epson Software/Print CD/Background/10001.jpg");
};
    if (image1.src') !== "") {
    image1.src= null);
};
});*/
