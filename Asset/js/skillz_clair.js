// ------------- MATRICE JAVASCRIPT -----------------------


// TARGET DOM

function byId(n) {
    return document.getElementById(n)
}


/*-----------------New Script--------------------------*/


document.addEventListener("DOMContentLoaded", function(event){
    console.log("loaded")
    setInterval(function(){
        const video = byId("myVideo")
        video.style.display = "none"
    }, 1000)

    setInterval(function(){
        const video = byId("myVideo")
        video.style.display = "flex"
        setTimeout(function(){
            const video = byId("myVideo")
        video.style.display = "none"
        },500)
    }, 15000)

    setInterval(function(){
        let cube2 = byId("rubix2")
        let don = byId("gift")
        let don2 = byId("gift2")
        let fond = byId("page")
        cube.style.display = "none"
        cube2.style.display = "flex"
        don.style.display = "none"
        don2.style.display = "flex"
        fond.style.filter = "blur(5px)"
        setTimeout(function(){
            let cube2 = byId("rubix2")
            let don = byId("gift")
            let don2 = byId("gift2")
            let fond = byId("page")
            cube.style.display = "flex"
            cube2.style.display = "none"
            don.style.display = "flex"
            don2.style.display = "none"
            fond.style.filter = "blur(0px)"
        }, 500)
    }, 15000)

    const push = byId("contact")
    push.addEventListener("click", function(){
        let txt2= byId("correspondance")
        txt2.classList.toggle("switch")
    })

    const hamburger = byId("hamburger")
    const bande = byId("message")
    const exit = byId("close")
    hamburger.addEventListener("click", function(){
        bande.style.display = "block"
            })   
    exit.addEventListener("click", function(){
        bande.style.display = "none"   
    })

    /*Rubix skillz script*/

    function changeSkill(url, name, details){
        this.url = url,
        this.name = name,
        this.details = details
    }

    const agile = new changeSkill("../img/rubix/agile.png", "Agile", "Niveau Scrum Rookie")
    const creativite = new changeSkill("../img/rubix/ampoule.png", "Creativité",  "Niveau Da Vinci Style")
    const collectif = new changeSkill("../img/rubix/barca.png", "Collectif", "Niveau League des Champions")
    const ajax = new changeSkill("../img/rubix/ajax.png", "Ajax", "Niveau Startin' Block")
    const bitcoin = new changeSkill("../img/rubix/bitcoin.png", "Blockchain", "Niveau Big Follower")
    const bootstrap = new changeSkill("../img/rubix/bootstrap.png", "Bootstrap", "Niveau Framework Friendly")
    const chess = new changeSkill("../img/rubix/chess.png", "Vision", "Niveau Kasparov")    
    const confiance = new changeSkill("../img/rubix/contrat.png", "Fiablilité", "Niveau Gold")
    const css = new changeSkill("../img/rubix/css.png", "CSS", "Niveau Big Homie")
    const ambition = new changeSkill("../img/rubix/eagle.png", "ambition", "Niveau Sky is the Limit")
    const html = new changeSkill("../img/rubix/html.png", "HTML", "Niveau Best Friend")
    const jquery = new changeSkill("../img/rubix/jquery.png", "jquery", "Niveau Flirt")
    const js = new changeSkill("../img/rubix/js_logo.png", "JavaScript", "Niveau Padawan")
    const time = new changeSkill("../img/rubix/kronos.png", "Time Management", "Niveau Hiro Nakamura")
    const git = new changeSkill("../img/rubix/git.png", "Git", "Niveau Commit")
    const lannister = new changeSkill("../img/rubix/lannister.png", "Challenger", "Niveau Lannister")
    const loisir = new changeSkill("../img/rubix/loisir.png", "Love Appeal", "Niveau Legendary")
    const sql = new changeSkill("../img/rubix/mysql_logo.png", "sql", "Niveau first Kiss")
    const opquast = new changeSkill("../img/rubix/opquast.png", "opquast", "Niveau Coming up")
    const proposition = new changeSkill("../img/rubix/advisory.png", "Force de proposition", "Niveau Proposition Joe")
    const photoshop = new changeSkill("../img/rubix/photoshop.png", "Photoshop", "Niveau Love Story")
    const php = new changeSkill("../img/rubix/php.png", "php", "Niveau Discovery")
    const communication = new changeSkill("../img/rubix/reunion.png", "Communication", "Niveau 5G")
    const skillz = new changeSkill("../img/rubix/skillz.png", "Learning Curve", "Niveau Fast & Furious")
    const star = new changeSkill("../img/rubix/star.png", "Lucky Star", "Niveau SuperNova")
    const motivation = new changeSkill("../img/rubix/superman.png", "Motivation", "Niveau D-Terminator")
    const stressMaster = new changeSkill("../img/rubix/yin_yang.png", "Stress Master", "Niveau Maître Yoda")

    var tab = [sql, css, ajax, html, js, php, git, jquery, bootstrap, photoshop, agile, opquast, confiance, creativite, ambition, communication, loisir, time, skillz, stressMaster, chess, motivation, proposition, collectif, bitcoin, star, lannister]

    const icon = byId("blaze")
    const slide = byId("skill_slide")
    const blaze = byId("denomination")
    const information = byId("info")

    for(let i = 0; i < 27; i++){
        var rubix = document.querySelectorAll('.cube')
        rubix[i].addEventListener("mouseover", function(){
            icon.src = tab[i].url;
            blaze.innerHTML = tab[i].name;
            information.innerHTML = tab[i].details
            slide.style.zIndex = "2"
            slide.style.opacity = "1"
            slide.style.transition = "opacity 1s"     
        })
        rubix[i].addEventListener("mouseleave", function(){
            icon.src = ""
            blaze.innerHTML = ""
            information.innerHTML = ""
            slide.style.opacity = "0"
            slide.style.transition = "opacity 2s"
            slide.style.zIndex = "0"
        })
    }
    
})

