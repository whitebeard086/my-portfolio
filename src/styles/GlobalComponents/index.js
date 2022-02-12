import styled from "styled-components";

export const Section = styled.section`
  display: ${props => (props.grid ? "grid" : "flex")};
  flex-direction: ${props => (props.row ? "row" : "column")};
  padding: ${props => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  margin-bottom: ${props => (props.main ? "15rem" : "auto")};
  max-width: 1040px;
  height: ${({ hero }) => (hero ? "100vh" : "auto")};
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${props => props.theme.breakpoints.md2} {
    padding: 24px 30px 0 30px;
    margin-top: ${({ hero }) => (hero ? "1rem" : "default")};
    flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: ${props => (props.nopadding ? "0rem" : "16px 16px 0")};
    height: ${({ hero }) => (hero ? "auto" : "auto")};
    margin: ${({ hero }) => (hero ? "0 0 20rem 0" : "default")};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${props => (props.main ? "65px" : "56px")};
  line-height: ${props => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${props => (props.main ? "38px 0 16px" : "0")};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${props => (props.main ? "52px" : "48px")};
    line-height: ${props => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${props => (props.main ? "32px 0 12px" : "0 1rem 0 1rem")};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${props => (props.main ? "38px" : "32px")};
    line-height: ${props => (props.main ? "38px" : "40px")};
    margin: ${({ hero }) => (hero ? "1.2rem 0 2rem 0" : "0 0 8px 0")};
    padding: ${props => (props.main ? "16px 0 8px" : "0 2rem 0 2rem")};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
  padding-bottom: ${props => (props.minor ? "0" : "3.6rem")};

  @media ${props => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    margin: ${props => (props.hero ? "0" : "0 1rem 0 1rem")};
    padding-bottom: ${props => (props.minor ? "0" : "24px")};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 28px;
    margin: ${props => (props.hero ? "0" : "0 3rem 0 2rem")};
    padding-bottom: ${props => (props.minor ? "0" : "16px")};
  }
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${props =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};

  margin: ${props => (props.divider ? "4rem 0" : "")};

  @media ${props => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
    margin-left: 1rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
    margin-left: 2rem;
  }
`;

export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
