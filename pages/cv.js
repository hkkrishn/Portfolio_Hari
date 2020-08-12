//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the CV page within the site that will contain user's CV  and display it.

import React,{Component} from 'react'
import BaseLayout from '../components/layouts/baselayout'
import BasePage from '../components/BasePage'

//class component that holds the base layout component as well as information of page that is passed down as props.children

class CV extends Component{
  render(){
    return(
      <BaseLayout>
        <BasePage>
          <h1>I am CV Page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default CV;