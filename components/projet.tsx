/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import ScrollBar from 'react-perfect-scrollbar'
import {FaVideo} from 'react-icons/fa'
import {FaInfoCircle} from 'react-icons/fa'

const Projet = ({language}) => {
  const [video, setVideo] = useState(true)
  const [text, setText] = useState(false)

  const handleTabActivation = (videoStatus, textStatus) => {
    setVideo(videoStatus)
    setText(textStatus)
  }
  
  if(language === "en"){
    return (
      <div className="global-style-component">
          <p style={{fontSize: "2rem", marginBottom: "-20px", marginLeft: "1%"}} className="shadow-level1 pitch">The magic behind</p>
          <h1 style={{fontSize: "6rem", marginTop: "0%", color:"#aa852b", borderBottom: "3px solid #aa852b", width: "90%", marginBottom: "0"}} className="shadow-level1">The Code</h1>
          <p style={{width: "90%"}}>“Work until your bank account looks like a phone number.” — Unknown </p>
          <div>
            <p style={{color:"#aa852b", fontSize: "1.5rem"}}><b>My Sweet Hotel</b> - The masterpiece</p>
              <div style={{
                display: "flex",
                flexFlow: "row",
                width: "80%",
                justifyContent: 'space-around',
                marginBottom: "2%",
                fontSize: "1.5rem",
              }}>
                <FaVideo style={{borderBottom: video ? "1px solid black" : "none", cursor: "pointer", paddingBottom: "1%"}} onClick={() => handleTabActivation(true, false)} />
                <FaInfoCircle style={{borderBottom: text ? "1px solid black" : "none", cursor: "pointer", paddingBottom: "1%"}} onClick={() => handleTabActivation(false, true)} />
              </div>
              {video && <ReactPlayer url='https://youtu.be/HWVkct0n6Zs' className='project-tab' />}
              {text && <ScrollBar className='project-tab'>
                <p>Being a former worker of the hotel industry, I created this digital solution to help hotel owners modernizing the management of their hotel.
                  <br/>The solution is the combination of a web application staff-oriented and a mobile application customer-oriented.
                  <br/>I've been working on it for 2 years and I can say, by far, that this project is my masterpiece. 
                  <br/>I code it from scratch as a full-stack developper,
                  using all the knowledge and the skills that I could gather only to push it to the limit.
                  <br/><br/>The front-end side was mainly developed with Gatsby.js {`(a React framework)`} for the web side and Expo {`React-Native`} for mobile side.
                  <br/>The back-end side was developed threw the Google's Back-end-As-A-Service {`(Firebase)`}.
                  <br/><br/>For more details on this project, <a href='https://mysweethotel.com/' target='_blank' rel="noreferrer">visit the website</a>.
                </p>
              </ScrollBar>}
          </div>
      </div>
    )
  }else{
    return (
      <div className="global-style-component">
          <p style={{fontSize: "2rem", marginBottom: "-20px", marginLeft: "1%"}} className="shadow-level1 pitch">La magie derrière</p>
          <h1 style={{fontSize: "6rem", marginTop: "0%", color:"#aa852b", borderBottom: "3px solid #aa852b", width: "90%", marginBottom: "0"}} className="shadow-level1">Le Code</h1>
          <p style={{width: "90%"}}>“Bosse jusqu'à ce que ton compte en banque ressemble à un numéro de téléphone.” — Inconnu </p>
          <div>
            <p style={{color:"#aa852b", fontSize: "1.5rem"}}><b>My Sweet Hotel</b> - Le Chef d'Oeuvre</p>
              <div style={{
                display: "flex",
                flexFlow: "row",
                width: "80%",
                justifyContent: 'space-around',
                marginBottom: "2%",
                fontSize: "1.5rem",
              }}>
                <FaVideo style={{borderBottom: video ? "1px solid black" : "none", cursor: "pointer", paddingBottom: "1%"}} onClick={() => handleTabActivation(true, false)} />
                <FaInfoCircle style={{borderBottom: text ? "1px solid black" : "none", cursor: "pointer", paddingBottom: "1%"}} onClick={() => handleTabActivation(false, true)} />
              </div>
              {video && <ReactPlayer url='https://youtu.be/HWVkct0n6Zs' className='project-tab' />}
              {text && <ScrollBar className='project-tab'>
                <p>Etant moi-même issu du milieu hôtelier, j'ai créé une solution digitale permettant de simplifier et modernisez la gestion d'un hôtel.
                  <br/>Le produit se compose d'une application web orientée collaborateur et d'une application mobile orientée client.
                  <br/>Cela fait près de 2 ans que travaille sur ce que je considère être mon projet chef d'oeuvre. 
                  <br/>Je l'ai codé de A à Z en <i>full-stack</i>,
                  usant de toute les connaissance et compétences que j'ai pu acquérir au cours de mes différentes expériences professionnelles.
                  <br/><br/>Le côté <i>front</i> a été principalement développé avec Gatsby.js {`(un framework React)`} pour l'application web et Expo {`React-Native`} pour l'application mobile.
                  <br/>Le côté <i>back</i> a été développé sur le Back-end-As-A-Service de Google {`(Firebase)`}.
                  <br/><br/>Pour plus de détails sur le projet, rendez-vous sur le site officiel de <a href='https://mysweethotel.com/' target='_blank' rel="noreferrer" style={{color:"#aa852b"}}>My Sweet Hotel</a>.
                </p>
              </ScrollBar>}
          </div>
      </div>
    )
  }
}

export default Projet