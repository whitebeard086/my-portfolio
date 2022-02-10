import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

export const ScrollButtonContainer = styled.div`
  transition: .2s ease;
  position: fixed;
  bottom: 6rem;
  right: 4rem;

  &:hover {
    bottom: 5.8rem;
    right: 3.8rem;
  }
`;

export const ScrollButton = styled.button`
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  cursor: pointer;
  transition: .4s ease;
  border-radius: 9px;
  color: rgb(225, 173, 105);
  background: rgba(160, 161, 191, 0.2);
  padding: 1.1rem 1.7rem;
  outline: none;
  border: none;

  &:hover {
    transition: .2s ease;
    background: rgba(160, 161, 191, 0.23);
  }
`;

export const ScrollIcon = styled(FaArrowUp)``;
