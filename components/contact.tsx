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
        <h1 className="shadow-level1 big-title">Contact</h1>
        {language === "en" ? <p><i>“Talent wins games, but teamwork and intelligence win championships.” — Michael Jordan</i></p> : <p><i>“Le talent remporte des matchs, mais le travail en équipe et la statégie remportent des championnats.” — Michael Jordan</i></p>}
        <div className='contact-container'>
          <div className='mail-container'>
          <MdEmail className='mail-icon' />
          {!messengerList ? <a href='#' onClick={() => setMessengerList(!messengerList)}>david.simba1985@gmail.com</a>
            : <div className="messenger-list messenger-container">
              <a href="https://mail.google.com/" target="_blank" onClick={() => setMessengerList (false)} rel="noreferrer">
                <SiGmail className='messenger-icon' />
              </a>
              <a href="https://office.live.com/start/Outlook.aspx?omkt=fr-001" target="_blank" onClick={() => setMessengerList (false)} rel="noreferrer" className="contact-text">
                <SiMicrosoftoutlook className='messenger-icon' />
              </a>
              <a href={yahooMail} target="_blank" onClick={() => setMessengerList (false)} rel="noreferrer" className="contact-text">
                <FaYahoo className='messenger-icon' style={{borderRight: "1px solid gray", paddingRight: "1vw"}} />
              </a>
              <RiArrowGoBackFill className='messenger-back-icon' onClick={() => setMessengerList(false)} />
            </div>}
          </div>
          <div className='other-container'>
            <FaLinkedinIn className='other-icon' />
            <a href='https://www.linkedin.com/in/david-simba-961316140/' target="_blank" rel="noreferrer">David Simba - Linkedin</a>
          </div>
          <div className='other-container'>
            <FaGithub className='other-icon' />
            <a href='https://github.com/Dadou1985' target="_blank" rel="noreferrer">David Simba - Github</a>
          </div>
        </div>
    </div>
  )
}

export default Contact