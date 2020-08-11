//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the main component that holds all pages.

import React,{Component} from 'react'
import BaseLayout from '../components/layouts/baselayout'
import {Button,Container} from 'reactstrap'

//class component that holds the base layout component as well as information of page that is passed down as props.children
class Index extends Component{
  render(){
    return(
      <BaseLayout>
        <Container>
          <Button color = "danger">Hari</Button>
        </Container>
      </BaseLayout>
    )
  }
}

export default Index;