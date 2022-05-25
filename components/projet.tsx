/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import ScrollBar from 'react-perfect-scrollbar'
import {FaVideo} from 'react-icons/fa'
import {FaInfoCircle} from 'react-icons/fa'
import Image from 'next/image'
import MshImg from '../public/msh-banner.png' 

const Projet = ({language}) => {
  const [video, setVideo] = useState(true)
  const [text, setText] = useState(false)

  const handleTabActivation = (videoStatus, textStatus) => {
    setVideo(videoStatus)
    setText(textStatus)
  }

  const windowSize = window.innerWidth

  
  if(language === "en"){
    return (
      <div className="global-style-component">
          <p className="shadow-level1 small-title">The magic behind</p>
          <h1 className="shadow-level1 big-title">The Code</h1>
          <p className='main-quote'>“Work until your bank account looks like a phone number.” — Unknown </p>
          <div>
            <p className='main-content-subtitle'><b>My Sweet Hotel</b> - The masterpiece</p>
              <div className='icon-container'>
                <FaVideo style={{borderBottom: video ? "1px solid black" : "none"}} className="project-icon" onClick={() => handleTabActivation(true, false)} />
                <FaInfoCircle style={{borderBottom: text ? "1px solid black" : "none"}} className="project-icon" onClick={() => handleTabActivation(false, true)} />
              </div>
              {windowSize < 480 ? <div style={{display: video ? "flex" : "none", flexFlow: "row", justifyContent: "center", marginTop: "5vh"}}>
                <ReactPlayer url='https://youtu.be/HWVkct0n6Zs' className='project-tab' width="300px" height="200px" />
              </div> :
              <div style={{display: video ? "flex" : "none"}}><ReactPlayer url='https://youtu.be/HWVkct0n6Zs' className='project-tab' /></div>}
              {windowSize < 480 ? <div style={{display: text ? "flex" : "none"}} className='modal-masterpiece-container'>
              <ScrollBar style={{maxHeight: "100vh"}}>
                <Image src={MshImg} />
                <p className='main-content-subtitle'><b>My Sweet Hotel</b> - The masterpiece</p>
                <div className='icon-container'>
                <FaVideo style={{borderBottom: video ? "1px solid black" : "none"}} className="project-icon" onClick={() => handleTabActivation(true, false)} />
                <FaInfoCircle style={{borderBottom: text ? "1px solid black" : "none"}} className="project-icon" onClick={() => handleTabActivation(false, true)} />
              </div>
                
                <p>As a former worker of the hotel industry, I created this digital solution to help hotel owners modernizing the management of their hotel.
                  <br/>The solution is the combination of a web application staff-oriented and a mobile application customer-oriented.
                  <br/>I've been working on it for 2 years and I can say, by far, that this project is my masterpiece. 
                  <br/>I code it from scratch as a full-stack developper,
                  using all the knowledge and the skills that I could gather only to push it to the limit.
                  <br/><br/>The front-end side was mainly developed with Gatsby.js {`(a React framework)`} for the web side and Expo {`React-Native`} for mobile side.
                  <br/>The back-end side was developed threw the Google's Back-end-As-A-Service {`(Firebase)`}.
                  <br/><br/>For more details on this project, <a href='https://mysweethotel.com/' target='_blank' rel="noreferrer">visit the website</a>.
                  <p style={{width: "90%", textAlign: "end"}}><a href='#' onClick={() => handleTabActivation(true, false)}>Close</a></p>
                  <br/><br/><br/><br/> 
                </p>
                </ScrollBar>
              </div> : <div style={{display: text ? "flex" : "none"}}>
                <p>As a former worker of the hotel industry, I created this digital solution to help hotel owners modernizing the management of their hotel.
                  <br/>The solution is the combination of a web application staff-oriented and a mobile application customer-oriented.
                  <br/>I've been working on it for 2 years and I can say, by far, that this project is my masterpiece. 
                  <br/>I code it from scratch as a full-stack developper,
                  using all the knowledge and the skills that I could gather only to push it to the limit.
                  <br/><br/>The front-end side was mainly developed with Gatsby.js {`(a React framework)`} for the web side and Expo {`React-Native`} for mobile side.
                  <br/>The back-end side was developed threw the Google's Back-end-As-A-Service {`(Firebase)`}.
                  <br/><br/>For more details on this project, <a href='https://mysweethotel.com/' target='_blank' rel="noreferrer">visit the website</a>.
                </p>
              </div>}
          </div>
      </div>
    )
  }else{
    return (
      <div className="global-style-component">
          <p className="shadow-level1 small-title">La magie derrière</p>
          <h1 className="shadow-level1 big-title">Le Code</h1>
          <p className='main-quote'>“Bosse jusqu'à ce que ton compte en banque ressemble à un numéro de téléphone.” — Inconnu </p>
          <div>
            <p className='main-content-subtitle'><b>My Sweet Hotel</b> - Le Chef d'Oeuvre</p>
            <div className='icon-container'>
                <FaVideo style={{borderBottom: video ? "1px solid black" : "none"}} className="project-icon" onClick={() => handleTabActivation(true, false)} />
                <FaInfoCircle style={{borderBottom: text ? "1px solid black" : "none"}} className="project-icon" onClick={() => handleTabActivation(false, true)} />
              </div>
              {windowSize < 480 ? <div style={{display: video ? "flex" : "none", flexFlow: "row", justifyContent: "center", marginTop: "5vh"}}>
                <ReactPlayer url='https://youtu.be/HWVkct0n6Zs' className='project-tab' width="300px" height="200px" />
              </div> :
              <div style={{display: video ? "flex" : "none"}}><ReactPlayer url='https://youtu.be/HWVkct0n6Zs' className='project-tab' /></div>}
              {windowSize < 480 ? <div style={{display: text ? "flex" : "none"}} className='modal-masterpiece-container'>
              <ScrollBar style={{maxHeight: "100vh"}}>
                <Image src={MshImg} />
                <p className='main-content-subtitle'><b>My Sweet Hotel</b> - Le Chef d'Oeuvre</p>
                <div className='icon-container'>
                <FaVideo style={{borderBottom: video ? "1px solid black" : "none"}} className="project-icon" onClick={() => handleTabActivation(true, false)} />
                <FaInfoCircle style={{borderBottom: text ? "1px solid black" : "none"}} className="project-icon" onClick={() => handleTabActivation(false, true)} />
              </div>
                <p>Etant moi-même issu du milieu hôtelier, j'ai créé une solution digitale permettant de simplifier et moderniser la gestion d'un hôtel.
                  <br/>Le produit se compose d'une application web orientée collaborateur et d'une application mobile orientée client.
                  <br/>Cela fait près de 2 ans que je travaille sur ce que je considère être mon projet chef d'oeuvre. 
                  <br/>Je l'ai codé de A à Z en <i>full-stack</i>,
                  usant de toutes les connaissances et compétences acquises au cours de mes différentes expériences professionnelles.
                  <br/><br/>Le côté <i>front</i> a été principalement développé avec Gatsby.js {`(un framework React)`} pour l'application web et Expo {`React-Native`} pour l'application mobile.
                  <br/>Le côté <i>back</i> a été développé sur le Back-end-As-A-Service de Google {`(Firebase)`}.
                  <br/><br/>Pour plus de détails sur le projet, rendez-vous sur le site officiel de <a href='https://mysweethotel.com/' target='_blank' rel="noreferrer" style={{color:"#aa852b"}}>My Sweet Hotel</a>.
                  <p style={{width: "90%", textAlign: "end"}}><a href='#' onClick={() => handleTabActivation(true, false)}>Fermer</a></p>  
                  <br/><br/><br/><br/>          
                </p>  
                </ScrollBar>
              </div> : <div style={{display: text ? "flex" : "none"}}>
                <p>Etant moi-même issu du milieu hôtelier, j'ai créé une solution digitale permettant de simplifier et moderniser la gestion d'un hôtel.
                  <br/>Le produit se compose d'une application web orientée collaborateur et d'une application mobile orientée client.
                  <br/>Cela fait près de 2 ans que je travaille sur ce que je considère être mon projet chef d'oeuvre. 
                  <br/>Je l'ai codé de A à Z en <i>full-stack</i>,
                  usant de toutes les connaissances et compétences acquises au cours de mes différentes expériences professionnelles.
                  <br/><br/>Le côté <i>front</i> a été principalement développé avec Gatsby.js {`(un framework React)`} pour l'application web et Expo {`React-Native`} pour l'application mobile.
                  <br/>Le côté <i>back</i> a été développé sur le Back-end-As-A-Service de Google {`(Firebase)`}.
                  <br/><br/>Pour plus de détails sur le projet, rendez-vous sur le site officiel de <a href='https://mysweethotel.com/' target='_blank' rel="noreferrer" style={{color:"#aa852b"}}>My Sweet Hotel</a>.
                </p>
              </div>}
          </div>
      </div>
    )
  }
}

export default Projet