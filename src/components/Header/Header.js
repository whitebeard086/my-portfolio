
import React from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import logo from "../../../public/images/logo1.svg"

import {
  MenuOpen,
  LinkN,
  NavLink,
  Paragraph,
  SocialIconWrapper,
  SocialIconsContainer,
  SocialIcons,
  HeaderContainer,
  HeaderLinks,
  Img,
  HeaderButton,
  HeaderButtonText,
  HeaderLogo,
  HeaderLinksContainer,
} from "./HeaderStyles";

const Menu = () => (
  <>
      <Paragraph><NavLink href="#about">About</NavLink></Paragraph>
      <Paragraph><NavLink href="#projects">Projects</NavLink></Paragraph>
      <Paragraph><NavLink href="#contact">Contact</NavLink></Paragraph>
  </>
)

const SocialIconsComponent = () => (
  <>
      <SocialIconsContainer>
        <SocialIcons passHref href="https://github.com/whitebeard086" target="_blank" rel="noopener noreferrer">
          <FiGithub size="2.5rem" />
        </SocialIcons>
        <SocialIcons passHref href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size="2.5rem" />
        </SocialIcons>
        <SocialIcons passHref href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FiInstagram size="2.5rem" />
        </SocialIcons>
      </SocialIconsContainer>
  </>
)

const Header = ({ toggleSideBar }) => {
  return (
      <HeaderContainer>
          <HeaderLinks>
              <HeaderLogo>
                <LinkN passHref href="/">
                  <NavLink logo
                    style={{ display: "flex", alignItems: "center", color: "rgb(225, 173,105)"}}>
                    <Img src={logo} alt="logo" />
                  </NavLink>
                </LinkN>
              </HeaderLogo>
              <HeaderLinksContainer>
                  <Menu />
              </HeaderLinksContainer>
          </HeaderLinks>
          <SocialIconWrapper>
            <SocialIconsComponent />
          </SocialIconWrapper>
          <HeaderButton>
            <HeaderButtonText>Resume</HeaderButtonText>
          </HeaderButton>
          <MenuOpen onClick={toggleSideBar} />
      </HeaderContainer>
  )
}

export default Header;
