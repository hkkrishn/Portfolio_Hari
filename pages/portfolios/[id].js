//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the dynamically created page for each project in the porfolio.
import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import {withRouter} from 'next/router'
import PortfolioApi from '@/lib/api/portfolios';
import axios from 'axios'

import {useRouter} from 'next/router'
import {useGetUser} from '@/actions/user';
import { json } from 'express';

//functional class based component

const Portfolio=({portfolio})=>{
    const router = useRouter();
    //on initial render when page is statically optimized and served query is undefined

    //We have two options either we can fetch the data client side, this way we can get statically optimized page
    //or we can server side render the data
    const {data:dataUser,loading:loadingUser}  = useGetUser();

        return(
            <BaseLayout
            user = {dataUser}
      loading = {loadingUser}>
                <BasePage header = "Project Detail">
                {
                    JSON.stringify(portfolio)
                }


                </BasePage>

            </BaseLayout>
        )
}


export async function getServerSideProps({query}) {
    const json = await new PortfolioApi().getById(query.id);
    const portfolio = json.data;

    return {props: { portfolio }};
  }
export default Portfolio;