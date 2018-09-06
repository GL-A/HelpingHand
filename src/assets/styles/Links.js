import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BasicLink = styled(Link)`
    color: black;
    :focus{
        outline: none;
    }
    text-decoration: none;
    :hover {
        color: ${ props => props.hover && "#076857"}
    }
`