
//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the BaseLayout wrapper component that wraps each page and the header component.


import Header from '../shared/Header'


//React functional component that holds both the page information passed as props.children and the Header Component, displayed on each page.
const BaseLayout = props=>{
    const {className,user,loading,children} = props;
    return (
        <div className = "layout-container">
        <Header user = {user} loading = {loading}/>
        <main className = {`cover ${className}`}>
            <div className = "wrapper">
            {children}
            </div>
        </main>
        </div>


    )

}

export default BaseLayout;