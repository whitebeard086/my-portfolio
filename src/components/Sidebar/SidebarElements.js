import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const SidebarContainer = styled.aside`
  display: none;
  flex-direction: column;
  position: fixed;
  z-index: 999;
  width: 40%;
  padding: 2rem;
  background: rgba(93, 97, 124, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px 0 0 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  align-items: flex-start;
  top: 0;
  right: 0;
  transition: 0.4s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media ${props => props.theme.breakpoints.md2} {
    display: flex;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 60%;
  }

  @media ${props => props.theme.breakpoints.xsm} {
    width: 75%;
  }
`;

export const CloseIcon = styled(MdClose)`
    font-size: 2.5rem;
    color: rgb(225, 173, 105);
    cursor: pointer;
    margin-bottom: 2rem;

  &:hover {
    color: rgba(225, 173, 105, 0.7);
    transition: 0.4s ease;
`;

export const Icon = styled.div`
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  &:active {
    -webkit-tap-highlight-color: rgba(45, 46, 73, 0.1);
  }
`;

export const SidebarWrapper = styled.div``;

export const MobileMenuLinks = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  text-align: end;
  margin-bottom: 5rem;
  z-index: 99;
`;

export const HeaderButton = styled.div`
  cursor: pointer;

  &:hover {
    transition: 0.3s ease;
    transform: translateY(-2px);
  }

  &:active {
    -webkit-tap-highlight-color: rgba(45, 46, 73, 0.1);
    transition: 0.3s ease;
    transform: translateY(6px);
  }

  @media ${props => props.theme.breakpoints.md2} {
    display: ${props => (props.mobile ? "flex" : "none")};
  }
`;

export const HeaderButtonText = styled.a`
  transition: 0.3s ease;
  color: ${props => props.theme.colors.button};
  font-weight: bold;
  border: 2px solid ${props => props.theme.colors.button};
  border-radius: 0.6rem;
  padding: 1.3rem 2rem;
  margin-left: 2rem;

  @media ${props => props.theme.breakpoints.md2} {
    margin: 4rem 0 0 0;
  }

  @media ${props => props.theme.breakpoints.lg} {
    margin-left: 1.2rem;
  }

  &:hover {
    background: rgba(225, 173, 105, 0.1);
  }
`;

export const NavLink = styled.a`
  font-size: ${props => (props.mobile ? "1.8rem" : "2rem")};
  line-height: 32px;
  margin-left: ${props => (props.logo ? "0" : "1rem")};
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;

  &:hover {
    color: ${props => (props.logo ? "rgba(225, 173, 105, 0.5)" : "rgb(225, 173, 105)")};
    opacity: 1;
    cursor: pointer;
  }

  &:active {
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

export const Paragraph = styled.p`
  color: white;
  margin: 0rem 2.5rem;

  &.mobile {
    margin: 0.8rem 0;
  }
`;

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
    padding: 2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.xsm} {
    padding: 1rem;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(45, 46, 73, 0.5);
  border-radius: 8px;
`;
