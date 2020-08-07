
//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the BaseLayout wrapper component that wraps each page and the header component.


import Header from '../Header'


//React functional component that holds both the page information passed as props.children and the Header Component, displayed on each page.
const BaseLayout = props=>{
    return (
        <>
        <Header/>
        {props.children}
        </>


    )

}

export default BaseLayout;