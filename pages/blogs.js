
//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the blogs page within the site that will contain all blogs posts created by the user and render them for viewing.

import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout'
import BasePage from '@/components/BasePage'
import {useGetUser} from '@/actions/user';

//functional component that holds the base layout component as well as information of page that is passed down as props.children

const Blogs = ()=>{
  const {data,loading} = useGetUser();
    return(
      <BaseLayout
      user = {data}
      loading = {loading}>
        <BasePage>
          <h1>I am Blogs Page</h1>
        </BasePage>
      </BaseLayout>
    )
}

export default Blogs;