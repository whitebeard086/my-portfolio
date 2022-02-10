import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiInstagram } from "react-icons/fi";

import { SocialIcons } from "../Header/HeaderStyles";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { CompanyContainer, FooterWrapper, LinkList, Slogan, SocialContainer, SocialIconsContainer } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Alex 2022. All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FiGithub size="2.5rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size="2.5rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FiInstagram size="2.5rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <ScrollToTop />
    </FooterWrapper>
  );
};

export default Footer;
