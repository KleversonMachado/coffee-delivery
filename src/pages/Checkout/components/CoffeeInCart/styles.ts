import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    gap: 1.25rem;
`

export const Line = styled.hr`
    width: 100%;
    margin: 1.5rem 0;
    height: 1px;
    border: none;
    background-color: ${props => props.theme.base['base-button']};
`

export const ImgItem = styled.div`
    img {
        width: 4rem;
        height: 4rem;
    }
`

export const ActionsOnItem = styled.div`
   p {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.base['base-subtitle']};
    font-size: 1rem;
   }
`

export const WrapperActions = styled.div`
    display: flex;
    gap: 0.5rem;
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
        text-align: center;
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

export const RemoveButton = styled.button`
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: ${props => props.theme.base['base-text']};
    font-size: 0.75rem;
    border: none;
    background-color: ${props => props.theme.base['base-button']};
    border-radius: 6px;
    padding: 0 8px;
    gap: 0.25rem;
    transition: background-color .1s;

    &:hover {
        background-color: ${props => props.theme.base['base-hover']};
    }

    svg {
        color: ${props => props.theme.produto['purple']};
    }
`

export const PriceItem = styled.div`
    flex: 1;
    text-align: right;
    color: ${props => props.theme.base['base-text']};
`