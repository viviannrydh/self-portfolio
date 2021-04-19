import React from 'react'
import { NavButton, NavLink, NavWrapper } from '../style-vivian'

const Nav = () => {
    return (
        <NavWrapper>
            <NavButton><NavLink href="#education">Education</NavLink></NavButton>
            <NavButton><NavLink href="#skills">Skills</NavLink></NavButton>
            <NavButton><NavLink href="#projects">Projects</NavLink></NavButton>
            <NavButton><NavLink href="#contact">Contact</NavLink></NavButton>
        </NavWrapper>
    )
}

export default Nav
