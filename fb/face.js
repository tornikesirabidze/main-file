const facediv = document.getElementById("face");
const fbimg= document.getElementById("fbicon")
const videopg= document.getElementById("video")
const marketbtn= document.getElementById("media")
const grouptbtn= document.getElementById("groups")
let index = true

let showOrHide = function(){
    if(index){
        facediv.style.display = "none";
        index= false
    }else {
        facediv.style.display = "block";
        index= true
    }
}




fbimg.addEventListener("click", function(){
    window.location.href="face.html"
})

videopg.addEventListener("click", function(){
    window.location.href="video.html"
})

marketbtn.addEventListener("click", function(){
    window.location.href="marketplace.html"
})

grouptbtn.addEventListener("click", function(){
    window.location.href="groups.html"
})