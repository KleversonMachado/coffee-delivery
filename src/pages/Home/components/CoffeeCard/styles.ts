import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: ${props => props.theme.base['base-card']};
    border-radius: 6px 36px;
    padding: 1.25rem 1.25rem 0 1.25rem;

    img {
        position: relative;
        left: 50%;
        top: calc(-1.25rem * 2);
        transform: translateX(-50%);
    }
    :not(img) {
        text-align: center;
    }
    h3 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: bold;
        font-size: 1.25rem;
        color: ${props => props.theme.base['base-subtitle']};
        margin-bottom: 0.5rem;
    }
    p {
        margin-bottom: 2rem;
        font-size: 0.875rem;
        color: ${props => props.theme.base['base-label']};
    }

`

export const CardVariation = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    column-gap: 0.25rem;

    span {
        border-radius: 100px;
        background-color: ${props => props.theme.produto['yellow-light']};
        color: ${props => props.theme.produto['yellow-dark']};
        padding: 0.25rem 0.5rem;
        font-weight: bold;
        font-size: 0.625rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
`

export const WrapperCardContent = styled.div`
    position: relative;
    top: -1.75rem;
`

export const ActionArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div:first-child {
        color: ${props => props.theme.base['base-text']};
        display: flex;
        align-items: baseline;
        span {
            font-size: 0.875rem;
            font-weight: 500;
        }
        h3 {
            margin: 0;
            font-weight: 800;
            font-size: 1.5rem;
        }
    }
`

export const AddToCartButton = styled.button`
    border: 0;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 6px;
    background: ${props => props.theme.produto['purple-dark']};
    color: ${props => props.theme.base['base-card']};
    transition: background-color 0.1s;
    &:hover {
        background-color: ${props => props.theme.produto['purple']};
    }
    svg {
        position: relative;
        top: 0.1rem;
        left: 0.05rem;
    }
`

export const CountInput = styled.div`
    background-color: ${props => props.theme.base['base-button']};
    padding: 0.5rem;
    border-radius: 6px;
    gap: 0.25rem;
    display: flex;
    align-items: center;
    span {
        color: ${props => props.theme.base['base-title']};
        width: 1.25rem;
        font-size: 1rem;
    }
    button {
        color: ${props => props.theme.produto['purple']};
        background-color: transparent;
        cursor: pointer;
        border: none;
        outline: none;
        &:hover {
            color: ${props => props.theme.produto['purple-dark']};
        }
    }
`