//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the CV page within the site that will contain user's CV  and display it.

import React,{Component} from 'react'
import BaseLayout from '../components/layouts/baselayout'

//class component that holds the base layout component as well as information of page that is passed down as props.children

class CV extends Component{
  render(){
    return(
      <BaseLayout>
        <h1>I am CV Page</h1>
      </BaseLayout>
    )
  }
}

export default CV;