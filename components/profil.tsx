/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Profil = ({language}) => {

  if(language === "en"){
    return (
      <div className="global-style-component">
          <p className="shadow-level1 small-title">I am not a developer</p>
          <h1 className="shadow-level1 profile-big-title">I am a <br/> Miracle Worker</h1>
          <p className='main-quote'><i>“Success usually comes to those who are too busy looking for it.” — Henry David Thoreau</i></p>
          <p className='quotes'><i>“I never dreamed about success. I worked for it.” — Estée Lauder</i></p>
          <p className='quotes'><i>“Nothing can stop me, I’m all the way up.” — Fat Joe</i></p>
      </div>
)
  }else{
    return (
      <div className="global-style-component">
          <p className="shadow-level1 small-title">Je ne suis pas un développeur</p>
          <h1 className="shadow-level1 big-title">Je suis un  <br/> Faiseur de Miracles</h1>
          <p className='main-quote'><i>“Le succès vient généralement à ceux qui sont trop occupés à le chercher.” — Henry David Thoreau</i></p>
          <p className='quotes'><i>“Je n'ai jamais rêvé de succès. J'ai travaillé pour.” — Estée Lauder</i></p>
          <p className='quotes'><i>“Rien ne peut m'arrêter, je suis tout en haut.” — Fat Joe</i></p>
      </div>
)
  }
}

export default Profil