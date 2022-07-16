
let progress = document.querySelector(".progressBar");
let totalHeight = document.querySelector(".app").scrollHeight - window.innerHeight;

//init 
progress.style.height = "0%";
document.querySelector(".app").onscroll = function(){
    let progressHeight = (document.querySelector(".app").scrollTop / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}