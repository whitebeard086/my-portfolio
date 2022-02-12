import { CgMenuRight } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1000px; */
  padding: 2rem 5rem;

  @media ${props => props.theme.breakpoints.md} {
    padding: 2rem 3rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 2rem 2rem;
  }
`;

export const HeaderLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled(Image)`
  
`;

export const SocialIconWrapper = styled.div`
  margin-left: 3rem;

  @media ${props => props.theme.breakpoints.md2} {
    display: none;
  }

  @media ${props => props.theme.breakpoints.lg} {
    margin-left: 1rem;
  }
`;

export const HeaderLogo = styled.div`
  margin-top: 1rem;
  color: rgb(225, 173, 105);
`;

export const HeaderButton = styled.div`
  cursor: pointer;
  
  @media ${props => props.theme.breakpoints.md2} {
    display: ${props => (props.mobile ? "flex" : "none")};
  }
`;

export const HeaderButtonText = styled.a`
  transition: 0.5s ease;
  color: ${props => props.theme.colors.button};
  font-weight: bold;
  border: 2px solid ${props => props.theme.colors.button};
  border-radius: .6rem;
  padding: 1.3rem 2rem;
  margin-left: 2rem;

  @media ${props => props.theme.breakpoints.md2} {
    margin: 4rem 0 0 0;
  }

  @media ${props => props.theme.breakpoints.lg} {
    margin-left: 1.2rem;
  }

  &:hover {
    background: rgba(225, 173,105, 0.1);
  }
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media ${props => props.theme.breakpoints.md2} {
    display: none;
  }
`;

export const MenuOpen = styled(CgMenuRight)`
  display: none;
  font-size: 3.5rem;
  color: rgb(225, 173, 105);
  cursor: pointer;

  &:hover {
    color: rgba(225, 173, 105, 0.7);
    transition: 0.4s ease;
  }

  &:active {
    -webkit-tap-highlight-color: rgba(45, 46, 73, 0.1);
  }

  @media ${props => props.theme.breakpoints.md2} {
    display: flex;
  }
`;

export const SocialIconsContainer = styled.div``;

export const SocialIcons = styled.a`
  transition: 0.5s ease;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 0 1rem;
  padding: 8px;

  &:hover {
    cursor: pointer;
    color: rgba(225, 173, 105);
  }

  &:active {
    -webkit-tap-highlight-color: rgba(45, 46, 73, 0.1);
  }

  @media ${props => props.theme.breakpoints.lg} {
    margin: 0;
  }

  @media ${props => props.theme.breakpoints.md2} {
    padding: 4px;
    margin: ${props => (props.mobile ? "0 3.5rem 0 0" : "2px")};
  }
`;

export const Paragraph = styled.p`
  color: white;
  margin: 0rem 2.5rem;

  &.mobile {
    margin: 0.8rem 0;
  }
`;

// Navigation Links
export const LinkN = styled(Link)`
  
`;

export const NavLink = styled.a`
  font-size: ${props => (props.mobile ? "1.8rem" : "2rem")};
  line-height: 32px;
  margin-left: ${(props) => (props.logo ? "0" : "1rem")};
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: ${props => (props.logo ? "rgba(225, 173, 105, 0.5)" : "rgb(225, 173, 105)")};
    opacity: 1;
    cursor: pointer;
  }
  &:focus {
    -webkit-tap-highlight-color: rgba(45, 46, 73, 0.1);
  }
  
  @media ${props => props.theme.breakpoints.lg} {
    margin-left: ${props => (props.logo ? "-1rem" : "-0.9rem")};
    font-size: 1.7rem;
  }

  @media ${props => props.theme.breakpoints.md2} {
    margin-left: ${props => (props.mobile ? "1rem" : "-0.5rem")};
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: ${props => (props.mobile ? "1rem" : "0")};
  }
`;
