var nav = document.querySelector(".main_menu")

function toggle_menu(){
    const currentDisplay = getComputedStyle(nav).display;
    if (currentDisplay == "none"){
        nav.style.display = "flex"
    }
    else{
        nav.style.display = "none"
    }
}

gsap.from(".header_text * ",{
    x:-x,
    duration:2,
    stagger:0.5,
    opacity:0
})