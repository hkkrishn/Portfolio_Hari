//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: Page only viewable to users with admin role associated

import React,{Component} from 'react';
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import {useGetUser} from '@/actions/user';
import Redirect from '@/components/shared/Redirect'
import {withAuth} from '@/HOC/withAuth'
//functional component that holds the base layout component as well as information of page that is passed down as props.children

const  OnlyAdmin = ({data,loading})=>{
    return(
        <BaseLayout
        user = {data}
        loading = {loading}>
          <BasePage>
            <h1>I am Admin Page - {data.name}</h1>
          </BasePage>
        </BaseLayout>
      )



}



export default withAuth(OnlyAdmin)('admin');