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