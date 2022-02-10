import styled from "styled-components"

export const ContactButton = styled.div`
  margin: 3rem 0;
  cursor: pointer;

  @media ${props => props.theme.breakpoints.md} {
    margin-left: 1.2rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-left: 2rem;
  }
`;

export const ContactItem = styled.a`
  transition: 0.5s ease;
  color: ${props => props.theme.colors.button};
  font-weight: bold;
  border: 2px solid ${props => props.theme.colors.button};
  border-radius: .6rem;
  padding: 1.3rem 3rem;

  &:hover {
    background: rgba(225, 173,105, 0.1);
  }
`;
