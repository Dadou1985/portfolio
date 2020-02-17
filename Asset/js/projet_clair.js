// ------------- MATRICE JAVASCRIPT -----------------------


// TARGET DOM

function byId(n) {
    return document.getElementById(n)
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
    console.log("loaded")
    setInterval(function(){
        const video = byId("myVideo")
        video.style.display = "none"
    }, 500)

    setInterval(function(){
        const video = byId("myVideo")
        video.style.display = "none"
        setTimeout(function(){
            const video = byId("myVideo")
            video.style.display = "flex"
        },500)
    }, 15000)
    

    toggle("activ", "details", "switch")
    toggle("activ2", "details2", "switch")
    toggle("activ3", "details3", "switch")
    toggle("contact", "correspondance", "switch")

    const hamburger = byId("hamburger")
    const slide = byId("message")
    const exit = byId("close")
    hamburger.addEventListener("click", function(){
        slide.style.display = "block"
            })   
    exit.addEventListener("click", function(){
        slide.style.display = "none"   
    })

})

