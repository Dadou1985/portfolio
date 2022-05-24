import React, { useState } from 'react'
import Contact from '../components/contact'
import Parcours from '../components/parcours'
import Profil from '../components/profil'
import Projet from '../components/projet'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaGithub, FaLinkedinIn, FaYahoo } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiGmail, SiMicrosoftoutlook } from 'react-icons/si'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { BsFillTelephoneFill, BsBackspaceFill } from 'react-icons/bs'
import { AiFillCloseSquare } from "react-icons/ai"

const Index = () => {
  const [child, setChild] = useState("profil")
  const [language, setLanguage] = useState("en")
  const [drawer, setDrawer] = useState(false)
  const [messengerList, setMessengerList] = useState(true)
  const [showPhoneNumber, setShowPhoneNumber] = useState(false)
  const yahooMail = "https://login.yahoo.com/?.src=ym&lang=fr-FR&done=https%3A%2F%2Fmail.yahoo.com%2F%3Fguce_referrer%3DaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%26guce_referrer_sig%3DAQAAAH3vSMEHhMKXJf7BLsfGhIkgkpKc1EhAcvmlY15Sl8vsr9cfM6wU0sthzq_UFmhRMj0PWdYD0PTKePsAW5g6lMoDK_zqLOLFJ95bO1mBMXFKiI26oHw9ll98kS3gkVcSlRPOfpYCr0RVRmrNB1Tz_HK03azlk29credL6w4hPjAz"

  const handleNavigation = () => {
    switch(child){
      case "profil":
        return <Profil language={language} />
      case "parcours":
        return <Parcours language={language} />
      case "projet":
        return <Projet language={language} />
      case "contact":
        return <Contact language={language} />
      default:
        return <Profil language={language} />
    }
  }

  const handleNavigate = (name: any) => {
    setChild(name)
  }

  const handleShowSlideBar = (move) => {
    return document.getElementById("slide-bar").style.animationName = move
  }
  
  return (
    <div className="global-container">
        <div className='left-side-container'>
            <div className='navbar-container'>
                <GiHamburgerMenu className="hamburger" onClick={() => {
                  setDrawer(true)
                  handleShowSlideBar("slideInLeft")
                  }} />
                <div>
                  <a href="#" className="nav-item" style={{color: language === "en" ? "#aa852b" : "gray"}} onClick={() => setLanguage("en")}>EN</a> | <a href="#" className="nav-item" style={{color: language === "fr" ? "#aa852b" : "gray"}} onClick={() => setLanguage("fr")}>FR</a>
                </div>
                <ul className="navbar">
                      <a href="#" className="nav-item" style={{borderBottom: child === "profil" ? "2px solid #aa852b" : "none"}}><li onClick={() => handleNavigate("profil")}>{language === "en" ? "The pitch": "Le Pitch"}</li></a>
                      <a href="#" className="nav-item" style={{borderBottom: child === "parcours" ? "2px solid #aa852b" : "none"}}><li onClick={() => handleNavigate("parcours")}>{language === "en" ? "The Geek": "Le Geek"}</li></a>
                      <a href="#" className="nav-item" style={{borderBottom: child === "projet" ? "2px solid #aa852b" : "none"}}><li onClick={() => handleNavigate("projet")}>{language === "en" ? "The Code": "Le Code"}</li></a>
                      <a href="#" className="nav-item" style={{borderBottom: child === "contact" ? "2px solid #aa852b" : "none"}}><li onClick={() => handleNavigate("contact")}>Contact</li></a>
                </ul>
            </div>
            <main className='main-container'>
              {handleNavigation()}
            </main>
        </div>

        <div style={{
          position: "absolute",
          width: "50%",
          height: "100vh",
          left: "0%",
          backgroundColor: "whitesmoke",
          zIndex: "10",
          filter: "Drop-shadow(0px 0px 5px)",
          display: drawer === true ? "flex" : "none",
          flexFlow: "column",
          justifyContent: "space-between"
        }}
        id="slide-bar"
        className='drawer drawer-back'>
          <div>
            <div style={{
              display: "flex",
              
            }}>
              <span style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#aa852b",
                padding: "5%",
                width: "80%",
                }}>Portfolio</span>
                <AiFillCloseSquare id="close-button" style={{fontSize: "2.5rem", backgroundColor: "#aa852b"}} onClick={() => {
                  setDrawer(false)
                  handleShowSlideBar('slideOutLeft')}} />
            </div>
            <ul style={{
                    display: "flex",
                    flexFlow: "column",
                    listStyleType: "none"
                  }}>
                  <a href="#" className="nav-item" style={{borderBottom: child === "profil" ? "2px solid #aa852b" : "none"}}><li onClick={() => {
                    handleNavigate("profil")
                    setDrawer(false)
                    handleShowSlideBar('slideOutLeft'
                  )}}>{language === "en" ? "The pitch": "Le Pitch"}</li></a>
                  <a href="#" className="nav-item" style={{borderBottom: child === "parcours" ? "2px solid #aa852b" : "none"}}><li onClick={() => {
                    handleNavigate("parcours")
                    setDrawer(false)
                    handleShowSlideBar('slideOutLeft'
                  )}}>{language === "en" ? "The Geek": "Le Geek"}</li></a>
                  <a href="#" className="nav-item" style={{borderBottom: child === "projet" ? "2px solid #aa852b" : "none"}}><li onClick={() => {
                    handleNavigate("projet")
                    setDrawer(false)
                    handleShowSlideBar('slideOutLeft'
                  )}}>{language === "en" ? "The Code": "Le Code"}</li></a>
            </ul>
          </div>
          <div>
            {messengerList && <h4 style={{color: "#aa852b", fontSize: "0.8rem", textAlign: "center"}} className="project-tab">david.simba1985@gmail.com</h4>}
            {showPhoneNumber && <h4 style={{color: "#aa852b", fontSize: "1rem", textAlign: "center"}} className="project-tab">06.59.87.28.84</h4>}
            <div style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "space-around",
              padding: "5% 2%",
              borderTop: "1px solid #aa852b"
            }}>
              <a href='#'><MdEmail style={{borderRight: messengerList ? "1px solid #aa852b" : "none", color: messengerList? "black" : "gray", paddingRight: "1vw"}} onClick={() => setMessengerList(!messengerList)} /></a>
              {messengerList ? <>
                <a href="https://mail.google.com/" target="_blank" onClick={() => setMessengerList (false)} rel="noreferrer">
                  <SiGmail className='project-tab' />
                </a>
                <a href="https://office.live.com/start/Outlook.aspx?omkt=fr-001" target="_blank" onClick={() => setMessengerList (false)} rel="noreferrer" className="contact-text">
                  <SiMicrosoftoutlook className='project-tab' />
                </a>
                <a href={yahooMail} target="_blank" onClick={() => setMessengerList (false)} rel="noreferrer" className="contact-text">
                  <FaYahoo className='project-tab' />
                </a>
              </> : <>
                <a href='https://www.linkedin.com/in/david-simba-961316140/' target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                <a href='https://github.com/Dadou1985' target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href='#'><BsFillTelephoneFill onClick={() => setShowPhoneNumber(!showPhoneNumber)} /></a>
              </>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Index