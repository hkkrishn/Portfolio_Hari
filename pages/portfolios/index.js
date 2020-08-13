//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the portfolio page within the site that will contain all links to projects and render them.

import React from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import {useGetPosts} from '@/actions'

//functional component that holds the base layout component as well as information of page that is passed down as props.children

const Portfolios=()=>{
    const { posts,error } = useGetPosts();
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
          {posts&&
            <ul>
            {renderPosts(posts)}
          </ul>
          }
          {error &&
          <div className = "aler alert-danger">{error.message}</div>
          }

        </BasePage>
      </BaseLayout>
    )
}
//function to get posts from JSON Placeholder API



export default Portfolios;