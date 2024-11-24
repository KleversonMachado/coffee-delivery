import styled from "styled-components";

export const HomeContainer = styled.main`
    padding: 0 0 9.8125rem 0;
`

export const MainHome = styled.div`
    padding: 5.75rem 0;
    display: flex;
    gap: 3.5rem;
    @media (max-width: 910px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`    
export const LeftHome = styled.div`
    position: relative;
    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 3rem;
        margin-bottom: 1rem;
        color: ${props => props.theme.base['base-title']};
    }
    p {
        font-size: 1.25rem;
        color: ${props => props.theme.base['base-subtitle']};
        margin-bottom: 4.125rem;
    }
`

export const RightHome = styled.div`
    position: relative;
    img {
        overflow: hidden;
    }
    img:first-child {
        width: 29.75rem;
        @media (max-width: 500px) {
            width: 100%;
        }
    }
    img:nth-child(2) {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    img:last-child {
        left: 50%;
        transform: translateX(-50%);
    }
    img:not(:first-child){
        width: 100%;
    }
`

export const BadgesHome = styled.div`
    display: grid;
    row-gap: 1.25rem;
    grid-template-columns: 2fr 2fr;
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
    div {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        svg {
            width: 1rem;
            height: 1rem;
        }
    }
    span {
        font-size: 1rem;
        color: ${props => props.theme.base['base-text']};
    }
`

export const BaseIconContainer = styled.div`
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.base['background']};
`

export const IconContainerOrange = styled(BaseIconContainer)`
    background-color: ${props => props.theme.produto['yellow-dark']};
`

export const IconContainerGray = styled(BaseIconContainer)`
    background-color: ${props => props.theme.base['base-text']};
`

export const IconContainerYellow = styled(BaseIconContainer)`
    background-color: ${props => props.theme.produto['yellow']};
`

export const IconContainerPurple = styled(BaseIconContainer)`
    background-color: ${props => props.theme.produto['purple']};
`

export const WrapperCafesHome = styled.div`
    margin-top: 2rem;
    h2 {
        font-size: 2rem;
        font-weight: 800;
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme.base['base-subtitle']};
        margin-bottom: 3.375rem;
    }
`

export const CoffeeLists = styled.div`
    display: grid;
    grid-template-columns: calc(25% - 2rem) calc(25% - 2rem) calc(25% - 2rem) calc(25% - 2rem);
    grid-gap: 2rem 2.5rem;
    
    @media(max-width: 1100px) {
        grid-template-columns: calc(33.3% - 2rem) calc(33.3% - 2rem) calc(33.3% - 2rem);
    }
    @media(max-width: 820px) {
        grid-template-columns: calc(50% - 2rem) calc(50% - 2rem);
    }
    @media(max-width: 570px) {
        grid-template-columns: 1fr;
    }
`

export const Bright = styled.img`
    position: absolute;
    left: 40%;
    bottom: 0;
    transform: translateX(-50%);
    overflow: hidden;
    filter: blur(50px);
    width: 70%; 
    height: auto; 
    z-index: -1;
`;