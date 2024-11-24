import styled from "styled-components";

export const HeaderContainer = styled.header`
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
`

export const LogoHeader = styled.div`
    height: 2.5rem;
`

export const RightSideHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
        position: relative;
        text-decoration: none;
        color: ${props => props.theme.base['white']};
        span {
            position: absolute;
            right: 0;
            top: 0;
            transform: translate(50%,-50%);
            width: 1.25rem;
            height: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.75rem;
            background-color: ${props => props.theme.produto['yellow-dark']};
            border-radius: 50%;

        }
    }
`

export const LocaleHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${props => props.theme.produto['purple-light']};
    span {
        font-size: 0.875rem;
        font-weight: 500;
        color: ${props => props.theme.produto['purple-dark']};
    }
    svg {
        color: ${props => props.theme.produto['purple']};
    }
`

export const CartHeader = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 6px;
    background-color: ${props => props.theme.produto['yellow-light']};
    color: ${props => props.theme.produto['yellow-dark']};
    padding: 0.5rem;
`
