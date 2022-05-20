/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Profil = ({language}) => {
  if(language === "en"){
    return (
      <div className="global-style-component">
          <p style={{fontSize: "2rem", marginBottom: "-20px", marginLeft: "1%"}} className="shadow-level1 pitch">I am not a developer</p>
          <h1 style={{fontSize: "6rem", marginTop: "0%", color:"#aa852b", borderBottom: "3px solid #aa852b", width: "90%", marginBottom: "0"}} className="shadow-level1 pitch2">I am a <br/> Miracle Worker</h1>
          <p style={{width: "90%"}} className="pitch3"><i>“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau</i></p>
          <p><i>“I never dreamed about success. I worked for it.” —Estée Lauder</i></p>
          <p><i>“Nothing can stop me, I’m all the way up.” —Fat Joe</i></p>
      </div>
)
  }else{
    return (
      <div className="global-style-component">
          <p style={{fontSize: "2rem", marginBottom: "-20px", marginLeft: "1%"}} className="shadow-level1 pitch">Je ne suis pas un développeur</p>
          <h1 style={{fontSize: "5.5rem", marginTop: "0%", color:"#aa852b", borderBottom: "3px solid #aa852b", width: "90%", marginBottom: "0"}} className="shadow-level1 pitch2">Je suis un  <br/> Faiseur de Miracles</h1>
          <p style={{width: "90%"}} className="pitch3"><i>“Le succès vient généralement à ceux qui sont trop occupés à le chercher.” — Henry David Thoreau</i></p>
          <p><i>“Je n'ai jamais rêvé de succès. J'ai travaillé pour.” —Estée Lauder</i></p>
          <p><i>“Rien ne peut m'arrêter, je suis tout en haut.” —Fat Joe</i></p>
      </div>
)
  }
}

export default Profil