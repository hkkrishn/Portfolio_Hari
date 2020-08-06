import React,{Component} from 'react'
import BaseLayout from '../components/layouts/baselayout'

//class component that holds the base layout component as well as information of page that is passed down as props.children

class Blogs extends Component{
  render(){
    return(
      <BaseLayout>
         <h1>I am Blogs Page</h1>
      </BaseLayout>
    )
  }
}

export default Blogs;