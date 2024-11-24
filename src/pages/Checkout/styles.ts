import styled from "styled-components";

export const CheckoutContainer = styled.main`
    margin-bottom: 9.8125rem;
    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.125rem;
        margin-bottom: 0.9375rem;
    }
    form {
        display: flex;
        align-items: flex-start;
        gap: 2rem;
    }
`
export const FormCheckout = styled.div`
    flex: 1;
`

export const SelectedCoffees = styled.div`
    width: 28rem;
`



export const BoxSchema = styled.div`
    background-color: ${props => props.theme.base['base-card']};
    border-radius: 6px;
    padding: 2.5rem;
`

export const InfoCheckout = styled(BoxSchema)`
    margin-bottom: 0.75rem;

`

export const AddressLegend = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    h3 {
        color: ${props => props.theme.base['base-subtitle']};
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.125rem;
    }

    p {
        color: ${props => props.theme.base['base-text']};
        font-size: 0.875rem;
    }

    svg {
        color: ${props => props.theme.produto['yellow-dark']};
    }
`

export const InputsCheckout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const InputSchema = styled.input`
    border: 1px solid ${props => props.theme.base['base-button']};
    background-color: ${props => props.theme.base['base-input']};
    border-radius: 4px;
    font-size: 0.875rem;
    padding: 0.75rem;
    color: ${props => props.theme.base['base-text']};
    &::placeholder {
        color: ${props => props.theme.base['base-label']};
    }
    &:focus {
        border: 1px solid ${props => props.theme.produto['yellow-dark']};
        &::placeholder {
            color: transparent;
        }
    }
`

export const InputCEP = styled(InputSchema)`
    width: 12.5rem;
`
export const InputStreet = styled(InputSchema)`

`


export const InputGroupTwo = styled.div`
    display: flex;
    gap: 0.75rem;
    div {
        flex: 1;
        position: relative;
        &::after {
            content: 'Opcional';
            position: absolute;
            top: calc(50% + 1px);
            font-size: 0.75rem;
            font-style: italic;
            right: 0.75rem;
            transform: translateY(-50%);
            color: ${props => props.theme.base['base-label']};
            cursor: text;
            padding: 0.125rem 0 0.125rem 0.125rem;
            background-color: ${props => props.theme.base['base-input']};
        }
    }
`
export const InputNumber = styled(InputSchema)`

`
export const InputComplement = styled(InputSchema)`
    width: 100%;
    
`


export const InputGroupThree = styled.div`
    display: flex;
    gap: 0.75rem;
`

export const InputNeighborhood = styled(InputSchema)`

`
export const InputCity = styled(InputSchema)`
    flex: 1;
`
export const InputUF = styled(InputSchema)`
    width: 3.75rem;
`


export const PaymethodCheckout = styled(BoxSchema)`

`

export const PaymentLegend = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    h3 {
        color: ${props => props.theme.base['base-subtitle']};
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.125rem;
    }

    p {
        color: ${props => props.theme.base['base-text']};
        font-size: 0.875rem;
    }

    svg {
        color: ${props => props.theme.produto['purple']};
    }
`

export const WrapperPayments = styled.div`
    display: flex;
    gap: 0.75rem;
    
    label {
        display: flex;
        width: 33.3%;
        align-items: center;
        gap: 0.75rem;
        background-color: ${props => props.theme.produto['purple-light']};
        border: 1px solid transparent;
        border-radius: 6px;
        color: ${props => props.theme.base['base-text']};
        text-transform: uppercase;
        padding: 0.75rem;
        cursor: pointer;
        line-height: 1.6;
        font-size: 0.70rem;
        svg {
            color: ${props => props.theme.produto['purple']};
        }
        &:hover {
            background-color: ${props => props.theme.base['base-hover']};
        }
    }
    input {
        display: none;
        &:checked + label {
            border-color: ${props => props.theme.produto['purple']};
            background-color: ${props => props.theme.produto['purple-light']}!important;
        }
    }
`

export const ActionsCheckout = styled(BoxSchema)``

export const CartResult = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    gap: 0.84375rem;

    div {
        display: flex;
        justify-content: space-between;

        span {
            color: ${props => props.theme.base['base-text']};

            &:first-child {
                font-size: 0.875rem;
            }
            &:not(:first-child) {
                font-size: 1rem;
            }
        }
        h3 {
            color: ${props => props.theme.base['base-subtitle']};
            font-size: 1.25rem;
        }
    }
`

export const CoffeeCartList = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const InputForm = styled.input`
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    border: none;
    width: 100%;
    text-transform: uppercase;
    background-color: ${props => props.theme.produto['yellow']};
    color: ${props => props.theme.base['white']};
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.6;
    font-weight: bold;
    transition: background-color .1s;
    
    &:hover {
        background-color: ${props => props.theme.produto['yellow-dark']};
    }
`