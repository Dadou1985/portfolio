// ------------- MATRICE JAVASCRIPT -----------------------

// TARGET DOM

function byId(n) {
    return document.getElementById(n)
}

function eventListener(a,b) {
    let elem = byId(a)
    elem.addEventListener("click", b)
}

function toggle(a, b, c){
    let show = byId(a)
    show.addEventListener("click", function(){
        let txt2= byId(b)
        txt2.classList.toggle(c)

    })
}

/*-----------------New Script--------------------------*/

document.addEventListener("DOMContentLoaded", function(event){
   
    setInterval(function(){
        const video = byId("myVideo")
        video.style.display = "none"
    }, 500)

    setInterval(function(){
        const video = byId("myVideo")
        video.style.display = "flex"
        setTimeout(function(){
            const video = byId("myVideo")
        video.style.display = "none"
        },500)
    }, 15000)

    console.log("loaded")

    toggle("activ", "pitch", "switch")
    toggle("contact", "correspondance", "switch")
    
    const hamburger = byId("hamburger")
    const slide = byId("message")
    const exit = byId("close")
    hamburger.addEventListener("click", function(){
        slide.style.display = "flex"
            })   
    exit.addEventListener("click", function(){
        slide.style.display = "none"   
    })
})

