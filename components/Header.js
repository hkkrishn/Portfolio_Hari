import React,{Component} from 'react'
import Link from 'next/link'

class Header extends Component{
    render(){
        return(
            <React.Fragment>
            <div>
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
            </div>
            </React.Fragment>
        )
    }
}

export default Header;