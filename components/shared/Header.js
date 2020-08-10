//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the Header component, it holds the main navbar

import React,{Component} from 'react'
import Link from 'next/link'



//Header React class component that uses the Next.js Link Component to create a tags or links to all other pages
class Header extends Component{
    render(){
        return(
            <React.Fragment>
            <Link href = "/">
                <a>Home</a>
            </Link>
            <Link href = "/about">
                <a>About</a>
            </Link>
            <Link href = "/portfolios">
                <a>Portfolios</a>
            </Link>
            <Link href = "/blogs">
                <a>Blogs</a>
            </Link>
            <Link href = "/cv">
                <a>CV</a>
            </Link>


            </React.Fragment>
        )
    }
}

export default Header;