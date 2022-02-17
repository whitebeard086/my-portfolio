import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 13px rgba(160, 161, 191, 0.2);
  text-align: center;
  width: 400px;

  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${props => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: rgb(225, 173,105);
`;

export const CardInfo = styled.p`
  width: 100%;
  height: 100px;
  padding: 0 50px;
  margin: 0 0 4rem 0;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: start;
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 2rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  position: relative;
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: rgba(93, 97, 124, 0.4);
  border-radius: 15px;
  transition: 0.4s;

  &:hover {
    background: rgba(93, 97, 124, 0.6);
  }

  &:focus {
    -webkit-tap-highlight-color: rgba(45, 46, 73, 0.1);
  }

  &:active {
    -webkit-tap-highlight-color: rgba(45, 46, 73, 0.1);
  }

  &::after {
    position: absolute;
    content: "${props => (props.code ? "view code" : "visit site")}";
    white-space: nowrap;
    font-size: 1.4rem;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.7);
    background: rgba(93, 97, 124, 0.4);
    left: ${props => (props.code ? "-27px" : "-20px")};
    top: 0;
    transform: scale(0);
    transition: transform ease-out 200ms, top ease-out 200ms;
  }

  &:hover::after {
    transform: scale(1);
    top: -35px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 5rem;

  @media ${props => props.theme.breakpoints.xsm} {
    padding: 4rem 2rem 1rem 2rem;
  }
`;
export const Tag = styled.li`
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1rem;
  border-radius: 7px;
  padding: 0.6rem 1.1rem;
  background: rgba(93, 97, 124, 0.1);
  font-size: 1.2rem;
`;
