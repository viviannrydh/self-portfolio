import styled from 'styled-components';
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';

export const BodyWrapper=styled.div`
    background-color:rgb(5, 5, 37);
    background-image:url('https://png.pngtree.com/thumb_back/fh260/background/20201104/pngtree-technology-background-binary-computer-code-vector-design-image_458702.jpg');
    background-size: 100% 550px;
    background-repeat: no-repeat;
    border-radius: 50px 100px / 120px;
    font-family: League Spartan,Helvetica,Arial,sans-serif;
    @media (max-width: 768px){
        background-size:100% 220px;
      
    }
  `

export const NavWrapper=styled.nav`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    color:white;
    justify-content:flex-end;
    padding-top:3%;
    padding-right:2%;
    @media (max-width: 768px){
        justify-content:center;
    }
   
`
export const NavButton=styled.button`
    background-color:rgb(24, 1, 16,0.8);
    height:4em;
    width:8em;
    margin-right:1em;
    border:none;
    border-radius:20%;
    @media (max-width: 768px){
       height:3em;
       width:5em;
       margin-right:0.2em;
       margin-top:5%;
    }
`
export const NavLink=styled.a`
    color:white;
    text-decoration:none;
    font-size:1.5em;
    @media (max-width: 768px){
      font-size:1.1em;
    }
    
`
export const HeaderWrapper = styled(motion.section) `
    color:white;
    padding-left:18%;
    padding-top:13%;
    font-family: League Spartan,Helvetica,Arial,sans-serif;
    font-size:3em;
    @media (max-width: 768px){
        font-family: League Spartan,Helvetica,Arial,sans-serif;
        font-size:1.5em;
        padding-top:20%;
    }
    
`

export const StyledButton=styled.button`
    background-color: rgb(128, 0, 128);
    height:3.2em;
    color:white;
    font-size:16px;
    border-radius:5%;
    border: none;
`

export const SectionWrapper=styled.section`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-top:3%;
`

export const SectionHeaderStyle=styled.h1`
    align-items:center;
    color:rgb(242, 242, 247);
    margin-left:42%;
    margin-bottom:5%;
    font-size:2em;
    @media (max-width: 768px){
        font-size:1.2em;
    }
`
export const CardsWrapper=styled.section`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
    width:80%;
    margin-left:10%;
    @media (max-width: 768px){
        width:90%;
        margin-left:5%;
    }
    

`
export const Card=styled(motion.div)`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    text-align:center;
    background-color:rgb(242, 242, 247);
    width:29%;
    height:200px;
    margin:10px;
    border-radius:10%;
    /*box-shadow: 5px 5px rgb(201, 217, 250);*/
    padding:10px;
    @media (max-width: 768px){
        width:90%;
        padding:5px;
    }
`
export const CardImg=styled.img`
    width:45%;
    height:150px;
    padding-top:10px;
    @media (max-width: 768px){
        width:45%;
        height:120px;
        padding-top:10%;
    }
    
`
export const CardText=styled.div`
    width:45%;
    padding-left:10px;
    padding-top:10px;

`
export const ListsWrapper=styled(motion.ul)` 
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    width:80%;
    margin-left:7%;
    @media (max-width: 768px){
        justify-content:center;
        margin-left:0%;
        
    }
`
export const ListItem=styled.li`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    width:20%;
    margin:10px;
    background-color:rgb(242, 242, 247);
    border-radius:50%;
    @media (max-width: 768px){
        width:25%;
        margin:0px;
        border-radius:0%;
    }
`

export const ListImg=styled.img`
    width:50%;
    height:100px;
    align-items:center;
    padding-top:10%;
    padding-left:25%;
    @media (max-width: 768px){
        width:50px;
        height:50px;
       
    }
`
export const ListText=styled.h4`
    color:rgb(4, 4, 37);
    text-align:center;
    @media (max-width: 768px){
        font-size:10px;
    }
`
export const ProjectsWrapper=styled.section`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    width:90%;
    margin-left:6%;
    padding-bottom:10%;
    @media (max-width: 768px){
        flex-direction:column;
        margin-left:8%;
    }
`
export const Project=styled.div`
    width:40%;
    background-color:rgb(59, 52, 52,0.5);
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    border-radius:10%;
    margin:5px;
    color:rgb(240, 243, 245);
    @media (max-width: 768px){
       width:90%;
       
    }
    
`
export const ProjectImg=styled.img`
    width:40%;
    height:90%;
    padding-top:5%;
    padding-left:2%;
    @media (max-width: 768px){
        width:50%;
        height:85%;
        padding-top:5%;
    }
`

export const ContentWrapper=styled.div`
    width:40%;
    height:80%;
    padding-left:10px;
    padding-top:15%;
    text-align:center;
    @media (max-width: 768px){
        width:40%;
        padding-top:5%;
    }
`
export const ProjectButtons=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
`
export const ProjectContent=styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    margin-top:5px;
    font-size:14px;
    line-height:1.5em;
    padding:5px;
    @media (max-width: 768px){
        flex-direction:row;
        font-size:10px;
        line-height:1.2em;
        text-align:center;
        padding-left:10px;
        justify-content:center;
    }
`
export const SkillsList=styled.li`
     display:flex;
     flex-direction:column;
     list-style:none;
     line-height:1.5em;
     @media (max-width: 768px){
        padding-left:12px;
    }
`
export const ProjectIntroduction=styled.div`


`
export const Button=styled.button`
    height:20px;
    border:none;
    font-size:10px;
    margin-top:10px;
    @media (max-width: 768px){
        margin-top:15px;
    }
`
export const ContactWrapper=styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    width:80%;
    margin-left:10%;
    margin-bottom:10%;
    @media (max-width: 768px){
        flex-direction:column;
        margin-left:15%;
    }
`
export const ContactTextSection=styled.section`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    background-color:rgb(253, 251, 251,0.9);
    width:40%;
    padding:5%;
    @media (max-width: 768px){
        width:80%
    }
`
export const ContactForm=styled.form`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:space-around;
    background-color:rgb(59, 52, 52,0.5);
    color:white;
    width:40%;
    padding:5%;
    @media (max-width: 768px){
        width:80%
    }
`

export const FormItem=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:80%;
    margin-top:10px;
`
export const SubmitButton=styled.button`
    width:40%;
    height:50px; 
    background-color:darkred;
    color:white;
    margin-top:15px;
    font-size:1em;
    border:none;
    font-weight:bold
`
export const FooterWrapper=styled.footer`
    background-color:rgb(235, 235, 225);
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    align-items:center;
    color:rgb(39, 39, 29);
    padding:10px;
    padding-bottom:10%;
    font-size:1em;
`

export const SocialMediaList=styled.ul`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    font-size:1.5em;
    list-style:none;
    padding-top:20px;
    text-shadow:1.5px 1.5px rgb(161, 161, 159)
`
export const SocialMedia=styled.li`
    margin:10px;

`