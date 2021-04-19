import React from 'react'
import { FooterWrapper, selfImg, SocialMedia, SocialMediaList } from '../style-vivian'
import Logo from '../images/self-logo.png'
const Footer = () => {
    return (
        <FooterWrapper>
            <img src={Logo} alt="logo" style={{width:'10%', alignSelf:'center', marginTop:'3%'}}/>
            <SocialMediaList>
                <SocialMedia>Twitter</SocialMedia>
                <SocialMedia>Linkedin</SocialMedia>
                <SocialMedia>Github</SocialMedia>
                <SocialMedia>Instagram</SocialMedia>
            </SocialMediaList>
            <span>@2021 Viviann Wang Rydh</span>
        </FooterWrapper>
    )
}

export default Footer;
