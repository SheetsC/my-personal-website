function changeSrc (img){
    if (src === "") {
        document.setAttribute(src, data-src)
    }
    if (src !== "") {
        document.setAttribute(src, null)
    }
} 
 const image1 = document.getElementById("suboprtion1,1")
 image1.addEventListener("click", changeSrc)
