//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the dynamically created page for each project in the porfolio.
import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import {withRouter} from 'next/router'

import axios from 'axios'

import {useRouter} from 'next/router'
import {useGetUser} from '@/actions/user';

//functional class based component

const Portfolio=()=>{

    //on initial render when page is statically optimized and served query is undefined

    //We have two options either we can fetch the data client side, this way we can get statically optimized page
    //or we can server side render the data
    const {data:dataUser,loading:loadingUser}  = useGetUser();

        return(
            <BaseLayout
            user = {dataUser}
      loading = {loadingUser}>
                <BasePage header = "Project Detail">



                </BasePage>

            </BaseLayout>
        )
}


export default Portfolio;