document.querySelector(".information > img").addEventListener("click" , ()=>{
    document.querySelector(".information").style.animation = "informationDisappear 200ms ease-in-out forwards";
    setTimeout(() => {
        document.querySelector(".information").parentElement.removeChild(document.querySelector(".information"));
    }, 200);
});