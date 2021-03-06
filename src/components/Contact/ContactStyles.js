import styled from "styled-components"

export const ContactButton = styled.div`
  margin: 3rem 0;

  &:hover {
    transition: 0.3s ease;
    transform: translateY(-2px);
  }
  
  &:active {
    -webkit-tap-highlight-color: rgba(45, 46, 73, 0.1);
    transition: 0.3s ease;
    transform: translateY(6px);
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-left: 1.2rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-left: 2rem;
  }
`;

export const ContactItem = styled.a`
  transition: 0.3s ease;
  color: ${props => props.theme.colors.button};
  font-weight: bold;
  border: 2px solid ${props => props.theme.colors.button};
  border-radius: .6rem;
  padding: 1.3rem 3rem;
  cursor: pointer;

  &:hover {
    background: rgba(225, 173,105, 0.1);
  }
`;
