//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the about page within the site that will contain all information regarding me.

import React,{Component} from 'react'
import BaseLayout from '../components/layouts/baselayout'
import BasePage from '../components/BasePage'

//functional component that holds the base layout component as well as information of page that is passed down as props.children

const  About = ()=>{
    return(
      <BaseLayout>
        <BasePage>
          <h1>I am About Page</h1>
        </BasePage>
      </BaseLayout>
    )
}

export default About;