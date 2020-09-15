//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the Header component, it holds the main navbar

import React,{Component,useState} from 'react'
import { isAuthorized } from '@/utils/auth0';
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';


//Helper component to create styled next.js links

const HelperNavLink = (props)=>{

    const { url, title, className=''} = props;
    return (
        <Link  href={url}>
          <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
        </Link>
      )
}


//Helper component to prevent validateDOMNesting error

const HelperNavbrand = (props) =>{
    const {name} = props
    return(
        <Link href="/">
            <a className="navbar-brand port-navbar-brand">{name}</a>
        </Link>
    )

}

//Functional component for Login button

const LoginLink = ()=>{
    return(
        <a className = "nav-link port-navbar-link" href = "/api/v1/login">Login</a>
    )
}

const LoginOutLink = ()=>{
    return(
        <a className = "nav-link port-navbar-link" href = "/api/v1/logout">Log Out</a>
    )
}

//dropdown admin menu
const AdminMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Dropdown
        className="port-navbar-link port-dropdown-menu"
        nav
        isOpen={isOpen}
        toggle={(e) =>{

          e.preventDefault()
           setIsOpen(!isOpen)}}>
           <DropdownToggle className="port-dropdown-toggle" nav caret>
            Admin
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <HelperNavLink
                className="port-dropdown-item"
                url="/portfolios/new"
                title="Create Project"
              />
            </DropdownItem>
            <DropdownItem>
            <HelperNavLink
              className="port-dropdown-item"
              url="/blogs/editor"
              title="Blog Editor"
            />
          </DropdownItem>
          <DropdownItem>
            <HelperNavLink
              className="port-dropdown-item"
              url="/blogs/dashboard"
              title="Dashboard"
            />
          </DropdownItem>
          </DropdownMenu>
      </Dropdown>
    )
  }

//Header React functional component that uses the Next.js Link Component to create a tags or links to all other pages

const Header = ({user,loading,className})=>{
    //to add your name to header change this variable.
    const NameofPortfolio =  "Harikrishnan"


    const [isOpen,setIsOpen] = useState(false);


     const toggle = ()=>{
      setIsOpen(!isOpen)
    }

        return(
            <Navbar style = {{position:"absolute"}} className = {`port-navbar port-default absolute ${className}`}
            dark
            expand="md">
                <HelperNavbrand name = {NameofPortfolio} />
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className = "port-navbar-item">
                        <HelperNavLink  title = "Home" url = "/" />
                        </NavItem>
                        <NavItem className = "port-navbar-item">
                        <HelperNavLink title = "About" url = "/about" />
                        </NavItem>
                        <NavItem className = "port-navbar-item">
                        <HelperNavLink title = "Projects" url = "/portfolios" />
                        </NavItem>
                        <NavItem className = "port-navbar-item">
                        <HelperNavLink title = "Blogs" url = "/blogs" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                        <HelperNavLink title = "Resume" url = "/cv" />
                        </NavItem>
                        {/* <NavItem className="port-navbar-item">
                        <HelperNavLink title = "Secret" url = "/secret" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                        <HelperNavLink title = "SecretSSR" url = "/secretssr" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                        <HelperNavLink title = "Admin" url = "/onlyadmin" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                        <HelperNavLink title = "AdminSSR" url = "/onlyadminssr" />
                        </NavItem> */}

                    </Nav>
                    <Nav navbar>
                    {!loading &&
                    <>
                    { user &&
                    <>
                    { isAuthorized(user, 'admin') === true ?( <AdminMenu />):(null)}
                    <NavItem className="port-navbar-item">
                      <LoginOutLink/>
                    </NavItem>
                    </>


                    }
                    {!user &&
                        <NavItem className="port-navbar-item">
                            <LoginLink/>
                        </NavItem>
                    }

                    </>
                    }

                    </Nav>

                    </Collapse>
        </Navbar>

        )

}

export default Header;
