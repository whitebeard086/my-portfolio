import { FaCodeBranch, FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { HiMail, HiUser } from "react-icons/hi";
import { CloseIcon, HeaderButton, HeaderButtonText, Icon, MobileMenuLinks, SidebarContainer, SidebarWrapper, Paragraph, NavLink, SocialIconsContainer, SocialIcons } from "./SidebarElements";


const Sidebar = ({ isOpen, toggleSideBar }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggleSideBar}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <MobileMenuLinks>
                    <Paragraph onClick={toggleSideBar} className="mobile"><NavLink mobile passHref href="#about"><HiUser size="1.6rem" style={{ marginRight: "1rem" }} /> About</NavLink></Paragraph>
                    <Paragraph onClick={toggleSideBar} className="mobile"><NavLink mobile passHref href="#projects"><FaCodeBranch size="1.5rem" style={{ marginRight: "1rem" }} /> Projects</NavLink></Paragraph>
                    <Paragraph onClick={toggleSideBar} className="mobile"><NavLink mobile passHref href="#contact"><HiMail size="1.6rem" style={{ marginRight: "1rem" }} /> Contact</NavLink></Paragraph>
                    <HeaderButton mobile>
                        <HeaderButtonText>Resume</HeaderButtonText>
                    </HeaderButton>
                </MobileMenuLinks>
                    <SocialIconsContainer>
                    <SocialIcons onClick={toggleSideBar} mobile passHref href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FiGithub size="2rem" />
                    </SocialIcons>
                    <SocialIcons onClick={toggleSideBar} mobile passHref href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn size="2rem" />
                    </SocialIcons>
                    <SocialIcons onClick={toggleSideBar} mobile passHref href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FiInstagram size="2rem" />
                    </SocialIcons>
                    </SocialIconsContainer>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;