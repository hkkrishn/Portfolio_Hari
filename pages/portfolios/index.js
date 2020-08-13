//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the portfolio page within the site that will contain all links to projects and render them.

import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import {useEffect,useState} from 'react';



//class component that holds the base layout component as well as information of page that is passed down as props.children
//posts predfined to empty array
const Portfolios=()=>{

  const [posts,setPosts] = useState([])

    //UseEffect  Function, empty array indicates that this function will only be called once.
    useEffect(()=>{
      //async function to get data
      const getPosts = async ()=>{
        //fetch function to make request axios can be called as well
         const res =   await fetch('/api/v1/posts')
         const data = await res.json();
         console.log(data);
         setPosts(data);



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



export default Portfolios;