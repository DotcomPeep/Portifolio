import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    //background-color: #FFF;
    
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        position: relative;
        min-width: 400px;
        max-height: 874px;
    }
`

export const ImageContainer = styled.div`
    width: 450px;
    height: 450px;
    position: relative;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 225px;
    top: 170px;
    left: 60px;
    padding: 10px, 10px, 20px, 10px;
    
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100%;
        width: 85%;
        left: 20px;
    }
`

export const image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 225px;
    
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        position: relative;
        object-fit: cover;
        height: 50%;
        width: 60%;
        bottom: 45px;
    }
`

export const MainContainer = styled.div`
    width: 100%;
    height: 70vh;
    //background-color: #FFF;
    display: flex;

    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        position: relative;
        min-width: 400px;
        max-height: 874px;
    }
`

export const LeftContainer = styled.div`
    width: 30%;
    height: 70vh;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    position: relative;
    background: ${({ theme }) => theme.body};
    //background-color: blue;
    
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        position: relative;
        min-width: 400px;
        min-height: 400px;
    }
`

export const RightContainer = styled.div`
    width: 70%;
    height: 70vh;
    //display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.body};
    //background-color: red;
    
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        position: relative;
        min-width: 400px;
        width: 70%;
        min-width: 400px;
        min-height: 750px;
    }
`

export const NameContainer = styled.div`
    width: 60%;
    height: 5vh;
    //background-color: aquamarine;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;
    top: 15%;
    left: 15%;
    
    @media (max-width: 400px) {
        height: 5vh;
        width: 60%;
        text-decoration: none;
        text-align: left;
    }
`

export const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    font-size: 20px;
    font-weight: 800;
    //background-color: brown;
    
    @media (max-width: 400px) {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        font-weight: 800;
        text-decoration: none;
        text-align: left;
        color: ${({ theme }) => theme.text};
        line-height: 45px;
        bottom: 390px;
    }
`

export const Age = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;
    width: 40%;
    margin-top: 10px;
    //background-color: grey;
    //top: 10px;
    left: 30%;
    font-size: 20px;
    font-weight: 800;
    
    @media (max-width: 400px) {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
        font-weight: 800;
        text-decoration: none;
        text-align: left;
        color: ${({ theme }) => theme.text};
        line-height: 45px;
        bottom: 410px;
    }
`

export const TextRightContainer = styled.div`
    width: 90%;
    height: 25vh;
    align-items: center;
    position: relative;
    display: flex;
    top: 200px;
    left: 2%;
    //background-color:  blueviolet;
    flex-wrap: wrap;
    
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        min-width: 400px;
        width: 70%;
        height: 100%;
        top: 210px;
        left: -240px;
        //padding: 5px;
    }
`

export const TextSocialMediaContainer = styled.div`
    width: 220px;
    height: 4vh;
    //background-color: green;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    flex-wrap: wrap;
    top: 5px;
    left: 860px;
    
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        position: relative;
        //background-color: green;
        //width: 100%;
        //height: 30vh;
        bottom: 30px;
        left: 75px;
        max-height: 100%;
    }
`

export const FooterContainer = styled.div`
    width: 100%;
    height: 30vh;
    background: ${({ theme }) => theme.body};
    //background-color: aquamarine;
    
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        position: relative;
        
        width: 100%;
        height: 30vh;
        top: 535px;
        max-height: 100%;
    }
`

export const textContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;
    text-align: left;
    color: ${({ theme }) => theme.text};
    line-height: 45px;
    
    @media (max-width: 400px) {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        font-weight: 800;
        text-decoration: none;
        text-align: center;
        color: ${({ theme }) => theme.text};
        line-height: 45px;
    }
`

export const LogoContainer = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    //background-color: #fff000;
    min-width: 400px;
    
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        height: 18vh;
    }
`

export const IconContainer = styled.img`
    //background-color: #f00;
    margin: 20px;
    width: 110px;
    height: 110px;
    -webkit-box-reflect: below -25px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        position: relative;
        margin: 10px;
        width: 80px;
        height: 80px;
    }
`

export const Switch = styled.div` 
    display: flex;
    align-items: flex-end;
    justify-content: end;
    position: relative;
    margin: 10px;
    right: 40px;
    //background-color: blue;
    
    @media (max-width: 400px) {
        //width: 300px;
        display: flex;
        //align-items: center;
        //flex-direction: column;
        position: relative;
        //background-color: blue;
        margin: 10px;
        //right: 10px;
        left: 90px;
        bottom: 325px;
    }
`

export const ClickHere = styled.div`
    width: 100px;
    height: 40px;
    top: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: ${({ theme }) => theme.text};
    //background-color: violet;
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        position: relative;
        //background-color: violet;
        margin: 10px;        
        top: 18px;
    }
`