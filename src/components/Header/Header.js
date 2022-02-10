import { useState } from "react";
import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { HiMail, HiUser } from "react-icons/hi";
import { FaCodeBranch, FaLinkedinIn } from "react-icons/fa";

import logo from "../../../public/images/logo1.svg"

import {
  MobileMenu,
  MenuOpen,
  MenuClose,
  MobileMenuContainer,
  NavLink,
  Paragraph,
  SocialIconWrapper,
  SocialIconsContainer,
  SocialIcons,
  MobileMenuLinks,
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
        <SocialIcons passHref href="https://github.com" target="_blank" rel="noopener noreferrer">
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
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
      <HeaderContainer>
          <HeaderLinks>
              <HeaderLogo>
                <Link passHref href="/">
                  <NavLink logo
                    style={{ display: "flex", alignItems: "center", color: "rgb(225, 173,105)"}}>
                    <Img src={logo} alt="logo" />
                  </NavLink>
                </Link>
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
          {/* <MobileMenu>
              {toggleMenu 
                  ? <MenuClose onClick={() => setToggleMenu(false)} />
                  : <MenuOpen onClick={() => setToggleMenu(true)} />
              }
              {toggleMenu && (
                  <MobileMenuContainer onClick={() => setToggleMenu(false)}>
                    <MenuClose onClick={() => setToggleMenu(false)} />
                    <MobileMenuLinks>
                      <Paragraph className="mobile"><NavLink mobile passHref href="#about"><HiUser size="1.6rem" style={{ marginRight: "1rem" }} /> About</NavLink></Paragraph>
                      <Paragraph className="mobile"><NavLink mobile passHref href="#projects"><FaCodeBranch size="1.5rem" style={{ marginRight: "1rem" }} /> Projects</NavLink></Paragraph>
                      <Paragraph className="mobile"><NavLink mobile passHref href="#contact"><HiMail size="1.6rem" style={{ marginRight: "1rem" }} /> Contact</NavLink></Paragraph>
                      <HeaderButton mobile>
                        <HeaderButtonText>Resume</HeaderButtonText>
                      </HeaderButton>
                    </MobileMenuLinks>
                    <SocialIconsContainer>
                      <SocialIcons mobile passHref href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FiGithub size="2rem" />
                      </SocialIcons>
                      <SocialIcons mobile passHref href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn size="2rem" />
                      </SocialIcons>
                      <SocialIcons mobile passHref href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FiInstagram size="2rem" />
                      </SocialIcons>
                    </SocialIconsContainer>
                  </MobileMenuContainer>
              )}
          </MobileMenu> */}
      </HeaderContainer>
  )
}

export default Header;
