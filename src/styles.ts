import styled from "styled-components";

export const Container = styled.article`
height: 30rem;
width: 18rem;
background-color: hsl(0, 0%, 100%);
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 4%;
display: flex;
flex-direction: column;
align-items: center;
`

export const QrImage = styled.img`
border-radius: 4%;
height: 19rem;
width: 16rem;
`

export const ImageSection = styled.section`
display: flex;
height: 21rem;
justify-content: center;
align-items: center;
`

export const Title = styled.h1`
font-weight: 700;
color: hsl(218, 44%, 22%);
margin: 0;
text-align: center;
`

export const Paragraph = styled.p`
font-weight: 400;
color: hsl(220, 15%, 55%);
font-size: 15px;
text-align: center;
`

export const ContentSection = styled.section`
display:flex;
flex-direction:column;
width:16rem;

`