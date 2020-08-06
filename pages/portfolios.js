import React,{Component} from 'react'
import BaseLayout from '../components/layouts/baselayout'

//class component that holds the base layout component as well as information of page that is passed down as props.children

class Portfolios extends Component{
  render(){
    return(
      <BaseLayout>
        <h1>I am Portfolios Page</h1>
      </BaseLayout>
    )
  }
}

export default Portfolios;