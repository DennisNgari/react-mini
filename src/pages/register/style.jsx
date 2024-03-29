import styled from "styled-components";
import {lightTheme} from "../../styles/Theme"
import loginSVG from "../../assets/img/login.svg"
import { b } from "../../styles/Responsive";



export const RegisterContainer = styled.div`
& > {
    height: 100%;
}
width: 100%;
display: flex;
align-items: center; 
justify-content: center;
background-image: linear-gradient(to right,
       ${lightTheme.primaryLinear3}, 
       ${lightTheme.primaryLinear4}),
       url(${loginSVG});
background-size: cover;
background-position:center;
background-attachment: fixed;
`

export const Form = styled.form`
background: ${lightTheme.bg2};
padding: 0rem 8rem;
margin: 5rem auto;
border-radius: 1rem;
@media ${b.sm}{
    padding: 0 5rem;
}
`
export const SignUpText = styled.h2`
color: ${lightTheme.hover};
text-align: center;
margin-top: 2rem;
font-size: 1.8rem;
`

export const SocialCont = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center;  
    margin: 1rem 0rem;
`
export const OrCont = styled.div`
margin: 2rem 0rem;
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
`
export const Hr = styled.hr`
width: 100%;
height: .1rem;
border: 0;
border-top: .1rem solid #ccc;
`
export const OrText = styled.span`
font-size: 1.3rem;
color: #555353;
`