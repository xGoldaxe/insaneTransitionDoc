import {animation1} from "./animation1";
import {animation2} from "./animation2";
import {animation3} from "./animation3";
import {animation4} from "./animation4";
import {scrollToPlace} from "./scrollToPlace";

window.addEventListener("load",() => {
    animation3(document.querySelector(".loadingScreen--wrapper"), "#B79D9D", "#B17575", "#973B3B", 0.5).
    then(()=> {
        document.querySelector(".loadingScreen--wrapper").style.display = "none";
    });
    setTimeout(() => {
        document.querySelector(".loadingScreen").style.display = "none";
    }, 1000);
});


let animationPlaying = false;
document.getElementById("anim1").addEventListener("click", ()=> {
    scrollToPlace();
    animation1(document.querySelector(".--wrapper"), "#B79D9D", "#B17575", "#973B3B", 0.5, ()=>{console.log("test");})
    .then(()=> {
        console.log("animation over");
    })
});

document.getElementById("anim2").addEventListener("click", ()=> {
    scrollToPlace();;
    animation2(document.querySelector(".--wrapper"), "#B79D9D", "#B17575", "#973B3B", 0.5, ()=>{console.log("test");})
    .then(()=> {
        console.log("animation over");
    })
});

document.getElementById("anim3").addEventListener("click", ()=> {
    scrollToPlace();;
    animation3(document.querySelector(".--wrapper"), "#B79D9D", "#B17575", "#973B3B", 0.5, ()=>{console.log("test");})
    .then(()=> {
        console.log("animation over");
    })
});

document.getElementById("anim4").addEventListener("click", ()=> {
    scrollToPlace();
    animation4(document.querySelector(".--wrapper"), "#B79D9D", "#B17575", "#973B3B", 0.5, ()=>{console.log("test");})
    .then(()=> {
        console.log("animation over");
    })
});