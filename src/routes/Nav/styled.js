import styled, { keyframes } from 'styled-components'
import { FlexStyle1, BasicLink } from './../../assets/styles/index.js'

export const NavContainer = styled.section`
    height: 80px;
    position: relative;
    border-bottom: solid 1px black;
    display: block;
    flex-wrap: no-wrap;
    overflow: scroll;
`
export const NavMenuContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    right: ${props => props.showMenu ? '20px' : '-100%'};
    transition: all ease-in-out 0.4s;
    z-index: 3;
`
export const NavMenu = styled(FlexStyle1)`
    position: absolute;
    top: 100px;
    right: 0;
    border: solid 1px black;
    height: 300px;
    width: 500px;
`
export const NavMainRow = styled(FlexStyle1)`
    position: fixed;
    width: 100%;
    height: 80px;
    left: 0;
`
export const NavSearchRow = styled(FlexStyle1)`
    position: fixed;
    background: white;
    width: 100%;
    height: 80px;
    right: 100%;
    right: ${props => props.show ? '0' : '-100%'}
    transition: all ease-in-out 0.4s;
    z-index: 2;
`
export const NavSearchInput = styled.input`
    width: 90%;
    height: 71px;
    border: none;
    padding: 0 8px;
    font-size: 16px;
    :focus {
        outline: none;
    }
`
export const NavSearchX = styled.p`
    width: 10%;
    font-size: 25px;
    text-align: center;
`
export const NavSectionLeft = styled(FlexStyle1)`
    width: 30%;
    background: white;
    cursor: pointer;
    h3 {
        font-size: 17px;
        font-weight: lighter;
        :hover {
            color: #076857;
        }
    }
`
export const NavSectionLogo = styled(FlexStyle1)`
    width: 40%;
    font-size: 30px;
    font-weight: bold;
    color: #073F48;
    background: white;
    cursor: pointer;
`
export const NavSectionRight = styled(FlexStyle1)`
    width: 30%;
    background: white;
`
export const NavSearch = styled(FlexStyle1)`
    cursor: pointer;
    p {
        margin-right: 15px;
    }
`
export const NavMenuIcon = styled.img`
    height: 30px;
    width: 40px;
    transform: ${props => props.showMenu ? "rotate(360deg)": "rotate(0deg)"};
    transition: all ease-in-out 0.4s;
    cursor: pointer;
`
export const NavStartLink = styled(BasicLink)`

`
export const NavSectionNotLoggedin = styled(FlexStyle1)`
    width: 30%;
    background: pink;
`