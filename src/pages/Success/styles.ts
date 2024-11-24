import styled from "styled-components";

export const SuccessContainer = styled.main`
    padding: 5rem 0;
    display: flex;
    gap: 4.75rem;

    h1 {
        font-size: 2rem;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 900;
        color: ${props => props.theme.produto['yellow-dark']};
        margin-bottom: 0.25rem;
    }

    p {
        color: ${props => props.theme.base['base-subtitle']};
        font-size: 1.25rem;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 2.5rem;
    }
`

export const SuccessBox = styled.div`
    /* border: 1px solid black;
    border-image: linear-gradient(to right, #DBAC2C, #8047F8) 1; */
    position: relative;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        border-radius: 6px 36px;
        background-image: linear-gradient(to bottom right, #dbac2c, #8047f8);
        z-index: -2;
    }
    &::after {
        content: '';
        position: absolute;
        top: 1px;
        right: 1px;
        height: calc(100% - 2px);
        width: calc(100% - 2px);
        border-radius: 6px 36px;
        background: ${props => props.theme.base['background']};
        z-index: -1;
    }

    span {
        color: ${props => props.theme.base['base-text']};
        font-size: 1rem;
    }
`

export const SuccessBoxLayer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const SuccessIcon = styled.div`
    border-radius: 50%;
    padding: 0.5rem;
    color: ${props => props.theme.base['background']};
    display: flex;
    align-items: center;

`

export const SuccessIconPurple = styled(SuccessIcon)`
    background-color: ${props => props.theme.produto['purple']};
`
export const SuccessIconYellow = styled(SuccessIcon)`
    background-color: ${props => props.theme.produto['yellow']};
`
export const SuccessIconOrange = styled(SuccessIcon)`
    background-color: ${props => props.theme.produto['yellow-dark']};
`