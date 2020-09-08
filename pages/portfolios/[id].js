//Author:Harikrishnan Kuppusamykrishnan
//Project: Portfolio Website
//Date: 08/06/2020
//Description: This is the dynamically created page for each project in the porfolio.
import React,{Component} from 'react'
import BaseLayout from '@/components/layouts/baselayout';
import BasePage from '@/components/BasePage';
import PortfolioAPI from '@/lib/api/portfolios'
import {useGetUser} from '@/actions/user';

//functional class based component

const Portfolio=({portfolio})=>{
    console.log(portfolio)
    //on initial render when page is statically optimized and served query is undefined

    //We have two options either we can fetch the data client side, this way we can get statically optimized page
    //or we can server side render the data
    const {data:dataUser,loading:loadingUser}  = useGetUser();

        return(
            <BaseLayout
            user = {dataUser}
      loading = {loadingUser}>
                <BasePage header = "Project Detail">
            {JSON.stringify(portfolio)}


                </BasePage>

            </BaseLayout>
        )
}

export const getServerSideProps = async({query})=>{
 const json = await new PortfolioAPI().getById(query.id)
 console.log(json)
 const portfolio = json.data;
 return{props:{portfolio}}
}

export default Portfolio;