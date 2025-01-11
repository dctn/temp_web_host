gsap.registerPlugin(ScrollTrigger) 
if (window.innerWidth<=425){
    gsap.from(".report_text div",{
        x:700,
        repeat:-1,
        duration:15
    })
    gsap.to(".report_text div",{
        x:-550,
        repeat:-1,
        duration:15,
        ease:"linear"
    })

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
}

var x = 1100


var tl = gsap.timeline()
tl.from(".start h1",{
    x:200,
    opacity:0,
    stagger:0.2,
    duration:1
})
tl.to(".start h1",{
    delay:0.5,
    x:-200,
    opacity:0,
    stagger:0.2,
    duration:1
})
tl.to(".start",{
    opacity:0,
    delay:0.5,
    display: "none",
    // onComplete: () => document.getElementsByClassName("start").style.display = "none"
})

if (window.innerWidth>425){
    tl.from("nav ul li , nav div",{
        y:-200,
        duration:1,
        stagger:0.2
    })
    
    
    
    gsap.from(".brand",{
        opacity:0,
        duration:5
    })
    
    var x1  = 1000
    gsap.from(".right ",{
        x:-x1,
        stagger:0.5,
        duration:2,
        scrollTrigger:{
            trigger:".right",
            markers: false,
            start: "top 70%",
        }
    })
    
    gsap.from(".left ",{
        x:x1,
        stagger:0.5,
        duration:2,
        scrollTrigger:{
            trigger:".left",
            markers: false,
            start: "top 70%",
        },
    })


    gsap.from(".ani_left ",{
        x:1200,
        stagger:0.5,
        duration:2,
        scrollTrigger:{
            trigger:".ani_left",
            markers: false,
            start: "top 50%",
        },
    })

    gsap.from(".ani_right ",{
        x:-1200,
        stagger:0.5,
        duration:2,
        scrollTrigger:{
            trigger:".ani_right",
            markers: false,
            start: "top 50%",
        },
    })

    gsap.from(".report_text div",{
        y:500,
        stagger:0.7,
        duration:1.5,
        opacity:0,
        scrollTrigger:{
            trigger:".report_text",
            markers: false,
            start: "-80% 70%",
        },
    })
}

// left to right
tl.from(".header_text * ",{
    x:-x,
    duration:2,
    stagger:0.5,
    opacity:0
})

gsap.from(".header_img img",{
    x:x,
    duration:2,
    stagger:0.2,
    opacity:0.5,
    delay:6
})
tl.from(".frame",{
    opacity:1
})