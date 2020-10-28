import styled from 'styled-components'
import { Link } from "gatsby"
import { Blues, Greens, Greyscale } from './Colors'

export const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
`
export const SubTitle = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
`

export const MenuLink = styled(Link)`
    text-decoration: none;
    color: ${ Greyscale[2]};
    &:hover {
        color: ${ Blues[2]};
        transition: 0.3s;
    }
`