import React, { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaYahoo } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiGmail, SiMicrosoftoutlook } from 'react-icons/si'
import { RiArrowGoBackFill } from 'react-icons/ri'

const Contact = ({language}) => {
  const [messengerList, setMessengerList] = useState(false)
  const yahooMail = "https://login.yahoo.com/?.src=ym&lang=fr-FR&done=https%3A%2F%2Fmail.yahoo.com%2F%3Fguce_referrer%3DaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%26guce_referrer_sig%3DAQAAAH3vSMEHhMKXJf7BLsfGhIkgkpKc1EhAcvmlY15Sl8vsr9cfM6wU0sthzq_UFmhRMj0PWdYD0PTKePsAW5g6lMoDK_zqLOLFJ95bO1mBMXFKiI26oHw9ll98kS3gkVcSlRPOfpYCr0RVRmrNB1Tz_HK03azlk29credL6w4hPjAz"
  
  return (
    <div className="global-style-component">
        <h1 style={{fontSize: "6rem", marginTop: "0%", color:"#aa852b", borderBottom: "3px solid #aa852b", width: "90%", marginBottom: "0"}} className="shadow-level1">Contact</h1>
        {language === "en" ? <p><i>“Talent wins games, but teamwork and intelligence win championships.” — Michael Jordan</i></p> : <p><i>“Le talent remporte des matchs, mais le travail en équipe et la statégie remportent des championnats.” — Michael Jordan</i></p>}
        <div style={{paddingTop: "5vh", width: "100%"}}>
          <div style={{marginBottom: "2vh", display: "flex", flexFlow: "row", alignItems: "center"}}>
          <MdEmail style={{fontSize: "2rem", marginRight: "1vw"}} />
          {!messengerList ? <a href='#' onClick={() => setMessengerList(!messengerList)} className="contact-text">david.simba1985@gmail.com</a>
            : <div style={{
              display: "flex", 
              flexFlow: "row", 
              justifyContent: "space-between",
              alignItems: "center",
              width: "20%"}}
              className="messenger-list">
              <a href="https://mail.google.com/" target="_blank" onClick={() => setMessengerList (false)} rel="noreferrer">
                <SiGmail style={{fontSize: "1.5rem"}} />
              </a>
              <a href="https://office.live.com/start/Outlook.aspx?omkt=fr-001" target="_blank" onClick={() => setMessengerList (false)} rel="noreferrer" className="contact-text">
                <SiMicrosoftoutlook style={{fontSize: "1.5rem"}} />
              </a>
              <a href={yahooMail} target="_blank" onClick={() => setMessengerList (false)} rel="noreferrer" className="contact-text">
                <FaYahoo style={{fontSize: "1.5rem", borderRight: "1px solid gray", paddingRight: "1vw"}} />
              </a>
              <RiArrowGoBackFill  style={{fontSize: "1rem", backgroundColor: "#aa852b", cursor: "pointer", borderRadius: "50%", padding: "3%"}} onClick={() => setMessengerList(false)} />
            </div>}
          </div>
          <div style={{marginBottom: "2vh", display: "flex", flexFlow: "row", alignItems: "center"}}>
            <FaLinkedinIn style={{fontSize: "2rem", marginRight: "1vw"}} />
            <a href='https://www.linkedin.com/in/david-simba-961316140/' target="_blank" rel="noreferrer">David Simba - Linkedin</a>
          </div>
          <div style={{marginBottom: "2vh", display: "flex", flexFlow: "row", alignItems: "center"}}>
            <FaGithub style={{fontSize: "2rem", marginRight: "1vw"}} />
            <a href='https://github.com/Dadou1985' target="_blank" rel="noreferrer">David Simba - Github</a>
          </div>
        </div>
    </div>
  )
}

export default Contact