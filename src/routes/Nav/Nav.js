import React, { Component } from 'react'
import { 
    NavContainer, NavMainRow, NavSectionLeft, NavSectionRight, NavSectionLogo,
    NavStartLink, NavSearch, NavMenuIcon, NavSearchRow, NavSearchInput, NavSearchX,
    NavSectionNotLoggedin, NavMenuContainer, NavMenu
} from './styled'
import { connect } from 'react-redux'
import SearchIcon from './../../components/SearchIcon'
import menuIcon from './../../assets/icons/grid.svg'

class Nav extends Component {
    state = {
        showSearch: false,
        showMenu: false,
        user: true
    }
    showSearch = () => {
        console.log("clciked")
        this.setState({showSearch: !this.state.showSearch})
    }
    showMenu = (show) => {
        console.log("show menu")
        this.setState({showMenu: !this.state.showMenu})
    }
    render() {
        return (
        <NavContainer color="green">
            <NavMenuContainer 
            onClick={this.showMenu} showMenu={this.state.showMenu}>
                <NavMenu onClick={(e) => e.stopPropagation()}>

                </NavMenu>
            </NavMenuContainer>
            <NavSearchRow show={this.state.showSearch}>
                <NavSearchInput placeholder="Search for projects or categories"/>
                <NavSearchX onClick={this.showSearch}>X</NavSearchX>
            </NavSearchRow>
            <NavMainRow>
                <NavSectionLeft>
                    <h3>Explore</h3>
                    <NavStartLink to="/test" hover="true">
                        Start a project
                    </NavStartLink>
                </NavSectionLeft>
                <NavSectionLogo onClick={ () => this.props.history.push('/') }>
                    Helping Hand
                </NavSectionLogo>
                { this.state.user ? 
                <NavSectionRight>
                    <NavSearch onClick={this.showSearch}>
                        <p>Search</p>
                        <SearchIcon />
                    </NavSearch>
                    <NavMenuIcon onClick={this.showMenu} src={ menuIcon } showMenu={this.state.showMenu}/>
                </NavSectionRight> 
                :
                <NavSectionNotLoggedin>
                    <p>Login</p>
                    <p>Signup</p>
                </NavSectionNotLoggedin> }
            </NavMainRow>
        </NavContainer>
    )
    }
}

export default connect(state => ({
    state
}), {})(Nav)
