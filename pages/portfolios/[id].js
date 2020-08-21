//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the dynamically created page for each project in the porfolio.
import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import {withRouter} from 'next/router'
import axios from 'axios'
import {useGetPostsById} from '@/actions'
import {useRouter} from 'next/router'
import {useGetUser} from '@/actions/user';

//functional class based component

const Portfolio=()=>{
    const router = useRouter();
    //on initial render when page is statically optimized and served query is undefined
    const {data:portfolio,error,loading} =
    //useSWR handles the situation where router.query.id is undefined upon initially rendered
    useGetPostsById(router.query.id);
    const {data:dataUser,loading:loadingUser}  = useGetUser();

        return(
            <BaseLayout
            user = {dataUser}
      loading = {loadingUser}>
                <BasePage>
                {loading && <p>Loading Data... </p>}
                {error && <div className = "alert alert-danger">
                {error.message}

                </div>}
                {portfolio &&
                <>
                <h1>I am a project</h1>
                <h1>{portfolio.title}</h1>
                <p>BODY:{portfolio.body}</p>
                <p>ID:{portfolio.id}</p>
                </>
                }


                </BasePage>

            </BaseLayout>
        )
}



export default withRouter(Portfolio);