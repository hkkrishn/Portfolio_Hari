//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the portfolio page within the site that will contain all links to projects and render them.

import React,{Component} from 'react'
import BaseLayout from '../components/layouts/baselayout'
import axios from 'axios'
// import Link from 'next/link'
import {Link} from '../routes'

//class component that holds the base layout component as well as information of page that is passed down as props.children

class Portfolios extends Component{
//function to get posts from JSON Placeholder API
    static async getInitialProps(){
      let posts = []
      try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        posts = res.data;
      }catch(err){
          console.log(err)
      }
      return{posts:posts.slice(0,10)};
  }

  //Function to render posts via li tags.
  renderPosts(posts){

      return posts.map(post=>{
        return(
      <li style= {{fontSize:"20px"}} key = {post.id}>
        <Link route = {`/portfolios/${post.id}`} >
            <a>
                {post.title}
            </a>
        </Link>
      </li>
        )

    })
  }
  render(){
      const {posts}= this.props;
    return(
      <BaseLayout>
        <h1 className = "customClass">I am Portfolios Page</h1>
        <ul>
           {this.renderPosts(posts)}
        </ul>
      </BaseLayout>
    )
  }
}

export default Portfolios;