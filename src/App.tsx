import React, { useState, useContext, useEffect } from "react";
import * as C from './Global';
import { Text } from "./helpers/text";
import Switch from 'react-switch'; 
import { ThemeProvider } from "styled-components";
//import { ThemeContext } from "styled-components";
import { shade } from 'polished';
import { darkTheme, lightTheme } from "./theme";
const LeoImage = require("./assets/lesteves.jpg") as string;
const GithubLogo = require("./icons/githublogo.png")
const InstaLogo = require("./icons/instalogo.png")
const TwitterLogo = require("./icons/twitterlogo.png")
const LinkedinLogo = require("./icons/linkedinlogo.png")

const App = () => {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {  //@mateusPPinh
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return(
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
    <C.Container>
      <C.MainContainer>
        <C.LeftContainer>
          <C.ImageContainer>
            <C.image src={LeoImage} alt="Foto de perfil"></C.image>
          </C.ImageContainer> 
        </C.LeftContainer>
        <C.RightContainer>
          <C.Switch>
            <C.ClickHere>
              <h5>Trocar de tema</h5>
            </C.ClickHere>
            <Switch 
              onChange={toggleTheme}
              checked={theme == 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={15}
              width={40}
              handleDiameter={20}
              offColor={shade(0.15, "#D5D0CD")}
              onColor={shade(0.15, "#272932")} />
            </C.Switch>
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
          </C.TextRightContainer>
        </C.RightContainer>
      </C.MainContainer>
      <C.FooterContainer>
        <C.TextSocialMediaContainer>
          <C.textContainer>
            <h1>Redes Sociais</h1>
          </C.textContainer>
        </C.TextSocialMediaContainer>
        <C.LogoContainer>
          <a href="https://www.instagram.com/leoo_esteves1/" target="_blank">
          <C.IconContainer src={InstaLogo} alt="Icone do Instagram"></C.IconContainer></a>
          <a href="https://twitter.com/LShishou" target="_blank">
          <C.IconContainer src={TwitterLogo} alt="Icone do Twitter"></C.IconContainer></a>
          <a href="https://www.linkedin.com/in/leonardo-silva-esteves-dos-santos-3bb8a8208/" target="_blank">
          <C.IconContainer src={LinkedinLogo} alt="Icone do Linkedin"></C.IconContainer></a>
          <a href="https://github.com/DotcomPeep" target="_blank">
          <C.IconContainer src={GithubLogo} alt="Icone do Github">
          </C.IconContainer></a>
        </C.LogoContainer>
      </C.FooterContainer>
    </C.Container>
    </ThemeProvider>
  )
}

export default App