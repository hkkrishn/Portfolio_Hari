//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the functional component that replaces app.js to conform to Next.js best practices

import React from 'react'
import {Container} from 'reactstrap'

const BasePage = props =>{
    const {className = "",children} = props;

    return(
        <div className = {`base-page ${className}`}>
        <Container>
            {children}
        </Container>

        </div>
    )
}

export default BasePage;