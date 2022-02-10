import styled from "styled-components";

export const Container = styled.div`
    padding-top: 6rem;

    @media ${props => props.theme.breakpoints.md2} {
        padding-top: 8rem;
    }
`;