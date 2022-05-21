import React, { useState } from 'react'
import Contact from '../components/contact'
import Parcours from '../components/parcours'
import Profil from '../components/profil'
import Projet from '../components/projet'

const Index = () => {
  const [child, setChild] = useState("profil")
  const [language, setLanguage] = useState("en")

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
  
  return (
    <div className="global-container">
        <div className='left-side-container'>
            <div className='navbar-container'>
                <div>
                  <a href="#" className="nav-item" style={{color: language === "en" ? "black" : "gray"}} onClick={() => setLanguage("en")}>EN</a> | <a href="#" className="nav-item" style={{color: language === "fr" ? "black" : "gray"}} onClick={() => setLanguage("fr")}>FR</a>
                </div>
                <ul>
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
    </div>
  )
}

export default Index