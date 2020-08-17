//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the dynamically created page for each project in the porfolio.
import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import {withRouter} from 'next/router'
import axios from 'axios'
import {useGetData} from '@/actions'
import {useRouter} from 'next/router'

//functional class based component

const Portfolio=()=>{
    const router = useRouter();
    //on initial render when page is statically optimized and served query is undefined
    const {data:portfolio,error,loading} =
    useGetData(router.query.id ? (`/api/v1/posts/${router.query.id}`):(null));


        return(
            <BaseLayout>
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