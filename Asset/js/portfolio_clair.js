document.addEventListener("DOMContentLoaded", function(event){
    console.log("loaded")
    setInterval(function(){
        const video = byId("myVideo")
        video.style.display = "none"
    }, 700)

    setInterval(function(){
        const video = byId("myVideo")
        video.style.display = "flex"
        setTimeout(function(){
            const video = byId("myVideo")
        video.style.display = "none"
        },500)
    }, 15000)



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

  
    toggle("contact", "correspondance", "switch")
    

    const press = byId("button")
    const channel = byId("back")
    const channel2 = byId("back2")
    const channel3 = byId("back3")

    const hamburger = byId("hamburger")
    const slide = byId("message")
    const exit = byId("close")
    hamburger.addEventListener("click", function(){
        slide.style.display = "block"
            })   
    exit.addEventListener("click", function(){
        slide.style.display = "none"   
    })

    function backUp() {
        channel.style.display = "flex"
        channel2.style.display = "none"
        channel3.style.display = "none"
    }

    function backUp2() {
        channel.style.display = "none"
        channel2.style.display = "flex"
        channel3.style.display = "none"
    }

    function backUp3() {
        channel.style.display = "none"
        channel2.style.display = "none"
        channel3.style.display = "flex"
    }

    press.addEventListener("click", function(){
        if(channel.style.display == "none" && channel2.style.display == "none"){
            return backUp()
        }else if(channel2.style.display == "none" && channel3.style.display == "none"){
            return backUp2()
        }else{
            return backUp3()
        }
    })

   

})

