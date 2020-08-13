//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the portfolio page within the site that will contain all links to projects and render them.

import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import axios from 'axios'
import {useEffect} from 'react';



//class component that holds the base layout component as well as information of page that is passed down as props.children

const Portfolios=({posts})=>{
    //UseEffect  Function, empty array indicates that this function will only be called once.
    useEffect(()=>{
      //async function to get data
      const getPosts = async ()=>{
        //fetch function to make request axios can be called as well
         const res =   await fetch('/api/v1/posts')
         const data = await res.json();
        //  console.log(data);



      }
      getPosts();
    },[])

    //Function to render posts via li tags.
    const renderPosts=(posts)=>{

      return posts.map(post=>{
        return(
      <li style= {{fontSize:"20px"}} key = {post.id}>
        <Link as = {`/portfolios/${post.id}`} href = "/portfolios/[id]">
            <a>
                {post.title}
            </a>
        </Link>
      </li>
        )

    })
    }
    return(
      <BaseLayout>
        <BasePage>
          <h1 className = "customClass">I am Portfolios Page</h1>
          <ul>
            {renderPosts(posts)}
          </ul>
        </BasePage>
      </BaseLayout>
    )

}

//function to get posts from JSON Placeholder API
Portfolios.getInitialProps=async()=>{
  let posts = []
  try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    posts = res.data;
  }catch(err){
      console.log(err)
  }
  return{posts:posts.slice(0,10)};
}



export default Portfolios;