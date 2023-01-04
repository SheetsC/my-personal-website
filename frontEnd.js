function changeSrc1 (){
    if (src === "") {
        element.setAttribute(src, "/Applications/Epson Software/Print CD/Background/10001.jpg")
    }
    if (src !== "") {
        element.setAttribute(src, null)
    }
} 
 const image1 = document.getElementById("suboprtion1,1")
 image1.addEventListener("click", changeSrc1)
