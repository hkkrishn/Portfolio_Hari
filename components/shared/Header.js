//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the Header component, it holds the main navbar

import React,{Component,useState} from 'react'
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


//Helper component to create styled next.js links

const HelperNavLink = (props)=>{
    const {title,url} = props
    return (
        <Link href = {url}>
        <a className = "nav-link">
            {title}
        </a>
    </Link>
    )
}

//Header React class component that uses the Next.js Link Component to create a tags or links to all other pages

class Header extends Component{

        state = {
            isOpen:false
        }

    toggle = ()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
        return(
            <Navbar color="light" light expand="md">
     <NavbarBrand href="/">Harikrishnan</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="mr-auto" navbar>
             <NavItem>
               <HelperNavLink title = "Home" url = "/" />
             </NavItem>
             <NavItem>
             <HelperNavLink title = "About" url = "/about" />
             </NavItem>
             <NavItem>
             <HelperNavLink title = "Projects" url = "/portfolios" />
             </NavItem>
             <NavItem>
             <HelperNavLink title = "Blogs" url = "/blogs" />
             </NavItem>
             <NavItem>
             <HelperNavLink title = "Resume" url = "/cv" />
             </NavItem>
             <NavItem>
               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
             </NavItem>

           </Nav>

         </Collapse>
       </Navbar>

        )
    }
}

export default Header;
