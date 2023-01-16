import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    //background-color: #FFF;
`

export const ImageContainer = styled.div`
    width: 450px;
    height: 450px;
    position: relative;
    align-items: center;
    border-radius: 225px;
    top: 170px;
    left: 60px;
    padding: 10px, 10px, 20px, 10px;
    //background-color: blue;
`

export const image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 225px;
`

export const MainContainer = styled.div`
    width: 100%;
    height: 80vh;
    //background-color: #FFF;
    display: flex;
`

export const LeftContainer = styled.div`
    width: 30%;
    height: 80vh;
    background: ${({ theme }) => theme.body};
`

export const RightContainer = styled.div`
    width: 70%;
    height: 80vh;
    background: ${({ theme }) => theme.body};
`

export const NameContainer = styled.div`
    width: 50%;
    height: 8vh;
    //background-color: #f00;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 15%;
    left: 15%;
`

export const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
`

export const Age = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 40%;
    margin-top: 10px;
    //background-color: grey;
    top: 20%;
    left: 30%;
    font-size: 20px;
    font-weight: 800;
`

export const TextRightContainer = styled.div`
    width: 90%;
    height: 35%;
    align-items: center;
    position: relative;
    top: 20%;
    left: 2%;
    //background-color:  yellow;
`

export const TextSocialMediaContainer = styled.div`
    width: 50%;
    height: 10vh;
    //background-color: green;
    display: flex;
    align-items: center;
    position: relative;
    top: 30%;
    left: 18%;
`

export const FooterContainer = styled.div`
    width: 100%;
    height: 20vh;
    background: ${({ theme }) => theme.body};
`

export const textContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;
    text-align: left;
    color: ${({ theme }) => theme.text};
    line-height: 45px;
`

export const LogoContainer = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: #fff;
`

export const IconContainer = styled.img`
    //background-color: #f00;
    margin: 20px;
    width: 128px;
    height: 128px;
    -webkit-box-reflect: below -25px linear-gradient(transparent, rgba(0, 0, 0, 0.5));
`

export const Switch = styled.div` 
    display: flex;
    align-items: flex-end;
    justify-content: end;
    position: relative;
    margin: 10px;
    right: 40px;
    //background-color: blue;
`