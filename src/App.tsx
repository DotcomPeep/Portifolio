import React, { useState } from "react";
import * as C from './Global';
import { Text } from "./helpers/text";
//import leoImage from './assets/lesteves.jpg';
const LeoImage = require("./assets/lesteves.jpg") as string;
const GithubLogo = require("./icons/githublogo.png")
const InstaLogo = require("./icons/instalogo.png")
const TwitterLogo = require("./icons/twitterlogo.png")
const LinkedinLogo = require("./icons/linkedinlogo.png")

const App = () => {

  const [theme, setTheme] = useState<string>('light')
  const [language, setLanguage] = useState<string>('pt')

  const handleChangeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const handleChangeLanguage = () => {
    language === 'pt' ? setLanguage('en') : setLanguage('pt') 
  }


  return(
    <C.Container>
      <C.MainContainer>
        <C.LeftContainer>
          <C.ImageContainer>
            <C.image src={LeoImage} alt="Foto de perfil"></C.image>
          </C.ImageContainer> 
        </C.LeftContainer>
        <C.RightContainer>
          <C.NameContainer>
            <C.textContainer>
              <C.Name>Leonardo Silva Esteves dos Santos</C.Name>
              <C.Age>22 Anos</C.Age>
              </C.textContainer>
          </C.NameContainer>
          <C.TextRightContainer>
            <C.textContainer>
              <Text/>
            </C.textContainer>
            <C.TextSocialMediaContainer>
              <C.textContainer>
                <h1>Redes Sociais</h1>
              </C.textContainer>
            </C.TextSocialMediaContainer>
          </C.TextRightContainer>
        </C.RightContainer>
      </C.MainContainer>
      <C.FooterContainer>
        <C.LogoContainer>
          <a href="https://github.com/DotcomPeep">
          <C.IconContainer src={GithubLogo} alt="Icone do Github">
          </C.IconContainer></a>
          <a href="https://www.instagram.com/leoo_esteves1/">
          <C.IconContainer src={InstaLogo} alt="Icone do Instagram"></C.IconContainer></a>
          <a href="https://twitter.com/LShishou">
          <C.IconContainer src={TwitterLogo} alt="Icone do Twitter"></C.IconContainer></a>
          <a href="https://www.linkedin.com/in/leonardo-silva-esteves-dos-santos-3bb8a8208/">
          <C.IconContainer src={LinkedinLogo} alt="Icone do Linkedin"></C.IconContainer></a>
        </C.LogoContainer>
      </C.FooterContainer>
    </C.Container>
  )
}

export default App