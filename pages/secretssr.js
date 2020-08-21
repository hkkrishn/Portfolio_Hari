//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description:  Server Side Rendered Secret page where only authenticated users have access to this page

import React,{Component} from 'react';
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import {useGetUser} from '@/actions/user';
import Redirect from '@/components/shared/Redirect'

import auth0,{authorizeUser,withAuth} from '@/utils/auth0'


//functional component that holds the base layout component as well as information of page that is passed down as props.children

const  SecretSSR = ({user,title})=>{
    const {data,loading} = useGetUser();
    return(
        <BaseLayout
        user = {user}
        loading = {loading}>
          <BasePage>
            <h1>I am Secret Page - { user && user.name}</h1>
            <h2>{title}</h2>
          </BasePage>
        </BaseLayout>
    )
}



//Executed only on the server
  //must be called getServerSideProps
  //function receives the context object
  //This functionality is not part of the browser



//simulator function to async fetchd data
const getTitle = ()=>{
  return new Promise((res)=>{
    setTimeout(()=>{
      //resolve promise
        res({title:"HARI TITLE"})
    },500)

  })
}

// withAuth will also allow for fetching additonal  data from server
export const getServerSideProps = withAuth( async ()=>{
  const title =  await getTitle()
  return title;
});
export default SecretSSR;