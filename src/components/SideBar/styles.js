import {styled} from 'styled-components';

export const Container = styled.section`
    background: ${(props) => props.theme.colors.color4};
    display: flex;
    max-width: 25%;
    height: 100vh;
    align-items: center;
    flex-direction: column;
`

export const ContainerLogo = styled.div`
    margin: 1.5rem;
`

export const Logo = styled.img`
    width: 80px;
`

export const Icon = styled.label`
    font-size: 1.5rem;
    position: absolute;
    left: 1rem;
    color: ${(props) => props.theme.colors.color1};
`

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    list-style: none;
    text-align: center;
`

export const Item = styled.li`
    width: 110%;
    padding-bottom: 5px;
    margin: 1rem auto 2rem auto;
    border-bottom: 1px solid #000;
    
`

export const Link = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 1rem;
    color: ${(props) => props.theme.colors.color6};
    transition: .5s;
    text-shadow: 1px 2px 5px #000;
    
    &:hover{
        color: #4e4e4e;
        text-shadow: 1px 2px 5px ${(props) => props.theme.colors.color1};
     }
   
`