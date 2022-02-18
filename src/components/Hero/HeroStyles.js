import Link from 'next/link';
import styled from 'styled-components';
import background from "../../../public/images/background.svg";

export const HeroContainer = styled.div`

`;

export const LeftSection = styled.div`
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 86%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Button = styled.div`
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
`;

export const ButtonLink = styled(Link)`
 
`;

export const ButtonText = styled.a`
  transition: 0.3s ease;
  color: ${props => props.theme.colors.button};
  font-weight: bold;
  border: 2px solid ${props => props.theme.colors.button};
  border-radius: .6rem;
  padding: 1.3rem 3.5rem;
  cursor: pointer;

  &:hover{
    background: rgba(225, 173,105, 0.1);
  }
`;