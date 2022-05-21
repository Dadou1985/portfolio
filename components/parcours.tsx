/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { DiReact } from 'react-icons/di'
import { SiExpo, SiRedux, SiTypescript, SiFirebase } from 'react-icons/si'
import { FaNodeJs, FaFileDownload } from 'react-icons/fa'
import { saveAs } from 'file-saver'

const Parcours = ({language}) => {
    const downloadCv = () => {
        saveAs("https://i.postimg.cc/QCrv9spm/CV-David-Simba-2022.png")
    }
    
  if(language === "en"){
    return (
        <div className="global-style-component">
                <p className="shadow-level1 small-title">The man behind</p>
                <h1 className="shadow-level1 big-title">The Geek</h1>
                <p><i>“One secret of success in life is for a man to be ready for his opportunity when it comes.” – Benjamin Disraeli</i></p>
                <div className='main-content'>
                    <h2 className='main-content-subtitle'>Allow me to introduce myself</h2>
                    <p>Hi, my name is David SIMBA and I have got super powers but... let's keep it just between me and you, ok !
                        <br/>What, you don't believe me ?
                        <br/>Fine ! Let me show you that I'm telling the truth.
                        <br/>I'm gone use my powers to read in your mind. Close your eyes, don't cheat !
                        <br/>Now by the power of my <i>geekness</i>, I can guess that you came here looking for someone who's got special skills to bring life to your ideas
                        and projects.                        
                        <br/>BOOM ! I told you that I was amazing and that's just a sample of my true potential.
                        <br/>Don't worry my friend: you came at the right place !
                    </p>
                    <div className='bottom-container'>
                        <p>Just take a quick look into my tool box</p>
                        <ul>
                            <li><DiReact style={{fontSize: "3rem"}} /></li>
                            <li><SiExpo style={{fontSize: "3rem"}} /></li>
                            <li><SiRedux style={{fontSize: "3rem"}} /></li>
                            <li><SiTypescript style={{fontSize: "3rem"}} /></li>
                            <li><FaNodeJs style={{fontSize: "3rem"}} /></li>
                            <li><SiFirebase style={{fontSize: "3rem"}} /></li>
                        </ul>
                    </div>
                    <div className='bottom-container'>
                        <p>And for more details, you can download my resume by clicking on the button below</p>
                        <FaFileDownload className="downloadIcon" onClick={downloadCv} />
                    </div>
                </div>
            </div>
      )
  }else{
    return (
        <div className="global-style-component">
                <p className="shadow-level1 small-title">L'homme derrière</p>
                <h1 className="shadow-level1 big-title">Le Geek</h1>
                <p><i>“L'un des secrets du succès dans la vie est qu'un homme soit prêt à saisir l'opportunité quand elle se présente à lui.”<br/> – Benjamin Disraeli</i></p>
                <div className='main-content'>
                    <h2 className='main-content-subtitle'>Permettez-moi de me présenter</h2>
                    <p>Salut, je m'appelle David SIMBA et j'ai des super-pouvoirs mais... ça reste entre nous, ok !
                        <br/>Quoi, tu ne me crois pas ?
                        <br/>Très bien ! Laisse-moi te prouver que je ne raconte pas des histoires.
                        <br/>Je vais utiliser mes pouvoirs pour lire dans tes pensées. Ferme les yeux, ne triche pas !
                        <br/>Maintenant, par le pouvoir de ma <i>geekance</i>, je devine que tu êtes venu ici à la 
                        recherche d'une personne capable de donner vie à tes idées et projets en quelques lignes de codes.                        
                        <br/>BOOM ! Je te l'avais dit que j'étais incroyable et ça c'est juste un échantillon de mon potentiel.
                        <br/>Pas de panique ! Tu es venu au bonne endroit !
                    </p>
                    <div className='bottom-container'>
                        <p>Jette un rapide coup d'oeil dans ma boîte à outils</p>
                        <ul>
                            <li><DiReact style={{fontSize: "3rem"}} /></li>
                            <li><SiExpo style={{fontSize: "3rem"}} /></li>
                            <li><SiRedux style={{fontSize: "3rem"}} /></li>
                            <li><SiTypescript style={{fontSize: "3rem"}} /></li>
                            <li><FaNodeJs style={{fontSize: "3rem"}} /></li>
                            <li><SiFirebase style={{fontSize: "3rem"}} /></li>
                        </ul>
                    </div>
                    <div className='bottom-container'>
                        <p>Pour plus de détails, tu peux télécharger mon CV en cliquant sur le bouton ci-dessous</p>
                        <FaFileDownload className="downloadIcon" onClick={downloadCv} />
                    </div>
                </div>
            </div>
      )
  }
}

export default Parcours