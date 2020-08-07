//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the about page within the site that will contain all information regarding me.

import React,{Component} from 'react'
import BaseLayout from '../components/layouts/baselayout'

//class component that holds the base layout component as well as information of page that is passed down as props.children

class About extends Component{
  render(){
    return(
      <BaseLayout>
         <h1>I am About Page</h1>

      </BaseLayout>
    )
  }
}

export default About;