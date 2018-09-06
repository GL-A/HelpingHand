import React from 'react'
import styled from 'styled-components'
import searchIcon from './../assets/icons/search.svg'


const SearchIcon = styled.img`
    height: 22px;
    width: 22px;
    cursor: pointer;
`
export default () => (
    <SearchIcon src={searchIcon}/>
)